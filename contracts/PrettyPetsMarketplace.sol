// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title PrettyPets Marketplace Contract
/// @author PrettyPets Team
/// @notice Marketplace contract for trading PrettyPets NFTs
/// @dev Handles NFT listings, sales, and auctions
contract PrettyPetsMarketplace is ReentrancyGuard, Ownable {
    // Listing structure
    struct Listing {
        uint256 tokenId;
        address seller;
        address nftContract;
        uint256 price;
        bool isActive;
        uint256 listedAt;
    }

    // Auction structure
    struct Auction {
        uint256 tokenId;
        address seller;
        address nftContract;
        uint256 startingPrice;
        uint256 currentBid;
        address currentBidder;
        uint256 endTime;
        bool isActive;
        uint256 reservePrice;
    }

    // State variables
    mapping(address => mapping(uint256 => Listing)) public listings;
    mapping(address => mapping(uint256 => Auction)) public auctions;
    mapping(address => uint256) public sellerBalances;
    mapping(address => uint256) public platformFees;

    // Constants
    uint256 public constant PLATFORM_FEE = 250; // 2.5% in basis points
    uint256 public constant BASIS_POINTS = 10000;
    uint256 public constant AUCTION_DURATION = 7 days;

    // Events
    event NFTListed(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 price);
    event NFTSold(address indexed nftContract, uint256 indexed tokenId, address indexed buyer, address seller, uint256 price);
    event ListingCancelled(address indexed nftContract, uint256 indexed tokenId, address indexed seller);
    event AuctionCreated(address indexed nftContract, uint256 indexed tokenId, address indexed seller, uint256 startingPrice, uint256 endTime);
    event BidPlaced(address indexed nftContract, uint256 indexed tokenId, address indexed bidder, uint256 bidAmount);
    event AuctionEnded(address indexed nftContract, uint256 indexed tokenId, address indexed winner, uint256 finalPrice);

    /// @notice List an NFT for sale
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID to list
    /// @param _price Sale price in wei
    function listNFT(address _nftContract, uint256 _tokenId, uint256 _price) external {
        require(_price > 0, "Price must be greater than 0");
        require(!listings[_nftContract][_tokenId].isActive, "NFT already listed");
        require(!auctions[_nftContract][_tokenId].isActive, "NFT is in auction");

        // Transfer NFT to marketplace
        IERC721 nftContract = IERC721(_nftContract);
        require(nftContract.ownerOf(_tokenId) == msg.sender, "Not NFT owner");
        require(nftContract.getApproved(_tokenId) == address(this) || nftContract.isApprovedForAll(msg.sender, address(this)), "Marketplace not approved");

        nftContract.transferFrom(msg.sender, address(this), _tokenId);

        listings[_nftContract][_tokenId] = Listing({
            tokenId: _tokenId,
            seller: msg.sender,
            nftContract: _nftContract,
            price: _price,
            isActive: true,
            listedAt: block.timestamp
        });

        emit NFTListed(_nftContract, _tokenId, msg.sender, _price);
    }

    /// @notice Buy a listed NFT
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID to buy
    function buyNFT(address _nftContract, uint256 _tokenId) external payable nonReentrant {
        Listing storage listing = listings[_nftContract][_tokenId];
        require(listing.isActive, "NFT not listed");
        require(msg.value >= listing.price, "Insufficient payment");

        // Calculate platform fee
        uint256 platformFee = (listing.price * PLATFORM_FEE) / BASIS_POINTS;
        uint256 sellerAmount = listing.price - platformFee;

        // Update balances
        sellerBalances[listing.seller] += sellerAmount;
        platformFees[owner()] += platformFee;

        // Transfer NFT to buyer
        IERC721(_nftContract).transferFrom(address(this), msg.sender, _tokenId);

        // Mark listing as inactive
        listing.isActive = false;

        emit NFTSold(_nftContract, _tokenId, msg.sender, listing.seller, listing.price);

        // Refund excess payment
        if (msg.value > listing.price) {
            payable(msg.sender).transfer(msg.value - listing.price);
        }
    }

    /// @notice Cancel an NFT listing
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID to cancel
    function cancelListing(address _nftContract, uint256 _tokenId) external {
        Listing storage listing = listings[_nftContract][_tokenId];
        require(listing.isActive, "NFT not listed");
        require(listing.seller == msg.sender, "Not the seller");

        // Transfer NFT back to seller
        IERC721(_nftContract).transferFrom(address(this), msg.sender, _tokenId);

        listing.isActive = false;

        emit ListingCancelled(_nftContract, _tokenId, msg.sender);
    }

    /// @notice Create an auction for an NFT
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID to auction
    /// @param _startingPrice Starting price in wei
    /// @param _reservePrice Reserve price in wei (0 for no reserve)
    function createAuction(address _nftContract, uint256 _tokenId, uint256 _startingPrice, uint256 _reservePrice) external {
        require(_startingPrice > 0, "Starting price must be greater than 0");
        require(!listings[_nftContract][_tokenId].isActive, "NFT is listed for sale");
        require(!auctions[_nftContract][_tokenId].isActive, "NFT already in auction");

        // Transfer NFT to marketplace
        IERC721 nftContract = IERC721(_nftContract);
        require(nftContract.ownerOf(_tokenId) == msg.sender, "Not NFT owner");
        require(nftContract.getApproved(_tokenId) == address(this) || nftContract.isApprovedForAll(msg.sender, address(this)), "Marketplace not approved");

        nftContract.transferFrom(msg.sender, address(this), _tokenId);

        auctions[_nftContract][_tokenId] = Auction({
            tokenId: _tokenId,
            seller: msg.sender,
            nftContract: _nftContract,
            startingPrice: _startingPrice,
            currentBid: 0,
            currentBidder: address(0),
            endTime: block.timestamp + AUCTION_DURATION,
            isActive: true,
            reservePrice: _reservePrice
        });

        emit AuctionCreated(_nftContract, _tokenId, msg.sender, _startingPrice, block.timestamp + AUCTION_DURATION);
    }

    /// @notice Place a bid on an auction
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID to bid on
    function placeBid(address _nftContract, uint256 _tokenId) external payable {
        Auction storage auction = auctions[_nftContract][_tokenId];
        require(auction.isActive, "Auction not active");
        require(block.timestamp < auction.endTime, "Auction ended");
        require(msg.value > auction.currentBid, "Bid too low");
        require(msg.value >= auction.startingPrice, "Bid below starting price");

        // Refund previous bidder
        if (auction.currentBidder != address(0)) {
            payable(auction.currentBidder).transfer(auction.currentBid);
        }

        auction.currentBid = msg.value;
        auction.currentBidder = msg.sender;

        emit BidPlaced(_nftContract, _tokenId, msg.sender, msg.value);
    }

    /// @notice End an auction
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID of the auction to end
    function endAuction(address _nftContract, uint256 _tokenId) external {
        Auction storage auction = auctions[_nftContract][_tokenId];
        require(auction.isActive, "Auction not active");
        require(block.timestamp >= auction.endTime || msg.sender == auction.seller, "Auction not ended");

        auction.isActive = false;

        if (auction.currentBidder != address(0) && auction.currentBid >= auction.reservePrice) {
            // Calculate fees
            uint256 platformFee = (auction.currentBid * PLATFORM_FEE) / BASIS_POINTS;
            uint256 sellerAmount = auction.currentBid - platformFee;

            // Update balances
            sellerBalances[auction.seller] += sellerAmount;
            platformFees[owner()] += platformFee;

            // Transfer NFT to winner
            IERC721(_nftContract).transferFrom(address(this), auction.currentBidder, _tokenId);

            emit AuctionEnded(_nftContract, _tokenId, auction.currentBidder, auction.currentBid);
        } else {
            // Return NFT to seller
            IERC721(_nftContract).transferFrom(address(this), auction.seller, _tokenId);
        }
    }

    /// @notice Withdraw seller balance
    function withdrawBalance() external {
        uint256 balance = sellerBalances[msg.sender];
        require(balance > 0, "No balance to withdraw");

        sellerBalances[msg.sender] = 0;
        payable(msg.sender).transfer(balance);
    }

    /// @notice Withdraw platform fees (owner only)
    function withdrawPlatformFees() external onlyOwner {
        uint256 fees = platformFees[owner()];
        require(fees > 0, "No fees to withdraw");

        platformFees[owner()] = 0;
        payable(owner()).transfer(fees);
    }

    /// @notice Get listing details
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID
    /// @return Listing details
    function getListing(address _nftContract, uint256 _tokenId) external view returns (Listing memory) {
        return listings[_nftContract][_tokenId];
    }

    /// @notice Get auction details
    /// @param _nftContract Address of the NFT contract
    /// @param _tokenId Token ID
    /// @return Auction details
    function getAuction(address _nftContract, uint256 _tokenId) external view returns (Auction memory) {
        return auctions[_nftContract][_tokenId];
    }

    /// @notice Get seller balance
    /// @param _seller Address of the seller
    /// @return Balance amount
    function getSellerBalance(address _seller) external view returns (uint256) {
        return sellerBalances[_seller];
    }
}
