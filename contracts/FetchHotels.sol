// pragma solidity ^0.8.0;
// import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

// contract FetchHotels is ChainlinkClient {
//     uint256 public hotelCount;

//     constructor(address _linkToken, address _oracle) {
//         setChainlinkToken(_linkToken);
//         setChainlinkOracle(_oracle);
//     }

//     function requestHotels(string memory apiURL, string memory jobId) public {
//         Chainlink.Request memory req = buildChainlinkRequest(
//             bytes32(jobId),
//             address(this),
//             this.fulfill.selector
//         );
//         req.add("get", apiURL);
//         sendChainlinkRequest(req, LINK_FEE);
//     }

//     function fulfill(bytes32 _requestId, uint256 _hotelCount)
//         public
//         recordChainlinkFulfillment(_requestId)
//     {
//         hotelCount = _hotelCount;
//     }
// }
