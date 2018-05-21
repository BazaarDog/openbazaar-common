# Protocol Documentation
<a name="top"/>

## Table of Contents

- [proto/api.proto](#proto/api.proto)
    - [CaseRespApi](#.CaseRespApi)
    - [Coupon](#.Coupon)
    - [OrderRespApi](#.OrderRespApi)
    - [PeerAndProfile](#.PeerAndProfile)
    - [PeerAndProfileWithID](#.PeerAndProfileWithID)
    - [RatingWithID](#.RatingWithID)
    - [TransactionRecord](#.TransactionRecord)
  
  
  
  

- [proto/contract.proto](#proto/contract.proto)
    - [BitcoinSignature](#.BitcoinSignature)
    - [Dispute](#.Dispute)
    - [DisputeAcceptance](#.DisputeAcceptance)
    - [DisputeResolution](#.DisputeResolution)
    - [DisputeResolution.Payout](#.DisputeResolution.Payout)
    - [ID](#.ID)
    - [ID.Pubkeys](#.ID.Pubkeys)
    - [Listing](#.Listing)
    - [Listing.Coupon](#.Listing.Coupon)
    - [Listing.Item](#.Listing.Item)
    - [Listing.Metadata](#.Listing.Metadata)
    - [Listing.ShippingOption](#.Listing.ShippingOption)
    - [Listing.Tax](#.Listing.Tax)
    - [Order](#.Order)
    - [Order.Item](#.Order.Item)
    - [Order.Payment](#.Order.Payment)
    - [Order.Shipping](#.Order.Shipping)
    - [OrderCompletion](#.OrderCompletion)
    - [OrderConfirmation](#.OrderConfirmation)
    - [OrderFulfillment](#.OrderFulfillment)
    - [OrderFulfillment.CryptocurrencyDelivery](#.OrderFulfillment.CryptocurrencyDelivery)
    - [OrderFulfillment.DigitalDelivery](#.OrderFulfillment.DigitalDelivery)
    - [OrderFulfillment.Payout](#.OrderFulfillment.Payout)
    - [OrderFulfillment.PhysicalDelivery](#.OrderFulfillment.PhysicalDelivery)
    - [OrderPageRequestType](#.OrderPageRequestType)
    - [OrderReject](#.OrderReject)
    - [OrderRequestType](#.OrderRequestType)
    - [OrderResponseType](#.OrderResponseType)
    - [Outpoint](#.Outpoint)
    - [Rating](#.Rating)
    - [Rating.RatingData](#.Rating.RatingData)
    - [RatingSignature](#.RatingSignature)
    - [RatingSignature.TransactionMetadata](#.RatingSignature.TransactionMetadata)
    - [Refund](#.Refund)
    - [Refund.TransactionInfo](#.Refund.TransactionInfo)
    - [RicardianContract](#.RicardianContract)
    - [Signature](#.Signature)
    - [SignedListing](#.SignedListing)
  
    - [Signature.Section](#.Signature.Section)
  
  
    - [OrderService](#.OrderService)
  

- [proto/countrycode.proto](#proto/countrycode.proto)
  
    - [CountryCode](#.CountryCode)
  
  
  

- [proto/image.proto](#proto/image.proto)
    - [Image](#.Image)
  
  
  
  

- [proto/message.proto](#proto/message.proto)
    - [Block](#.Block)
    - [Chat](#.Chat)
    - [CidList](#.CidList)
    - [Envelope](#.Envelope)
    - [Error](#.Error)
    - [Message](#.Message)
    - [SignedData](#.SignedData)
    - [SignedData.Command](#.SignedData.Command)
  
    - [Chat.Flag](#.Chat.Flag)
    - [Message.MessageType](#.Message.MessageType)
  
  
  

- [proto/moderator.proto](#proto/moderator.proto)
    - [DisputeUpdate](#.DisputeUpdate)
    - [Moderator](#.Moderator)
    - [Moderator.Fee](#.Moderator.Fee)
    - [Moderator.Price](#.Moderator.Price)
  
  
  
  

- [proto/order.proto](#proto/order.proto)
  
    - [OrderState](#.OrderState)
  
  
  

- [proto/post.proto](#proto/post.proto)
    - [Post](#.Post)
    - [SignedPost](#.SignedPost)
  
  
  
  

- [proto/profile.proto](#proto/profile.proto)
    - [Profile](#.Profile)
    - [Profile.Colors](#.Profile.Colors)
    - [Profile.Contact](#.Profile.Contact)
    - [Profile.SocialAccount](#.Profile.SocialAccount)
    - [Profile.Stats](#.Profile.Stats)
  
  
  
  

- [proto/search.proto](#proto/search.proto)
    - [ListingFlat](#.ListingFlat)
    - [SearchResponse](#.SearchResponse)
    - [SearchResponse.LinksEntry](#.SearchResponse.LinksEntry)
    - [SearchResponse.OptionsEntry](#.SearchResponse.OptionsEntry)
    - [SearchResponse.Relationship](#.SearchResponse.Relationship)
    - [SearchResponse.SearchProviderOption](#.SearchResponse.SearchProviderOption)
    - [SearchResponse.SearchProviderOptionItem](#.SearchResponse.SearchProviderOptionItem)
    - [SearchResponse.SearchProviderSort](#.SearchResponse.SearchProviderSort)
    - [SearchResponse.SearchResult](#.SearchResponse.SearchResult)
    - [SearchResponse.SearchResults](#.SearchResponse.SearchResults)
    - [SearchResponse.SortByEntry](#.SearchResponse.SortByEntry)
    - [SearchResponse.Vendor](#.SearchResponse.Vendor)
    - [SearchResponse.VendorWrap](#.SearchResponse.VendorWrap)
  
    - [ListingFlat.ContractType](#.ListingFlat.ContractType)
    - [SearchResponse.SearchResultType](#.SearchResponse.SearchResultType)
  
  
  

- [Scalar Value Types](#scalar-value-types)



<a name="proto/api.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/api.proto



<a name=".CaseRespApi"/>

### CaseRespApi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| buyerContract | [RicardianContract](#RicardianContract) |  |  |
| vendorContract | [RicardianContract](#RicardianContract) |  |  |
| buyerContractValidationErrors | [string](#string) | repeated |  |
| vendorContractValidationErrors | [string](#string) | repeated |  |
| state | [OrderState](#OrderState) |  |  |
| read | [bool](#bool) |  | Whether or not the message has been read |
| buyerOpened | [bool](#bool) |  |  |
| claim | [string](#string) |  |  |
| unreadChatMessages | [uint64](#uint64) |  |  |
| resolution | [DisputeResolution](#DisputeResolution) |  |  |






<a name=".Coupon"/>

### Coupon



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  |  |
| code | [string](#string) |  |  |






<a name=".OrderRespApi"/>

### OrderRespApi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| contract | [RicardianContract](#RicardianContract) |  | Order contract |
| state | [OrderState](#OrderState) |  | State of the order |
| read | [bool](#bool) |  | Whether or not the order has been by the vendor |
| funded | [bool](#bool) |  | Whether the order is funded |
| unreadChatMessages | [uint64](#uint64) |  | number of unread chat messages associated |
| paymentAddressTransactions | [TransactionRecord](#TransactionRecord) | repeated | Payments funding the order |
| refundAddressTransaction | [TransactionRecord](#TransactionRecord) |  | Refund address |






<a name=".PeerAndProfile"/>

### PeerAndProfile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerId | [string](#string) |  | The unique CIDv0 ipfs node identifer. |
| profile | [Profile](#Profile) |  |  |






<a name=".PeerAndProfileWithID"/>

### PeerAndProfileWithID



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique profile ID. |
| peerId | [string](#string) |  | The unique CIDv0 ipfs node identifer. |
| profile | [Profile](#Profile) |  | The profile |






<a name=".RatingWithID"/>

### RatingWithID



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | The unique Rating ID. |
| ratingId | [string](#string) |  |  |
| rating | [Rating](#Rating) |  |  |






<a name=".TransactionRecord"/>

### TransactionRecord



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txid | [string](#string) |  | The unique transactionRecord ID. |
| value | [int64](#int64) |  |  |
| confirmations | [uint32](#uint32) |  |  |
| height | [uint32](#uint32) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |





 

 

 

 



<a name="proto/contract.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/contract.proto



<a name=".BitcoinSignature"/>

### BitcoinSignature



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| inputIndex | [uint32](#uint32) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name=".Dispute"/>

### Dispute



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| claim | [string](#string) |  |  |
| payoutAddress | [string](#string) |  |  |
| outpoints | [Outpoint](#Outpoint) | repeated |  |
| serializedContract | [bytes](#bytes) |  |  |






<a name=".DisputeAcceptance"/>

### DisputeAcceptance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| closedBy | [string](#string) |  |  |






<a name=".DisputeResolution"/>

### DisputeResolution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| orderId | [string](#string) |  |  |
| proposedBy | [string](#string) |  |  |
| resolution | [string](#string) |  |  |
| payout | [DisputeResolution.Payout](#DisputeResolution.Payout) |  |  |
| moderatorRatingSigs | [bytes](#bytes) | repeated | Used in ratings |






<a name=".DisputeResolution.Payout"/>

### DisputeResolution.Payout



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sigs | [BitcoinSignature](#BitcoinSignature) | repeated |  |
| inputs | [Outpoint](#Outpoint) | repeated |  |
| buyerOutput | [DisputeResolution.Payout.Output](#DisputeResolution.Payout.Output) |  |  |
| vendorOutput | [DisputeResolution.Payout.Output](#DisputeResolution.Payout.Output) |  |  |
| moderatorOutput | [DisputeResolution.Payout.Output](#DisputeResolution.Payout.Output) |  |  |






<a name=".ID"/>

### ID



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerID | [string](#string) |  |  |
| handle | [string](#string) |  |  |
| pubkeys | [ID.Pubkeys](#ID.Pubkeys) |  |  |
| bitcoinSig | [bytes](#bytes) |  | Bitcoin signature covering peerID |






<a name=".ID.Pubkeys"/>

### ID.Pubkeys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [bytes](#bytes) |  | IPFS public key |
| bitcoin | [bytes](#bytes) |  | Bitcoin public key |






<a name=".Listing"/>

### Listing



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slug | [string](#string) |  |  |
| vendorID | [ID](#ID) |  |  |
| metadata | [Listing.Metadata](#Listing.Metadata) |  |  |
| item | [Listing.Item](#Listing.Item) |  |  |
| shippingOptions | [Listing.ShippingOption](#Listing.ShippingOption) | repeated |  |
| taxes | [Listing.Tax](#Listing.Tax) | repeated |  |
| coupons | [Listing.Coupon](#Listing.Coupon) | repeated |  |
| moderators | [string](#string) | repeated |  |
| termsAndConditions | [string](#string) |  |  |
| refundPolicy | [string](#string) |  |  |






<a name=".Listing.Coupon"/>

### Listing.Coupon



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| hash | [string](#string) |  |  |
| discountCode | [string](#string) |  |  |
| percentDiscount | [float](#float) |  |  |
| priceDiscount | [uint64](#uint64) |  |  |






<a name=".Listing.Item"/>

### Listing.Item



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| processingTime | [string](#string) |  |  |
| price | [uint64](#uint64) |  | The price in ..... tk |
| nsfw | [bool](#bool) |  | Whether the listing contains mature or adult content. |
| tags | [string](#string) | repeated | A list of tags |
| images | [Image](#Image) | repeated | A list of images for the item. (tiny: 90x90) |
| categories | [string](#string) | repeated | A list of categories to organize listings within store |
| grams | [float](#float) |  |  |
| condition | [string](#string) |  |  |
| options | [Listing.Item.Option](#Listing.Item.Option) | repeated |  |
| skus | [Listing.Item.Sku](#Listing.Item.Sku) | repeated |  |






<a name=".Listing.Metadata"/>

### Listing.Metadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version | [uint32](#uint32) |  |  |
| contractType | [Listing.Metadata.ContractType](#Listing.Metadata.ContractType) |  |  |
| format | [Listing.Metadata.Format](#Listing.Metadata.Format) |  |  |
| expiry | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| acceptedCurrencies | [string](#string) | repeated |  |
| pricingCurrency | [string](#string) |  |  |
| language | [string](#string) |  |  |
| escrowTimeoutHours | [uint32](#uint32) |  |  |
| coinType | [string](#string) |  |  |
| coinDivisibility | [uint32](#uint32) |  |  |






<a name=".Listing.ShippingOption"/>

### Listing.ShippingOption



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| type | [Listing.ShippingOption.ShippingType](#Listing.ShippingOption.ShippingType) |  |  |
| regions | [CountryCode](#CountryCode) | repeated |  |
| services | [Listing.ShippingOption.Service](#Listing.ShippingOption.Service) | repeated |  |






<a name=".Listing.Tax"/>

### Listing.Tax



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| taxType | [string](#string) |  |  |
| taxRegions | [CountryCode](#CountryCode) | repeated |  |
| taxShipping | [bool](#bool) |  |  |
| percentage | [float](#float) |  |  |






<a name=".Order"/>

### Order



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refundAddress | [string](#string) |  |  |
| refundFee | [uint64](#uint64) |  |  |
| shipping | [Order.Shipping](#Order.Shipping) |  |  |
| buyerID | [ID](#ID) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| items | [Order.Item](#Order.Item) | repeated |  |
| payment | [Order.Payment](#Order.Payment) |  |  |
| ratingKeys | [bytes](#bytes) | repeated |  |
| alternateContactInfo | [string](#string) |  |  |
| version | [uint32](#uint32) |  |  |






<a name=".Order.Item"/>

### Order.Item



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| listingHash | [string](#string) |  |  |
| quantity | [uint32](#uint32) |  | order version &lt; 2 used with listing version &lt; 3 |
| quantity64 | [uint64](#uint64) |  | order version &gt;= 2 used with listing version &gt;= 3 |
| options | [Order.Item.Option](#Order.Item.Option) | repeated |  |
| shippingOption | [Order.Item.ShippingOption](#Order.Item.ShippingOption) |  |  |
| memo | [string](#string) |  |  |
| couponCodes | [string](#string) | repeated |  |
| paymentAddress | [string](#string) |  |  |






<a name=".Order.Payment"/>

### Order.Payment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| method | [Order.Payment.Method](#Order.Payment.Method) |  |  |
| moderator | [string](#string) |  |  |
| amount | [uint64](#uint64) |  | Satoshis |
| chaincode | [string](#string) |  | Hex encoded |
| address | [string](#string) |  | B58check encoded |
| redeemScript | [string](#string) |  | Hex encoded |
| moderatorKey | [bytes](#bytes) |  |  |






<a name=".Order.Shipping"/>

### Order.Shipping



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shipTo | [string](#string) |  |  |
| address | [string](#string) |  |  |
| city | [string](#string) |  |  |
| state | [string](#string) |  |  |
| postalCode | [string](#string) |  |  |
| country | [CountryCode](#CountryCode) |  |  |
| addressNotes | [string](#string) |  |  |






<a name=".OrderCompletion"/>

### OrderCompletion



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderId | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| payoutSigs | [BitcoinSignature](#BitcoinSignature) | repeated |  |
| ratings | [Rating](#Rating) | repeated |  |






<a name=".OrderConfirmation"/>

### OrderConfirmation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderID | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| paymentAddress | [string](#string) |  | Direct payments only |
| requestedAmount | [uint64](#uint64) |  |  |
| ratingSignatures | [RatingSignature](#RatingSignature) | repeated |  |






<a name=".OrderFulfillment"/>

### OrderFulfillment



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderId | [string](#string) |  |  |
| slug | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| physicalDelivery | [OrderFulfillment.PhysicalDelivery](#OrderFulfillment.PhysicalDelivery) | repeated | Physical goods only |
| digitalDelivery | [OrderFulfillment.DigitalDelivery](#OrderFulfillment.DigitalDelivery) | repeated | Digital goods only |
| payout | [OrderFulfillment.Payout](#OrderFulfillment.Payout) |  | Moderated payments only |
| ratingSignature | [RatingSignature](#RatingSignature) |  |  |
| note | [string](#string) |  |  |
| cryptocurrencyDelivery | [OrderFulfillment.CryptocurrencyDelivery](#OrderFulfillment.CryptocurrencyDelivery) | repeated | Cryptocurrencies only |






<a name=".OrderFulfillment.CryptocurrencyDelivery"/>

### OrderFulfillment.CryptocurrencyDelivery



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transactionID | [string](#string) |  |  |






<a name=".OrderFulfillment.DigitalDelivery"/>

### OrderFulfillment.DigitalDelivery



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| url | [string](#string) |  |  |
| password | [string](#string) |  |  |






<a name=".OrderFulfillment.Payout"/>

### OrderFulfillment.Payout



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sigs | [BitcoinSignature](#BitcoinSignature) | repeated |  |
| payoutAddress | [string](#string) |  |  |
| payoutFeePerByte | [uint64](#uint64) |  |  |






<a name=".OrderFulfillment.PhysicalDelivery"/>

### OrderFulfillment.PhysicalDelivery



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shipper | [string](#string) |  |  |
| trackingNumber | [string](#string) |  |  |






<a name=".OrderPageRequestType"/>

### OrderPageRequestType



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| limit | [int32](#int32) |  |  |
| offset | [int32](#int32) |  |  |






<a name=".OrderReject"/>

### OrderReject



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderID | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| sigs | [BitcoinSignature](#BitcoinSignature) | repeated |  |






<a name=".OrderRequestType"/>

### OrderRequestType



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order | [Order](#Order) |  |  |






<a name=".OrderResponseType"/>

### OrderResponseType



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order | [Order](#Order) |  |  |






<a name=".Outpoint"/>

### Outpoint



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [string](#string) |  | Hex encoded |
| index | [uint32](#uint32) |  |  |
| value | [uint64](#uint64) |  |  |






<a name=".Rating"/>

### Rating



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ratingData | [Rating.RatingData](#Rating.RatingData) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name=".Rating.RatingData"/>

### Rating.RatingData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ratingKey | [bytes](#bytes) |  |  |
| vendorID | [ID](#ID) |  |  |
| vendorSig | [RatingSignature](#RatingSignature) |  |  |
| buyerID | [ID](#ID) |  | optional |
| buyerName | [string](#string) |  | optional |
| buyerSig | [bytes](#bytes) |  | optional |
| moderatorSig | [bytes](#bytes) |  | only if a dispute was won |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| overall | [uint32](#uint32) |  |  |
| quality | [uint32](#uint32) |  |  |
| description | [uint32](#uint32) |  |  |
| deliverySpeed | [uint32](#uint32) |  |  |
| customerService | [uint32](#uint32) |  |  |
| review | [string](#string) |  |  |






<a name=".RatingSignature"/>

### RatingSignature



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [RatingSignature.TransactionMetadata](#RatingSignature.TransactionMetadata) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name=".RatingSignature.TransactionMetadata"/>

### RatingSignature.TransactionMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| listingSlug | [string](#string) |  |  |
| ratingKey | [bytes](#bytes) |  |  |
| moderatorKey | [bytes](#bytes) |  | Only if moderated |
| listingTitle | [string](#string) |  |  |
| thumbnail | [Image](#Image) |  |  |






<a name=".Refund"/>

### Refund



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderID | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| sigs | [BitcoinSignature](#BitcoinSignature) | repeated |  |
| refundTransaction | [Refund.TransactionInfo](#Refund.TransactionInfo) |  |  |
| memo | [string](#string) |  |  |






<a name=".Refund.TransactionInfo"/>

### Refund.TransactionInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| txid | [string](#string) |  |  |
| value | [uint64](#uint64) |  |  |






<a name=".RicardianContract"/>

### RicardianContract



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vendorListings | [Listing](#Listing) | repeated |  |
| buyerOrder | [Order](#Order) |  |  |
| vendorOrderConfirmation | [OrderConfirmation](#OrderConfirmation) |  |  |
| vendorOrderFulfillment | [OrderFulfillment](#OrderFulfillment) | repeated |  |
| buyerOrderCompletion | [OrderCompletion](#OrderCompletion) |  |  |
| dispute | [Dispute](#Dispute) |  |  |
| disputeResolution | [DisputeResolution](#DisputeResolution) |  |  |
| disputeAcceptance | [DisputeAcceptance](#DisputeAcceptance) |  |  |
| refund | [Refund](#Refund) |  |  |
| signatures | [Signature](#Signature) | repeated |  |
| errors | [string](#string) | repeated |  |






<a name=".Signature"/>

### Signature



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| section | [Signature.Section](#Signature.Section) |  |  |
| signatureBytes | [bytes](#bytes) |  |  |






<a name=".SignedListing"/>

### SignedListing



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| listing | [Listing](#Listing) |  |  |
| hash | [string](#string) |  |  |
| signature | [bytes](#bytes) |  |  |





 


<a name=".Signature.Section"/>

### Signature.Section


| Name | Number | Description |
| ---- | ------ | ----------- |
| LISTING | 0 |  |
| ORDER | 1 |  |
| ORDER_CONFIRMATION | 2 |  |
| ORDER_FULFILLMENT | 3 |  |
| ORDER_COMPLETION | 4 |  |
| DISPUTE | 5 |  |
| DISPUTE_RESOLUTION | 6 |  |
| REFUND | 7 |  |


 

 


<a name=".OrderService"/>

### OrderService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListCases | [.OrderPageRequestType](#OrderPageRequestType) | [.Order](#OrderPageRequestType) | Returns a list of all moderation cases that the node was involved in. |
| ListSales | [.OrderPageRequestType](#OrderPageRequestType) | [.Order](#OrderPageRequestType) | Returns a list of all moderation cases that the node was involved in. |
| ListPurchases | [.OrderPageRequestType](#OrderPageRequestType) | [.Order](#OrderPageRequestType) | Returns a list of all purchases that the node has made. |
| GetQuote | [.OrderRequestType](#OrderRequestType) | [.OrderResponseType](#OrderRequestType) | Get an order by ID |
| Purchase | [.OrderRequestType](#OrderRequestType) | [.OrderResponseType](#OrderRequestType) | The purchase call can be made to a reachable or a unreachable vendor (offline or not able to receive incoming messages). An order will be created in the AWAITING_PAYMENT state after this call. If the total of the purchase is not more than 4X the current transaction fee, the purchase will be rejected (ie: if the fee is 0.0001, the total purchase must be more than 0.0004). |
| UpdatePerson | [.Order](#Order) | [.OrderResponseType](#Order) |  |
| DeletePerson | [.Order](#Order) | [.OrderResponseType](#Order) |  |

 



<a name="proto/countrycode.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/countrycode.proto


 


<a name=".CountryCode"/>

### CountryCode


| Name | Number | Description |
| ---- | ------ | ----------- |
| NA | 0 |  |
| AFGHANISTAN | 1 |  |
| ALAND_ISLANDS | 2 |  |
| ALBANIA | 3 |  |
| ALGERIA | 4 |  |
| AMERICAN_SAMOA | 5 |  |
| ANDORRA | 6 |  |
| ANGOLA | 7 |  |
| ANGUILLA | 8 |  |
| ANTIGUA | 9 |  |
| ARGENTINA | 10 |  |
| ARMENIA | 11 |  |
| ARUBA | 12 |  |
| AUSTRALIA | 13 |  |
| AUSTRIA | 14 |  |
| AZERBAIJAN | 15 |  |
| BAHAMAS | 16 |  |
| BAHRAIN | 17 |  |
| BANGLADESH | 18 |  |
| BARBADOS | 19 |  |
| BELARUS | 20 |  |
| BELGIUM | 21 |  |
| BELIZE | 22 |  |
| BENIN | 23 |  |
| BERMUDA | 24 |  |
| BHUTAN | 25 |  |
| BOLIVIA | 26 |  |
| BONAIRE_SINT_EUSTATIUS_SABA | 27 |  |
| BOSNIA | 28 |  |
| BOTSWANA | 29 |  |
| BOUVET_ISLAND | 30 |  |
| BRAZIL | 31 |  |
| BRITISH_INDIAN_OCEAN_TERRITORY | 32 |  |
| BRUNEI_DARUSSALAM | 33 |  |
| BULGARIA | 34 |  |
| BURKINA_FASO | 35 |  |
| BURUNDI | 36 |  |
| CABO_VERDE | 37 |  |
| CAMBODIA | 38 |  |
| CAMEROON | 39 |  |
| CANADA | 40 |  |
| CAYMAN_ISLANDS | 41 |  |
| CENTRAL_AFRICAN_REPUBLIC | 42 |  |
| CHAD | 43 |  |
| CHILE | 44 |  |
| CHINA | 45 |  |
| CHRISTMAS_ISLAND | 46 |  |
| COCOS_ISLANDS | 47 |  |
| COLOMBIA | 48 |  |
| COMOROS | 49 |  |
| CONGO_REPUBLIC | 50 |  |
| CONGO | 51 |  |
| COOK_ISLANDS | 52 |  |
| COSTA_RICA | 53 |  |
| COTE_DIVOIRE | 54 |  |
| CROATIA | 55 |  |
| CUBA | 56 |  |
| CURACAO | 57 |  |
| CYPRUS | 58 |  |
| CZECH_REPUBLIC | 59 |  |
| DENMARK | 60 |  |
| DJIBOUTI | 61 |  |
| DOMINICA | 62 |  |
| DOMINICAN_REPUBLIC | 63 |  |
| ECUADOR | 64 |  |
| EGYPT | 65 |  |
| EL_SALVADOR | 66 |  |
| EQUATORIAL_GUINEA | 67 |  |
| ERITREA | 68 |  |
| ESTONIA | 69 |  |
| ETHIOPIA | 70 |  |
| FALKLAND_ISLANDS | 71 |  |
| FAROE_ISLANDS | 72 |  |
| FIJI | 73 |  |
| FINLAND | 74 |  |
| FRANCE | 75 |  |
| FRENCH_GUIANA | 76 |  |
| FRENCH_POLYNESIA | 77 |  |
| FRENCH_SOUTHERN_TERRITORIES | 78 |  |
| GABON | 79 |  |
| GAMBIA | 80 |  |
| GEORGIA | 81 |  |
| GERMANY | 82 |  |
| GHANA | 83 |  |
| GIBRALTAR | 84 |  |
| GREECE | 85 |  |
| GREENLAND | 86 |  |
| GRENADA | 87 |  |
| GUADELOUPE | 88 |  |
| GUAM | 89 |  |
| GUATEMALA | 90 |  |
| GUERNSEY | 91 |  |
| GUINEA | 92 |  |
| GUINEA_BISSAU | 93 |  |
| GUYANA | 94 |  |
| HAITI | 95 |  |
| HEARD_ISLAND | 96 |  |
| HOLY_SEE | 97 |  |
| HONDURAS | 98 |  |
| HONG_KONG | 99 |  |
| HUNGARY | 100 |  |
| ICELAND | 101 |  |
| INDIA | 102 |  |
| INDONESIA | 103 |  |
| IRAN | 104 |  |
| IRAQ | 105 |  |
| IRELAND | 106 |  |
| ISLE_OF_MAN | 107 |  |
| ISRAEL | 108 |  |
| ITALY | 109 |  |
| JAMAICA | 110 |  |
| JAPAN | 111 |  |
| JERSEY | 112 |  |
| JORDAN | 113 |  |
| KAZAKHSTAN | 114 |  |
| KENYA | 115 |  |
| KIRIBATI | 116 |  |
| NORTH_KOREA | 117 |  |
| SOUTH_KOREA | 118 |  |
| KUWAIT | 119 |  |
| KYRGYZSTAN | 120 |  |
| LAO | 121 |  |
| LATVIA | 122 |  |
| LEBANON | 123 |  |
| LESOTHO | 124 |  |
| LIBERIA | 125 |  |
| LIBYA | 126 |  |
| LIECHTENSTEIN | 127 |  |
| LITHUANIA | 128 |  |
| LUXEMBOURG | 129 |  |
| MACAO | 130 |  |
| MACEDONIA | 131 |  |
| MADAGASCAR | 132 |  |
| MALAWI | 133 |  |
| MALAYSIA | 134 |  |
| MALDIVES | 135 |  |
| MALI | 136 |  |
| MALTA | 137 |  |
| MARSHALL_ISLANDS | 138 |  |
| MARTINIQUE | 139 |  |
| MAURITANIA | 140 |  |
| MAURITIUS | 141 |  |
| MAYOTTE | 142 |  |
| MEXICO | 143 |  |
| MICRONESIA | 144 |  |
| MOLDOVA | 145 |  |
| MONACO | 146 |  |
| MONGOLIA | 147 |  |
| MONTENEGRO | 148 |  |
| MONTSERRAT | 149 |  |
| MOROCCO | 150 |  |
| MOZAMBIQUE | 151 |  |
| MYANMAR | 152 |  |
| NAMIBIA | 153 |  |
| NAURU | 154 |  |
| NEPAL | 155 |  |
| NETHERLANDS | 156 |  |
| NEW_CALEDONIA | 157 |  |
| NEW_ZEALAND | 158 |  |
| NICARAGUA | 159 |  |
| NIGER | 160 |  |
| NIGERIA | 161 |  |
| NIUE | 162 |  |
| NORFOLK_ISLAND | 163 |  |
| NORTHERN_MARIANA_ISLANDS | 164 |  |
| NORWAY | 165 |  |
| OMAN | 166 |  |
| PAKISTAN | 167 |  |
| PALAU | 168 |  |
| PANAMA | 169 |  |
| PAPUA_NEW_GUINEA | 170 |  |
| PARAGUAY | 171 |  |
| PERU | 172 |  |
| PHILIPPINES | 173 |  |
| PITCAIRN | 174 |  |
| POLAND | 175 |  |
| PORTUGAL | 176 |  |
| PUERTO_RICO | 177 |  |
| QATAR | 178 |  |
| REUNION | 179 |  |
| ROMANIA | 180 |  |
| RUSSIA | 181 |  |
| RWANDA | 182 |  |
| SAINT_BARTHELEMY | 183 |  |
| SAINT_HELENA | 184 |  |
| SAINT_KITTS | 185 |  |
| SAINT_LUCIA | 186 |  |
| SAINT_MARTIN | 187 |  |
| SAINT_PIERRE | 188 |  |
| SAINT_VINCENT | 189 |  |
| SAMOA | 190 |  |
| SAN_MARINO | 191 |  |
| SAO_TOME | 192 |  |
| SAUDI_ARABIA | 193 |  |
| SENEGAL | 194 |  |
| SERBIA | 195 |  |
| SEYCHELLES | 196 |  |
| SIERRA_LEONE | 197 |  |
| SINGAPORE | 198 |  |
| SINT_MAARTEN | 199 |  |
| SUCRE | 200 |  |
| SLOVAKIA | 201 |  |
| SLOVENIA | 202 |  |
| SOLOMON_ISLANDS | 203 |  |
| SOMALIA | 204 |  |
| SOUTH_AFRICA | 205 |  |
| SOUTH_SUDAN | 206 |  |
| SPAIN | 207 |  |
| SRI_LANKA | 208 |  |
| SUDAN | 209 |  |
| SURINAME | 210 |  |
| SVALBARD | 211 |  |
| SWAZILAND | 212 |  |
| SWEDEN | 213 |  |
| SWITZERLAND | 214 |  |
| SYRIAN_ARAB_REPUBLIC | 215 |  |
| TAIWAN | 216 |  |
| TAJIKISTAN | 217 |  |
| TANZANIA | 218 |  |
| THAILAND | 219 |  |
| TIMOR_LESTE | 220 |  |
| TOGO | 221 |  |
| TOKELAU | 222 |  |
| TONGA | 223 |  |
| TRINIDAD | 224 |  |
| TUNISIA | 225 |  |
| TURKEY | 226 |  |
| TURKMENISTAN | 227 |  |
| TURKS_AND_CAICOS_ISLANDS | 228 |  |
| TUVALU | 229 |  |
| UGANDA | 230 |  |
| UKRAINE | 231 |  |
| UNITED_ARAB_EMIRATES | 232 |  |
| UNITED_KINGDOM | 233 |  |
| UNITED_STATES | 234 |  |
| URUGUAY | 235 |  |
| UZBEKISTAN | 236 |  |
| VANUATU | 237 |  |
| VENEZUELA | 238 |  |
| VIETNAM | 239 |  |
| VIRGIN_ISLANDS_BRITISH | 240 |  |
| VIRGIN_ISLANDS_US | 241 |  |
| WALLIS_AND_FUTUNA | 242 |  |
| WESTERN_SAHARA | 243 |  |
| YEMEN | 244 |  |
| ZAMBIA | 245 |  |
| ZIMBABWE | 246 |  |
| ALL | 500 |  |
| AFRICA | 501 |  |
| ASIA | 502 |  |
| CENTRAL_AMERICA | 503 |  |
| EUROPE | 504 |  |
| MIDDLE_EAST | 505 |  |
| NORTH_AMERICA | 506 |  |
| SOUTH_AMERICA | 507 |  |
| OCEANIA | 508 |  |


 

 

 



<a name="proto/image.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/image.proto



<a name=".Image"/>

### Image



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| tiny | [string](#string) |  | Image resource at smallest size, given by CIDv1 hash |
| small | [string](#string) |  | The CIDv1 hash of the image resource with double the dimensions of tiny version. |
| medium | [string](#string) |  | Double the size of small image |
| large | [string](#string) |  | Doubled again... |





 

 

 

 



<a name="proto/message.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/message.proto



<a name=".Block"/>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rawData | [bytes](#bytes) |  |  |
| cid | [string](#string) |  |  |






<a name=".Chat"/>

### Chat



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messageId | [string](#string) |  |  |
| subject | [string](#string) |  |  |
| message | [string](#string) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |
| flag | [Chat.Flag](#Chat.Flag) |  |  |






<a name=".CidList"/>

### CidList



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cids | [string](#string) | repeated |  |






<a name=".Envelope"/>

### Envelope



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| message | [Message](#Message) |  |  |
| pubkey | [bytes](#bytes) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name=".Error"/>

### Error



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [uint32](#uint32) |  |  |
| errorMessage | [string](#string) |  |  |
| orderID | [string](#string) |  |  |






<a name=".Message"/>

### Message



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| messageType | [Message.MessageType](#Message.MessageType) |  |  |
| payload | [google.protobuf.Any](#google.protobuf.Any) |  |  |
| requestId | [int32](#int32) |  | optional |
| isResponse | [bool](#bool) |  | optional |






<a name=".SignedData"/>

### SignedData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| senderPubkey | [bytes](#bytes) |  |  |
| serializedData | [bytes](#bytes) |  |  |
| signature | [bytes](#bytes) |  |  |






<a name=".SignedData.Command"/>

### SignedData.Command



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerID | [string](#string) |  |  |
| type | [Message.MessageType](#Message.MessageType) |  |  |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  |  |





 


<a name=".Chat.Flag"/>

### Chat.Flag


| Name | Number | Description |
| ---- | ------ | ----------- |
| MESSAGE | 0 |  |
| TYPING | 1 |  |
| READ | 2 |  |



<a name=".Message.MessageType"/>

### Message.MessageType


| Name | Number | Description |
| ---- | ------ | ----------- |
| PING | 0 |  |
| CHAT | 1 |  |
| FOLLOW | 2 |  |
| UNFOLLOW | 3 |  |
| ORDER | 4 |  |
| ORDER_REJECT | 5 |  |
| ORDER_CANCEL | 6 |  |
| ORDER_CONFIRMATION | 7 |  |
| ORDER_FULFILLMENT | 8 |  |
| ORDER_COMPLETION | 9 |  |
| DISPUTE_OPEN | 10 |  |
| DISPUTE_UPDATE | 11 |  |
| DISPUTE_CLOSE | 12 |  |
| REFUND | 13 |  |
| OFFLINE_ACK | 14 |  |
| OFFLINE_RELAY | 15 |  |
| MODERATOR_ADD | 16 |  |
| MODERATOR_REMOVE | 17 |  |
| STORE | 18 |  |
| BLOCK | 19 |  |
| ERROR | 500 |  |


 

 

 



<a name="proto/moderator.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/moderator.proto



<a name=".DisputeUpdate"/>

### DisputeUpdate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| orderId | [string](#string) |  |  |
| payoutAddress | [string](#string) |  |  |
| outpoints | [Outpoint](#Outpoint) | repeated |  |
| serializedContract | [bytes](#bytes) |  |  |






<a name=".Moderator"/>

### Moderator



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| termsAndConditions | [string](#string) |  |  |
| languages | [string](#string) | repeated |  |
| acceptedCurrencies | [string](#string) | repeated |  |
| fee | [Moderator.Fee](#Moderator.Fee) |  |  |






<a name=".Moderator.Fee"/>

### Moderator.Fee



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| fixedFee | [Moderator.Price](#Moderator.Price) |  |  |
| percentage | [float](#float) |  |  |
| feeType | [Moderator.Fee.FeeType](#Moderator.Fee.FeeType) |  |  |






<a name=".Moderator.Price"/>

### Moderator.Price



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| currencyCode | [string](#string) |  | Letter code for currency |
| amount | [uint64](#uint64) |  | Cryptocurrency in satoshi |





 

 

 

 



<a name="proto/order.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/order.proto


 


<a name=".OrderState"/>

### OrderState


| Name | Number | Description |
| ---- | ------ | ----------- |
| PENDING | 0 | Order has been funded and sent to the vendor but vendor has not yet responded |
| AWAITING_PAYMENT | 1 | Waiting for the buyer to fund the payment address |
| AWAITING_PICKUP | 2 | Waiting for the customer to pick up the order (customer pickup option only) |
| AWAITING_FULFILLMENT | 3 | Order has been fully funded and we&#39;re waiting for the vendor to fulfill |
| PARTIALLY_FULFILLED | 4 | Vendor has fulfilled part of the order |
| FULFILLED | 5 | Vendor has fulfilled the order |
| COMPLETED | 6 | Buyer has completed the order and left a review |
| CANCELED | 7 | Buyer canceled the order (offline order only) |
| DECLINED | 8 | Vendor declined to confirm the order (offline order only) |
| REFUNDED | 9 | Vendor refunded the order |
| DISPUTED | 10 | Contract is under active dispute |
| DECIDED | 11 | The moderator has resolved the dispute and we are waiting for the winning party to accept the payout. |
| RESOLVED | 12 | The winning party has accepted the dispute and it is now complete. After the buyer leaves a review the state should be set to COMPLETE. |
| PAYMENT_FINALIZED | 13 | Escrow has been released after waiting the timeout period. After the buyer leaves a review the state should be set to COMPLETE. |
| PROCESSING_ERROR | 14 | We screwed up and produced a order which didn&#39;t validate. This state is only used for offline orders. If a processing error occured with an open connection between buyer and vendor the vendor just rejects the order on the spot neither party commits the order to the database. |


 

 

 



<a name="proto/post.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/post.proto



<a name=".Post"/>

### Post



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| slug | [string](#string) |  | Immutable human readabile clean url |
| vendorID | [ID](#ID) |  | PeerID of the content |
| title | [string](#string) |  | Title of post |
| longForm | [string](#string) |  | Post content |
| images | [Image](#Image) | repeated | List of post images |
| tags | [string](#string) | repeated | List of text tags |
| timestamp | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | Creation time of post |






<a name=".SignedPost"/>

### SignedPost



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| post | [Post](#Post) |  |  |
| hash | [string](#string) |  |  |
| signature | [bytes](#bytes) |  |  |





 

 

 

 



<a name="proto/profile.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/profile.proto



<a name=".Profile"/>

### Profile
A participant on the openbazaar network. Defined by a random secret (12 word seed), used to generate
both the root cryptocurrency address and ipfs public hash.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerID | [string](#string) |  | The unique Base58 CIDv0 ipfs node identifer, (Qm...). |
| handle | [string](#string) |  | Distinct authoritative human-readable name (i.e. dnslink) |
| name | [string](#string) |  | Display name of peer |
| location | [string](#string) |  | Description of store location (100 character limit) |
| about | [string](#string) |  | Long description with basic html markup allowed. |
| shortDescription | [string](#string) |  | Text description of peer, (160 character limit). |
| nsfw | [bool](#bool) |  | Whether the node hosts mature or adult content. |
| vendor | [bool](#bool) |  | Whether the node is operating as a vendor. |
| moderator | [bool](#bool) |  | Whether the node offers moderation as a service. |
| moderatorInfo | [Moderator](#Moderator) |  | Details of the terms and rates for moderation |
| contactInfo | [Profile.Contact](#Profile.Contact) |  | The contact info for the node. |
| colors | [Profile.Colors](#Profile.Colors) |  | Theme colors for the node. |
| avatarHashes | [Image](#Image) |  | The node avatar image. (tiny: 60x60) |
| headerHashes | [Image](#Image) |  | A wide image for use as a banner. (tiny: 315x90) |
| stats | [Profile.Stats](#Profile.Stats) |  | Aggregate node statistics, counts and averages. |
| bitcoinPubkey | [string](#string) |  | 33-bit bitcoin public key in hex |
| lastModified | [google.protobuf.Timestamp](#google.protobuf.Timestamp) |  | When the node data was last modified. |
| currencies | [string](#string) | repeated | List of currencies the node accepts or operates with. |






<a name=".Profile.Colors"/>

### Profile.Colors
Profile theme colors, not implemented. Values given in html style hex code


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| primary | [string](#string) |  | Twitter style profile theme color, default #FFFFFF |
| secondary | [string](#string) |  | Alternate color, default #ECEEF2 |
| text | [string](#string) |  | Text color, default #252525 |
| highlight | [string](#string) |  | Highlight color, default #2BAD23 |
| highlightText | [string](#string) |  | Highlight text color, default #252525 |






<a name=".Profile.Contact"/>

### Profile.Contact
Contact information for the node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| website | [string](#string) |  | Website url |
| email | [string](#string) |  | Contact email address |
| phoneNumber | [string](#string) |  | Contact phone number |
| social | [Profile.SocialAccount](#Profile.SocialAccount) | repeated | List of social accounts. |






<a name=".Profile.SocialAccount"/>

### Profile.SocialAccount
Reference to an external account


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  | Social media platform |
| username | [string](#string) |  | Handle on social media platform |
| proof | [string](#string) |  | Link to proof of identity on social account |






<a name=".Profile.Stats"/>

### Profile.Stats
Unverified stats maintained and provided by server for convenience.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| followerCount | [uint32](#uint32) |  | Follower count |
| followingCount | [uint32](#uint32) |  | Following count |
| listingCount | [uint32](#uint32) |  | Total active listing count |
| ratingCount | [uint32](#uint32) |  | Rating count |
| postCount | [uint32](#uint32) |  | Total number of posts |
| averageRating | [float](#float) |  | Average of all &#39;overall ratings&#39; |





 

 

 

 



<a name="proto/search.proto"/>
<p align="right"><a href="#top">Top</a></p>

## proto/search.proto



<a name=".ListingFlat"/>

### ListingFlat



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  |  |
| peerID | [string](#string) |  |  |
| slug | [string](#string) |  |  |
| title | [string](#string) |  |  |
| description | [string](#string) |  |  |
| nsfw | [bool](#bool) |  |  |
| contractType | [ListingFlat.ContractType](#ListingFlat.ContractType) |  |  |
| profileName | [string](#string) |  |  |
| profileAvatar | [string](#string) |  |  |
| pricingCurrency | [string](#string) |  |  |
| acceptedCurrencies | [string](#string) | repeated |  |
| price | [uint64](#uint64) |  |  |
| ratingCount | [uint32](#uint32) |  |  |
| averageRating | [float](#float) |  |  |
| thumbnail | [string](#string) |  |  |






<a name=".SearchResponse"/>

### SearchResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Display name of search provider |
| logo | [string](#string) |  | URL of icon for search provider |
| links | [SearchResponse.LinksEntry](#SearchResponse.LinksEntry) | repeated | URI endpoints |
| options | [SearchResponse.OptionsEntry](#SearchResponse.OptionsEntry) | repeated | Filtering options for search |
| sortBy | [SearchResponse.SortByEntry](#SearchResponse.SortByEntry) | repeated | Sorting options for search |






<a name=".SearchResponse.LinksEntry"/>

### SearchResponse.LinksEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name=".SearchResponse.OptionsEntry"/>

### SearchResponse.OptionsEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [SearchResponse.SearchProviderOption](#SearchResponse.SearchProviderOption) |  |  |






<a name=".SearchResponse.Relationship"/>

### SearchResponse.Relationship



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| moderators | [string](#string) | repeated |  |
| vendor | [SearchResponse.VendorWrap](#SearchResponse.VendorWrap) |  |  |






<a name=".SearchResponse.SearchProviderOption"/>

### SearchResponse.SearchProviderOption



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| label | [string](#string) |  |  |
| type | [SearchResponse.SearchProviderOption.OptionType](#SearchResponse.SearchProviderOption.OptionType) |  |  |
| options | [SearchResponse.SearchProviderOption.OptionsEntry](#SearchResponse.SearchProviderOption.OptionsEntry) | repeated |  |






<a name=".SearchResponse.SearchProviderOptionItem"/>

### SearchResponse.SearchProviderOptionItem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| label | [string](#string) |  |  |
| value | [google.protobuf.Any](#google.protobuf.Any) |  |  |
| checked | [bool](#bool) |  |  |
| default | [bool](#bool) |  |  |






<a name=".SearchResponse.SearchProviderSort"/>

### SearchResponse.SearchProviderSort



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| label | [string](#string) |  |  |
| selected | [bool](#bool) |  |  |
| default | [bool](#bool) |  |  |






<a name=".SearchResponse.SearchResult"/>

### SearchResponse.SearchResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [string](#string) |  |  |
| relationships | [SearchResponse.Relationship](#SearchResponse.Relationship) |  |  |
| data | [Listing](#Listing) |  |  |






<a name=".SearchResponse.SearchResults"/>

### SearchResponse.SearchResults



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total | [uint64](#uint64) |  |  |
| morePages | [bool](#bool) |  |  |
| results | [SearchResponse.SearchResult](#SearchResponse.SearchResult) | repeated |  |






<a name=".SearchResponse.SortByEntry"/>

### SearchResponse.SortByEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [SearchResponse.SearchProviderSort](#SearchResponse.SearchProviderSort) |  |  |






<a name=".SearchResponse.Vendor"/>

### SearchResponse.Vendor



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| peerID | [string](#string) |  |  |
| name | [string](#string) |  |  |
| avatarHashes | [Image](#Image) |  |  |






<a name=".SearchResponse.VendorWrap"/>

### SearchResponse.VendorWrap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [SearchResponse.Vendor](#SearchResponse.Vendor) |  |  |





 


<a name=".ListingFlat.ContractType"/>

### ListingFlat.ContractType


| Name | Number | Description |
| ---- | ------ | ----------- |
| PHYSICAL_GOOD | 0 |  |
| DIGITAL_GOOD | 1 |  |
| SERVICE | 2 |  |
| CROWD_FUND | 3 |  |
| CRYPTOCURRENCY | 4 |  |



<a name=".SearchResponse.SearchResultType"/>

### SearchResponse.SearchResultType


| Name | Number | Description |
| ---- | ------ | ----------- |
| LISTING | 0 |  |
| NODE | 1 |  |


 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

