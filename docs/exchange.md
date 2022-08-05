# Joepegs Exchange

### Overview
Joepegs exchange is based on [https://docs.looksrare.org/developers/looksrare-exchange-overview](LooksRare) hybrid on-chain & off-chain architectures. In a nutshell:
- Non-custodial exchange, meaning contracts don't hold user NFTs or funds until transaction confirmed. 
- Listings and Offers are stored off-chain as EIP-712 signatures. 
- Buyer and seller orders are then matched with off-chain listings and offers to execute trades for NFTs. 

### Smart Contracts
Github: https://github.com/traderjoe-xyz/joepegs

| Contract | Address |
|----------|---------|
| JoepegsExchange (Proxy) | 0xaE079eDA901F7727D0715aff8f82BA8295719977 |
| RoyaltyFeeManager (Proxy) | 0x3f2855fb9651B87c89a08ec1fe0E2EBF41A597D8 |
| TransferSelector (Proxy) | 0x6817F284319DD8fED56A8577d9A29B5685EB6915 |
| TransferManagerERC721 (Proxy) | 0x16736b117ab4842C825599db1f1F4B0fd32D3751 |
| TransferManagerERC1155 (Proxy) | 0x85fF75F797b0B4132F0ce33E6f6Bf688d23E284F |
| TransferSelector (Proxy) | 0x6817F284319DD8fED56A8577d9A29B5685EB6915 |
| CurrencyManager (Proxy) | 0xf28b97020949Dd9aBcFa65fD6ff28C943b68A62b |


### Notable Changes
Joepegs smart contracts are based on LooksRare. We added a few features such as: 
- Support batch ordering, i.e. multiple taker asks in a single transaction. 
- Configure both Royalty and Protocol Fee at contract level. 

### Order Matching
There are four types of orders. A trade is performed with a Taker order matches with a Maker order. 

| Order | What is it? |
|-------|-------------|
| Maker Ask | user places offer to buy item at a specified price |
| Maker Bid | seller creates listing to sell item at a specified price | 
| Taker Ask | seller accepts buyer offer, and sells item at buyer's price |
| Taker Bid | buyer buys item at the seller's listing price |


### Measuring marketplace volume
Joepegs supports transactions in both AVAX and WAVAX. The recommended way to track Joepegs marketplace volume is tracking all 


### Subgraph
We provide public subgraphs for community builders: 
- NFT Contracts: https://thegraph.com/hosted-service/subgraph/traderjoe-xyz/nft-contracts
- Joepegs Marketplace: https://thegraph.com/hosted-service/subgraph/traderjoe-xyz/marketplace

