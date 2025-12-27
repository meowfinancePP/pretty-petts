// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/// @title PrettyPets NFT Contract
/// @author PrettyPets Team
/// @notice ERC721 NFT contract for digital pets with donation features
/// @dev Implements ERC721 with additional features for pet management and charity donations
contract PrettyPetsNFT is ERC721, ERC721URIStorage, ERC721Burnable, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // Pet rarity levels
    enum Rarity { Common, Rare, Epic, Legendary }

    // Pet attributes
    struct PetAttributes {
        string name;
        string species;
        Rarity rarity;
        uint256 generation;
        uint256 birthTime;
        uint256 lastFed;
        uint256 happiness;
        uint256 health;
        uint256 experience;
        bool isAlive;
    }

    // Donation tracking
    struct Donation {
        address donor;
        uint256 amount;
        uint256 timestamp;
        string shelterName;
    }

    // State variables
    mapping(uint256 => PetAttributes) public petAttributes;
    mapping(address => uint256[]) public ownerPets;
    mapping(uint256 => bool) public petExists;
    mapping(string => bool) public usedTokenURIs;
    mapping(address => uint256) public totalDonations;

    Donation[] public donations;

    // Constants
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public constant DONATION_FEE = 250; // 2.5% in basis points
    uint256 public constant BASIS_POINTS = 10000;

    // Events
    event PetCreated(uint256 indexed tokenId, address indexed owner, string name, Rarity rarity);
    event PetFed(uint256 indexed tokenId, uint256 happinessIncrease);
    event PetHealed(uint256 indexed tokenId, uint256 healthIncrease);
    event DonationMade(address indexed donor, uint256 amount, string shelterName);
    event ShelterSupported(string shelterName, uint256 totalAmount);

    /// @notice Contract constructor
    /// @param _name NFT collection name
    /// @param _symbol NFT collection symbol
    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    /// @notice Create a new pet NFT
    /// @param _to Address to mint the NFT to
    /// @param _name Pet name
    /// @param _species Pet species
    /// @param _rarity Pet rarity
    /// @param _tokenURI Metadata URI for the NFT
    /// @return tokenId The ID of the created NFT
    function createPet(
        address _to,
        string memory _name,
        string memory _species,
        Rarity _rarity,
        string memory _tokenURI
    ) external onlyOwner returns (uint256) {
        require(_tokenIdCounter.current() < MAX_SUPPLY, "Max supply reached");
        require(!usedTokenURIs[_tokenURI], "Token URI already used");

        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();

        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, _tokenURI);

        petAttributes[tokenId] = PetAttributes({
            name: _name,
            species: _species,
            rarity: _rarity,
            generation: 1,
            birthTime: block.timestamp,
            lastFed: block.timestamp,
            happiness: 100,
            health: 100,
            experience: 0,
            isAlive: true
        });

        petExists[tokenId] = true;
        ownerPets[_to].push(tokenId);
        usedTokenURIs[_tokenURI] = true;

        emit PetCreated(tokenId, _to, _name, _rarity);
        return tokenId;
    }

    /// @notice Feed a pet to increase happiness
    /// @param _tokenId Token ID of the pet to feed
    function feedPet(uint256 _tokenId) external {
        require(ownerOf(_tokenId) == msg.sender, "Not pet owner");
        require(petExists[_tokenId], "Pet does not exist");
        require(petAttributes[_tokenId].isAlive, "Pet is not alive");

        PetAttributes storage pet = petAttributes[_tokenId];
        pet.lastFed = block.timestamp;

        // Increase happiness based on rarity
        uint256 happinessIncrease = 10;
        if (pet.rarity == Rarity.Rare) happinessIncrease = 15;
        else if (pet.rarity == Rarity.Epic) happinessIncrease = 20;
        else if (pet.rarity == Rarity.Legendary) happinessIncrease = 25;

        pet.happiness = pet.happiness + happinessIncrease > 100 ? 100 : pet.happiness + happinessIncrease;
        pet.experience += 5;

        emit PetFed(_tokenId, happinessIncrease);
    }

    /// @notice Heal a pet to restore health
    /// @param _tokenId Token ID of the pet to heal
    function healPet(uint256 _tokenId) external payable {
        require(ownerOf(_tokenId) == msg.sender, "Not pet owner");
        require(petExists[_tokenId], "Pet does not exist");
        require(petAttributes[_tokenId].isAlive, "Pet is not alive");
        require(msg.value >= 0.001 ether, "Minimum healing fee: 0.001 ETH");

        PetAttributes storage pet = petAttributes[_tokenId];

        // Restore health
        uint256 healthIncrease = 20;
        pet.health = pet.health + healthIncrease > 100 ? 100 : pet.health + healthIncrease;

        emit PetHealed(_tokenId, healthIncrease);
    }

    /// @notice Make a donation to animal shelters
    /// @param _shelterName Name of the shelter to donate to
    function makeDonation(string memory _shelterName) external payable {
        require(msg.value > 0, "Donation amount must be greater than 0");

        // Calculate donation fee
        uint256 fee = (msg.value * DONATION_FEE) / BASIS_POINTS;
        uint256 donationAmount = msg.value - fee;

        // Transfer fee to contract owner
        payable(owner()).transfer(fee);

        // Record donation
        donations.push(Donation({
            donor: msg.sender,
            amount: donationAmount,
            timestamp: block.timestamp,
            shelterName: _shelterName
        }));

        totalDonations[msg.sender] += donationAmount;

        emit DonationMade(msg.sender, donationAmount, _shelterName);
    }

    /// @notice Get pet attributes
    /// @param _tokenId Token ID of the pet
    /// @return Pet attributes struct
    function getPetAttributes(uint256 _tokenId) external view returns (PetAttributes memory) {
        require(petExists[_tokenId], "Pet does not exist");
        return petAttributes[_tokenId];
    }

    /// @notice Get pets owned by an address
    /// @param _owner Address to query
    /// @return Array of token IDs
    function getPetsByOwner(address _owner) external view returns (uint256[] memory) {
        return ownerPets[_owner];
    }

    /// @notice Get total donations by an address
    /// @param _donor Address to query
    /// @return Total donation amount
    function getTotalDonations(address _donor) external view returns (uint256) {
        return totalDonations[_donor];
    }

    /// @notice Get all donations
    /// @return Array of all donations
    function getAllDonations() external view returns (Donation[] memory) {
        return donations;
    }

    /// @notice Get current token counter
    /// @return Current token count
    function totalSupply() external view returns (uint256) {
        return _tokenIdCounter.current();
    }

    /// @notice Check if pet needs care (low happiness/health)
    /// @param _tokenId Token ID to check
    /// @return True if pet needs care
    function petNeedsCare(uint256 _tokenId) external view returns (bool) {
        require(petExists[_tokenId], "Pet does not exist");
        PetAttributes memory pet = petAttributes[_tokenId];
        return pet.happiness < 50 || pet.health < 50;
    }

    /// @notice Override tokenURI to ensure proper metadata
    /// @param tokenId Token ID
    /// @return Token URI string
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    /// @notice Override supportsInterface
    /// @param interfaceId Interface ID
    /// @return True if interface is supported
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    /// @notice Burn function override
    /// @param tokenId Token ID to burn
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    /// @notice Withdraw contract funds (owner only)
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        payable(owner()).transfer(balance);
    }
}
