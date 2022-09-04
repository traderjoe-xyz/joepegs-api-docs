# Joepegs Auction House

## Overview

Joepegs Auction House helps users run auctions on their ERC-721 NFTs. We currently only support **[English auctions](https://en.wikipedia.org/wiki/English_auction)**
but have plans to support [Dutch auctions](https://en.wikipedia.org/wiki/Dutch_auction) in the near future.

## English Auction

### Starting an English auction

To start an English auction for your NFT, you simply have to choose the **starting price** and **duration** you want. Starting price
refers to the minimum bid amount that can be bid.

> **Note:** Listing an NFT on auction will require your NFT to be held in escrow by our auction house smart contract until it is either
> settled or cancelled.

### Bidding on an English auction

Once the English auction starts, bidders can then place bids based on the following conditions:

1. The bid is greater than or equal to the starting price of the auction
2. If the bidder is not the current highest bidder, they must bid **at least 5% greater than the current highest bid**
3. If current highest bidder wants to top up on their existing bid, they must bid **at least 5% of their current bid**

For example, if the current highest bid by user A is 100 AVAX, the smallest amount that user B can bid is 105 AVAX or user A can top up on their existing bid by adding at least 5 AVAX.

Any bids made in the last 5 minutes of the auction will extend the auction time by 5 minutes to prevent any last minute bids from settling the auction.

> **Note:** Bids are also held in escrow by the auction house smart contract but are refunded immediately once a higher bid is placed.

### Settling an English auction

There are two ways in which an auction can be settled.

1. The auction creator can settle an auction anytime before the end time if they are willing to accept the current highest bid
2. Once the auction end time passes (assuming there is a bid), anyone can settle the auction which will transfer the NFT to the
   current highest bidder and distribute the bid amount appropriately to the auction creator, royalty fee recipient(s), and marketplace
   fee recipient as WAVAX.

### Cancelling an English auction

As an auction creator, you can cancel an auction anytime before the first bid is placed. Upon cancelling the auction, you will immediately
receive your NFT back in your wallet.

### Gas Fees

Every action in the auction process (i.e. listing, bidding, cancelling, settling) occur on-chain and thus require gas fees.
