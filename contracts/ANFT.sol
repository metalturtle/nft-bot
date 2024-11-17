// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

/// @title Application NFTs
/// @notice An ERC721 for the deployment of applications. The owner can also give roles to other users.
/**
 * @dev This contract requires a minter contract for minting of tokens.
 * This contract implements an NFT access control module
 * Only the skyID owner or an ACCESS_MANAGER defined by the owner can
 * grant/revoke roles to other accounts.
 * When an skyID is transferred, all the roles are revoked. This is a
 * security mechanism to prevent malicious users from still affecting the
 * skyID operations.
 * Certain roles have usage in other contracts, like BILLING_MANAGER or DEPLOYER
 * Certain roles have off chain usage, like READ OR DEPLOYER roles.
 */
contract ANFT is
    ERC721EnumerableUpgradeable,
    OwnableUpgradeable
{
    uint256 public nextTokenID;

    mapping(uint256 => string) private _tokenURIs;


    event SetTokenURI(uint256 tokenID, string tokenURI);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() public initializer {
        __ERC721_init_unchained("ANFT", "ANFT");
        __Ownable_init_unchained();
        nextTokenID++;
    }


    /**
     * @dev The minter contract mints an NFT, with the latest token ID.
     * Each time an NFT is minted, the token ID is incremented.
     **/
    function mint(address to, string memory metadataURI) external {
        uint tokenID = nextTokenID++;
        _mint(to, tokenID);
        _setTokenURI(tokenID, metadataURI);
    }

    /**
     * @dev Same as mint, but with an additional check, that the if the
     * to address is a contract, then it should implement an erc721Receiver
     * function.
     **/
    function safeMint(address to, string memory metadataURI) external {
        uint tokenID = nextTokenID++;
        _mint(to, tokenID);
        _setTokenURI(tokenID, metadataURI);
    }


    /**
     * @dev Sets the NFT Metadata path.
     * The NFT Metadata can only be set for a minted NFT token.
     * Only the owner, or a deployer role can set the path.
     **/
    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
        _requireMinted(tokenId);

        _tokenURIs[tokenId] = _tokenURI;

        emit SetTokenURI(tokenId, _tokenURI);
    }

    /**
     * @dev Sets the NFT Metadata path.
     * The NFT Metadata can only be set for a minted NFT token.
     * Only the owner, or a deployer role can set the path.
     **/
    function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
        address owner = ownerOf(tokenId);
        require(
            (owner == _msgSender()),
            "only allowed for NFT owner"
        );
        _setTokenURI(tokenId, _tokenURI);

        emit SetTokenURI(tokenId, _tokenURI);
    }

    /**
     * @dev See {IERC721MetadataUpgradeable-tokenURI}.
     * The token URI is only valid for a minted NFT.
     **/
    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        _requireMinted(tokenId);
        return _tokenURIs[tokenId];
    }
  
}
