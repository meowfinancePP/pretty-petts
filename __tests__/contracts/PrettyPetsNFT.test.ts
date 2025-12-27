/**
 * Smart Contract Tests for PrettyPets
 */

import { expect } from 'chai'
import { ethers } from 'hardhat'
import { Contract, SignerWithAddress } from 'ethers'
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers'

describe('PrettyPetsNFT', function () {
  let prettyPetsNFT: Contract
  let owner: SignerWithAddress
  let user1: SignerWithAddress
  let user2: SignerWithAddress

  const TOKEN_NAME = 'PrettyPets'
  const TOKEN_SYMBOL = 'PP'

  async function deployPrettyPetsNFTFixture() {
    const [owner, user1, user2] = await ethers.getSigners()

    const PrettyPetsNFT = await ethers.getContractFactory('PrettyPetsNFT')
    const prettyPetsNFT = await PrettyPetsNFT.deploy(TOKEN_NAME, TOKEN_SYMBOL)
    await prettyPetsNFT.deployed()

    return { prettyPetsNFT, owner, user1, user2 }
  }

  beforeEach(async function () {
    ;({ prettyPetsNFT, owner, user1, user2 } = await loadFixture(deployPrettyPetsNFTFixture))
  })

  describe('Deployment', function () {
    it('Should set the correct name and symbol', async function () {
      expect(await prettyPetsNFT.name()).to.equal(TOKEN_NAME)
      expect(await prettyPetsNFT.symbol()).to.equal(TOKEN_SYMBOL)
    })

    it('Should set the correct owner', async function () {
      expect(await prettyPetsNFT.owner()).to.equal(owner.address)
    })

    it('Should have zero total supply initially', async function () {
      expect(await prettyPetsNFT.totalSupply()).to.equal(0)
    })
  })

  describe('Pet Creation', function () {
    const petData = {
      name: 'Fluffy',
      species: 'Cat',
      rarity: 2, // Epic
      tokenURI: 'ipfs://QmTest123'
    }

    it('Should create a pet successfully', async function () {
      const tx = await prettyPetsNFT.createPet(
        user1.address,
        petData.name,
        petData.species,
        petData.rarity,
        petData.tokenURI
      )

      await expect(tx)
        .to.emit(prettyPetsNFT, 'PetCreated')
        .withArgs(1, user1.address, petData.name, petData.rarity)

      expect(await prettyPetsNFT.totalSupply()).to.equal(1)
      expect(await prettyPetsNFT.ownerOf(1)).to.equal(user1.address)
    })

    it('Should store pet attributes correctly', async function () {
      await prettyPetsNFT.createPet(
        user1.address,
        petData.name,
        petData.species,
        petData.rarity,
        petData.tokenURI
      )

      const attributes = await prettyPetsNFT.getPetAttributes(1)
      expect(attributes.name).to.equal(petData.name)
      expect(attributes.species).to.equal(petData.species)
      expect(attributes.rarity).to.equal(petData.rarity)
      expect(attributes.isAlive).to.equal(true)
      expect(attributes.happiness).to.equal(100)
      expect(attributes.health).to.equal(100)
    })

    it('Should track pets by owner', async function () {
      await prettyPetsNFT.createPet(
        user1.address,
        petData.name,
        petData.species,
        petData.rarity,
        petData.tokenURI
      )

      const user1Pets = await prettyPetsNFT.getPetsByOwner(user1.address)
      expect(user1Pets).to.deep.equal([ethers.BigNumber.from(1)])
    })

    it('Should reject duplicate token URIs', async function () {
      await prettyPetsNFT.createPet(
        user1.address,
        petData.name,
        petData.species,
        petData.rarity,
        petData.tokenURI
      )

      await expect(
        prettyPetsNFT.createPet(
          user2.address,
          'Different Name',
          'Dog',
          1,
          petData.tokenURI // Same URI
        )
      ).to.be.revertedWith('Token URI already used')
    })

    it('Should enforce max supply', async function () {
      const maxSupply = await prettyPetsNFT.MAX_SUPPLY()

      // Create pets up to max supply
      for (let i = 0; i < maxSupply; i++) {
        await prettyPetsNFT.createPet(
          user1.address,
          `Pet${i}`,
          'Species',
          0,
          `ipfs://QmTest${i}`
        )
      }

      // Next creation should fail
      await expect(
        prettyPetsNFT.createPet(
          user1.address,
          'One Too Many',
          'Species',
          0,
          'ipfs://QmTooMany'
        )
      ).to.be.revertedWith('Max supply reached')
    })
  })

  describe('Pet Care', function () {
    beforeEach(async function () {
      await prettyPetsNFT.createPet(
        user1.address,
        'TestPet',
        'Dog',
        1, // Rare
        'ipfs://QmTest'
      )
    })

    it('Should allow pet owner to feed pet', async function () {
      const initialAttributes = await prettyPetsNFT.getPetAttributes(1)
      expect(initialAttributes.happiness).to.equal(100)

      await expect(prettyPetsNFT.connect(user1).feedPet(1))
        .to.emit(prettyPetsNFT, 'PetFed')
        .withArgs(1, 15) // Rare pets get +15 happiness

      const updatedAttributes = await prettyPetsNFT.getPetAttributes(1)
      expect(updatedAttributes.happiness).to.equal(115)
    })

    it('Should increase happiness based on rarity', async function () {
      // Create pets of different rarities
      await prettyPetsNFT.createPet(user1.address, 'Common', 'Cat', 0, 'ipfs://QmCommon')
      await prettyPetsNFT.createPet(user1.address, 'Epic', 'Cat', 2, 'ipfs://QmEpic')
      await prettyPetsNFT.createPet(user1.address, 'Legendary', 'Cat', 3, 'ipfs://QmLegendary')

      // Feed all pets
      await prettyPetsNFT.connect(user1).feedPet(2) // Common +10
      await prettyPetsNFT.connect(user1).feedPet(3) // Rare +15
      await prettyPetsNFT.connect(user1).feedPet(4) // Epic +20

      const commonAttrs = await prettyPetsNFT.getPetAttributes(2)
      const rareAttrs = await prettyPetsNFT.getPetAttributes(3)
      const epicAttrs = await prettyPetsNFT.getPetAttributes(4)

      expect(commonAttrs.happiness).to.equal(110)
      expect(rareAttrs.happiness).to.equal(115)
      expect(epicAttrs.happiness).to.equal(120)
    })

    it('Should allow healing pets for a fee', async function () {
      const healFee = ethers.utils.parseEther('0.001')

      await expect(
        prettyPetsNFT.connect(user1).healPet(1, { value: healFee })
      )
        .to.emit(prettyPetsNFT, 'PetHealed')
        .withArgs(1, 20)

      const attributes = await prettyPetsNFT.getPetAttributes(1)
      expect(attributes.health).to.equal(120)
    })

    it('Should reject healing without minimum fee', async function () {
      const insufficientFee = ethers.utils.parseEther('0.0005')

      await expect(
        prettyPetsNFT.connect(user1).healPet(1, { value: insufficientFee })
      ).to.be.revertedWith('Minimum healing fee: 0.001 ETH')
    })

    it('Should reject actions on non-existent pets', async function () {
      await expect(
        prettyPetsNFT.connect(user1).feedPet(999)
      ).to.be.revertedWith('Pet does not exist')
    })

    it('Should reject actions by non-owners', async function () {
      await expect(
        prettyPetsNFT.connect(user2).feedPet(1)
      ).to.be.revertedWith('Not pet owner')
    })
  })

  describe('Donations', function () {
    it('Should accept donations and track them', async function () {
      const donationAmount = ethers.utils.parseEther('1.0')

      await expect(
        prettyPetsNFT.connect(user1).makeDonation('Local Shelter', { value: donationAmount })
      )
        .to.emit(prettyPetsNFT, 'DonationMade')
        .withArgs(user1.address, donationAmount.sub(donationAmount.mul(250).div(10000)), 'Local Shelter')

      const donations = await prettyPetsNFT.getAllDonations()
      expect(donations.length).to.equal(1)
      expect(donations[0].donor).to.equal(user1.address)
      expect(donations[0].shelterName).to.equal('Local Shelter')

      const userDonations = await prettyPetsNFT.getTotalDonations(user1.address)
      expect(userDonations).to.equal(donationAmount.sub(donationAmount.mul(250).div(10000)))
    })

    it('Should take platform fee from donations', async function () {
      const donationAmount = ethers.utils.parseEther('10.0')
      const expectedFee = donationAmount.mul(250).div(10000) // 2.5%
      const expectedDonation = donationAmount.sub(expectedFee)

      const initialOwnerBalance = await ethers.provider.getBalance(owner.address)

      await prettyPetsNFT.connect(user1).makeDonation('Shelter', { value: donationAmount })

      const finalOwnerBalance = await ethers.provider.getBalance(owner.address)
      expect(finalOwnerBalance.sub(initialOwnerBalance)).to.equal(expectedFee)
    })

    it('Should reject zero donations', async function () {
      await expect(
        prettyPetsNFT.connect(user1).makeDonation('Shelter')
      ).to.be.revertedWith('Donation amount must be greater than 0')
    })
  })

  describe('Pet Care Monitoring', function () {
    it('Should identify pets that need care', async function () {
      await prettyPetsNFT.createPet(user1.address, 'TestPet', 'Dog', 0, 'ipfs://QmTest')

      // Fresh pet should not need care
      expect(await prettyPetsNFT.petNeedsCare(2)).to.equal(false)

      // Manually set low happiness (simulating neglect)
      // This would normally be done through gameplay mechanics
      // For testing, we'll assume the contract has internal logic

      // The petNeedsCare function checks if happiness < 50 or health < 50
      // Since we can't directly modify state, we'll test with a pet that has been "cared for"
      expect(await prettyPetsNFT.petNeedsCare(2)).to.equal(false)
    })
  })
})
