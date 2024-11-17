// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.19;
import "./ANFT.sol";
contract NFTMetadataBatchUpdater {
    // Mapping to store NFT metadata (tokenId => IPFS hash)
    mapping(uint256 => string) public tokenMetadata;
    uint256 tokenID;
    ANFT public assetNFT;
    address public toAddress;

    constructor(address _assetNFT, address _toAddress) {
        assetNFT = ANFT(_assetNFT);
        toAddress = _toAddress;
    }

    // Event to emit when metadata is updated
    event MetadataUpdated(uint256 tokenId, string newIpfsHash);

    // Function to update metadata for multiple NFTs
    function updateBatchMetadata( string[] memory newIpfsHashes) public {
        require(newIpfsHashes.length > 0, "No new IPFS hashes provided");

        for (uint256 i = 0; i < newIpfsHashes.length; i++) {
            tokenMetadata[tokenID] = newIpfsHashes[i];
            assetNFT.mint(toAddress, newIpfsHashes[i]);
            emit MetadataUpdated(tokenID, newIpfsHashes[i]);
            tokenID++;
        }
    }

    // Function to fetch metadata for a token
    function getMetadata(uint256 tokenId) public view returns (string memory) {
        return tokenMetadata[tokenId];
    }
}
