# Metadata

The ERC721 and ERC1155 standards allows for asset metadata, such as image and attributes. 

## Token URI

Your contract will have to provide an HTTP or IPFS URL where Joepegs can read additional metadata. Depending on whether your contract type is ERC721 or ERC1155, you will specify this in different fields: 

| Contract Type | Field |
|---------------|-------|
| ERC721 | `tokenURI` |
| ERC1155 | `uri` |

Arweave is not yet supported but may be supported in future. 

## Supported Fields

We are gradually adding additional fields for support. 

| field name | description | 
|------------|-------------|
| name | Name of the item |
| description | Description, in text. Markdown to be supported. |
| image | URL to the image of the item. We recommend 800X800 PNG format posted on IPFS. It can also be used to for audio and video files. |
| attributes | A list of attributes, e.g. `{ "trait_type": "Eyes", "value": "Big"}` |

### Attributes

Example:
```
{
    ...
    "attributes": [
        { 
            "trait_type": "Eyes", 
            "value": "Big"
        },
        {
            "trait_type": "Mouth",
            "value": "Surprised"
        }
    ]
}
```

## Creator Royalties

If you contract implements EIP-2981, Joepegs will read the royalty as a percentage of the sales proceeds to be deducted. 

```
function royaltyInfo(uint256 _tokenId, uint256 _saleprice) {
    external view returns (
        address receiver, 
        uint256 royaltyAmount
    );
}
```

Some minting tools don't properly implement royalty fee features. For further support, please reach out via Discord or email. 

## References

Uploading metadata to IPFS:
- https://nft.storage/docs/how-to/mint-custom-metadata/
- https://knowledge.pinata.cloud/en/articles/5508876-how-to-use-ipfs-desktop-with-pinata

Contract Specs:
- https://eips.ethereum.org/EIPS/eip-721
- https://eips.ethereum.org/EIPS/eip-1155
- https://eips.ethereum.org/EIPS/eip-2981
