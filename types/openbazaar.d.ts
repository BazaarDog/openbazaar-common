import * as $protobuf from "protobufjs";

/** Properties of a Coupon. */
export interface ICoupon {

    /** Coupon hash */
    hash?: (string|null);

    /** Coupon code */
    code?: (string|null);
}

/** Represents a Coupon. */
export class Coupon implements ICoupon {

    /**
     * Constructs a new Coupon.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICoupon);

    /** Coupon hash. */
    public hash: string;

    /** Coupon code. */
    public code: string;

    /**
     * Creates a new Coupon instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Coupon instance
     */
    public static create(properties?: ICoupon): Coupon;

    /**
     * Encodes the specified Coupon message. Does not implicitly {@link Coupon.verify|verify} messages.
     * @param message Coupon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICoupon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Coupon message, length delimited. Does not implicitly {@link Coupon.verify|verify} messages.
     * @param message Coupon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICoupon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Coupon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Coupon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Coupon;

    /**
     * Decodes a Coupon message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Coupon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Coupon;

    /**
     * Verifies a Coupon message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Coupon message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Coupon
     */
    public static fromObject(object: { [k: string]: any }): Coupon;

    /**
     * Creates a plain object from a Coupon message. Also converts values to other types if specified.
     * @param message Coupon
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Coupon, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Coupon to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderRespApi. */
export interface IOrderRespApi {

    /** OrderRespApi contract */
    contract?: (IRicardianContract|null);

    /** Order contract */
    state?: (OrderState|null);

    /** State of the order */
    read?: (boolean|null);

    /** Whether or not the order has been by the vendor */
    funded?: (boolean|null);

    /** Whether the order is funded */
    unreadChatMessages?: (number|Long|null);

    /** number of unread chat messages associated */
    paymentAddressTransactions?: (ITransactionRecord[]|null);

    /** Payments funding the order */
    refundAddressTransaction?: (ITransactionRecord|null);
}

/** Represents an OrderRespApi. */
export class OrderRespApi implements IOrderRespApi {

    /**
     * Constructs a new OrderRespApi.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderRespApi);

    /** OrderRespApi contract. */
    public contract?: (IRicardianContract|null);

    /** Order contract */
    public state: OrderState;

    /** State of the order */
    public read: boolean;

    /** Whether or not the order has been by the vendor */
    public funded: boolean;

    /** Whether the order is funded */
    public unreadChatMessages: (number|Long);

    /** number of unread chat messages associated */
    public paymentAddressTransactions: ITransactionRecord[];

    /** Payments funding the order */
    public refundAddressTransaction?: (ITransactionRecord|null);

    /**
     * Creates a new OrderRespApi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderRespApi instance
     */
    public static create(properties?: IOrderRespApi): OrderRespApi;

    /**
     * Encodes the specified OrderRespApi message. Does not implicitly {@link OrderRespApi.verify|verify} messages.
     * @param message OrderRespApi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderRespApi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderRespApi message, length delimited. Does not implicitly {@link OrderRespApi.verify|verify} messages.
     * @param message OrderRespApi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderRespApi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderRespApi message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderRespApi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderRespApi;

    /**
     * Decodes an OrderRespApi message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderRespApi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderRespApi;

    /**
     * Verifies an OrderRespApi message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderRespApi message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderRespApi
     */
    public static fromObject(object: { [k: string]: any }): OrderRespApi;

    /**
     * Creates a plain object from an OrderRespApi message. Also converts values to other types if specified.
     * @param message OrderRespApi
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderRespApi, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderRespApi to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CaseRespApi. */
export interface ICaseRespApi {

    /** CaseRespApi timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** CaseRespApi buyerContract */
    buyerContract?: (IRicardianContract|null);

    /** CaseRespApi vendorContract */
    vendorContract?: (IRicardianContract|null);

    /** CaseRespApi buyerContractValidationErrors */
    buyerContractValidationErrors?: (string[]|null);

    /** CaseRespApi vendorContractValidationErrors */
    vendorContractValidationErrors?: (string[]|null);

    /** CaseRespApi state */
    state?: (OrderState|null);

    /** CaseRespApi read */
    read?: (boolean|null);

    /** Whether or not the message has been read */
    buyerOpened?: (boolean|null);

    /** CaseRespApi claim */
    claim?: (string|null);

    /** CaseRespApi unreadChatMessages */
    unreadChatMessages?: (number|Long|null);

    /** CaseRespApi resolution */
    resolution?: (IDisputeResolution|null);
}

/** Represents a CaseRespApi. */
export class CaseRespApi implements ICaseRespApi {

    /**
     * Constructs a new CaseRespApi.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICaseRespApi);

    /** CaseRespApi timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** CaseRespApi buyerContract. */
    public buyerContract?: (IRicardianContract|null);

    /** CaseRespApi vendorContract. */
    public vendorContract?: (IRicardianContract|null);

    /** CaseRespApi buyerContractValidationErrors. */
    public buyerContractValidationErrors: string[];

    /** CaseRespApi vendorContractValidationErrors. */
    public vendorContractValidationErrors: string[];

    /** CaseRespApi state. */
    public state: OrderState;

    /** CaseRespApi read. */
    public read: boolean;

    /** Whether or not the message has been read */
    public buyerOpened: boolean;

    /** CaseRespApi claim. */
    public claim: string;

    /** CaseRespApi unreadChatMessages. */
    public unreadChatMessages: (number|Long);

    /** CaseRespApi resolution. */
    public resolution?: (IDisputeResolution|null);

    /**
     * Creates a new CaseRespApi instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CaseRespApi instance
     */
    public static create(properties?: ICaseRespApi): CaseRespApi;

    /**
     * Encodes the specified CaseRespApi message. Does not implicitly {@link CaseRespApi.verify|verify} messages.
     * @param message CaseRespApi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICaseRespApi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CaseRespApi message, length delimited. Does not implicitly {@link CaseRespApi.verify|verify} messages.
     * @param message CaseRespApi message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICaseRespApi, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CaseRespApi message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CaseRespApi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CaseRespApi;

    /**
     * Decodes a CaseRespApi message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CaseRespApi
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CaseRespApi;

    /**
     * Verifies a CaseRespApi message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CaseRespApi message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CaseRespApi
     */
    public static fromObject(object: { [k: string]: any }): CaseRespApi;

    /**
     * Creates a plain object from a CaseRespApi message. Also converts values to other types if specified.
     * @param message CaseRespApi
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CaseRespApi, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CaseRespApi to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TransactionRecord. */
export interface ITransactionRecord {

    /** TransactionRecord txid */
    txid?: (string|null);

    /** The unique transactionRecord ID. */
    value?: (number|Long|null);

    /** TransactionRecord confirmations */
    confirmations?: (number|null);

    /** TransactionRecord height */
    height?: (number|null);

    /** TransactionRecord timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);
}

/** Represents a TransactionRecord. */
export class TransactionRecord implements ITransactionRecord {

    /**
     * Constructs a new TransactionRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITransactionRecord);

    /** TransactionRecord txid. */
    public txid: string;

    /** The unique transactionRecord ID. */
    public value: (number|Long);

    /** TransactionRecord confirmations. */
    public confirmations: number;

    /** TransactionRecord height. */
    public height: number;

    /** TransactionRecord timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new TransactionRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TransactionRecord instance
     */
    public static create(properties?: ITransactionRecord): TransactionRecord;

    /**
     * Encodes the specified TransactionRecord message. Does not implicitly {@link TransactionRecord.verify|verify} messages.
     * @param message TransactionRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITransactionRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TransactionRecord message, length delimited. Does not implicitly {@link TransactionRecord.verify|verify} messages.
     * @param message TransactionRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITransactionRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TransactionRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TransactionRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TransactionRecord;

    /**
     * Decodes a TransactionRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TransactionRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TransactionRecord;

    /**
     * Verifies a TransactionRecord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TransactionRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TransactionRecord
     */
    public static fromObject(object: { [k: string]: any }): TransactionRecord;

    /**
     * Creates a plain object from a TransactionRecord message. Also converts values to other types if specified.
     * @param message TransactionRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TransactionRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TransactionRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PeerAndProfile. */
export interface IPeerAndProfile {

    /** PeerAndProfile peerId */
    peerId?: (string|null);

    /** The unique CIDv0 ipfs node identifer. */
    profile?: (IProfile|null);
}

/** Represents a PeerAndProfile. */
export class PeerAndProfile implements IPeerAndProfile {

    /**
     * Constructs a new PeerAndProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeerAndProfile);

    /** PeerAndProfile peerId. */
    public peerId: string;

    /** The unique CIDv0 ipfs node identifer. */
    public profile?: (IProfile|null);

    /**
     * Creates a new PeerAndProfile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeerAndProfile instance
     */
    public static create(properties?: IPeerAndProfile): PeerAndProfile;

    /**
     * Encodes the specified PeerAndProfile message. Does not implicitly {@link PeerAndProfile.verify|verify} messages.
     * @param message PeerAndProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeerAndProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PeerAndProfile message, length delimited. Does not implicitly {@link PeerAndProfile.verify|verify} messages.
     * @param message PeerAndProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeerAndProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PeerAndProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeerAndProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PeerAndProfile;

    /**
     * Decodes a PeerAndProfile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeerAndProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PeerAndProfile;

    /**
     * Verifies a PeerAndProfile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PeerAndProfile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeerAndProfile
     */
    public static fromObject(object: { [k: string]: any }): PeerAndProfile;

    /**
     * Creates a plain object from a PeerAndProfile message. Also converts values to other types if specified.
     * @param message PeerAndProfile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PeerAndProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PeerAndProfile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PeerAndProfileWithID. */
export interface IPeerAndProfileWithID {

    /** PeerAndProfileWithID id */
    id?: (string|null);

    /** The unique profile ID. */
    peerId?: (string|null);

    /** The unique CIDv0 ipfs node identifer. */
    profile?: (IProfile|null);
}

/** Represents a PeerAndProfileWithID. */
export class PeerAndProfileWithID implements IPeerAndProfileWithID {

    /**
     * Constructs a new PeerAndProfileWithID.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPeerAndProfileWithID);

    /** PeerAndProfileWithID id. */
    public id: string;

    /** The unique profile ID. */
    public peerId: string;

    /** The unique CIDv0 ipfs node identifer. */
    public profile?: (IProfile|null);

    /**
     * Creates a new PeerAndProfileWithID instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PeerAndProfileWithID instance
     */
    public static create(properties?: IPeerAndProfileWithID): PeerAndProfileWithID;

    /**
     * Encodes the specified PeerAndProfileWithID message. Does not implicitly {@link PeerAndProfileWithID.verify|verify} messages.
     * @param message PeerAndProfileWithID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPeerAndProfileWithID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PeerAndProfileWithID message, length delimited. Does not implicitly {@link PeerAndProfileWithID.verify|verify} messages.
     * @param message PeerAndProfileWithID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPeerAndProfileWithID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PeerAndProfileWithID message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PeerAndProfileWithID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PeerAndProfileWithID;

    /**
     * Decodes a PeerAndProfileWithID message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PeerAndProfileWithID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PeerAndProfileWithID;

    /**
     * Verifies a PeerAndProfileWithID message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PeerAndProfileWithID message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PeerAndProfileWithID
     */
    public static fromObject(object: { [k: string]: any }): PeerAndProfileWithID;

    /**
     * Creates a plain object from a PeerAndProfileWithID message. Also converts values to other types if specified.
     * @param message PeerAndProfileWithID
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PeerAndProfileWithID, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PeerAndProfileWithID to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RatingWithID. */
export interface IRatingWithID {

    /** RatingWithID id */
    id?: (string|null);

    /** The unique Rating ID. */
    ratingId?: (string|null);

    /** RatingWithID rating */
    rating?: (IRating|null);
}

/** Represents a RatingWithID. */
export class RatingWithID implements IRatingWithID {

    /**
     * Constructs a new RatingWithID.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRatingWithID);

    /** RatingWithID id. */
    public id: string;

    /** The unique Rating ID. */
    public ratingId: string;

    /** RatingWithID rating. */
    public rating?: (IRating|null);

    /**
     * Creates a new RatingWithID instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RatingWithID instance
     */
    public static create(properties?: IRatingWithID): RatingWithID;

    /**
     * Encodes the specified RatingWithID message. Does not implicitly {@link RatingWithID.verify|verify} messages.
     * @param message RatingWithID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRatingWithID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RatingWithID message, length delimited. Does not implicitly {@link RatingWithID.verify|verify} messages.
     * @param message RatingWithID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRatingWithID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RatingWithID message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RatingWithID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RatingWithID;

    /**
     * Decodes a RatingWithID message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RatingWithID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RatingWithID;

    /**
     * Verifies a RatingWithID message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RatingWithID message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RatingWithID
     */
    public static fromObject(object: { [k: string]: any }): RatingWithID;

    /**
     * Creates a plain object from a RatingWithID message. Also converts values to other types if specified.
     * @param message RatingWithID
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RatingWithID, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RatingWithID to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an OrderService */
export class OrderService extends $protobuf.rpc.Service {

    /**
     * Constructs a new OrderService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new OrderService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): OrderService;

    /**
     * Returns a list of all moderation cases that the node was involved in.
     * @param request PageRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and Order
     */
    public listCases(request: IPageRequestType, callback: OrderService.ListCasesCallback): void;

    /**
     * Returns a list of all moderation cases that the node was involved in.
     * @param request PageRequestType message or plain object
     * @returns Promise
     */
    public listCases(request: IPageRequestType): Promise<Order>;

    /**
     * Returns a list of all sales that the node has made.
     * @param request PageRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and Order
     */
    public listSales(request: IPageRequestType, callback: OrderService.ListSalesCallback): void;

    /**
     * Returns a list of all sales that the node has made.
     * @param request PageRequestType message or plain object
     * @returns Promise
     */
    public listSales(request: IPageRequestType): Promise<Order>;

    /**
     * Returns a list of all purchases that the node has made.
     * @param request PageRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and Order
     */
    public listPurchases(request: IPageRequestType, callback: OrderService.ListPurchasesCallback): void;

    /**
     * Returns a list of all purchases that the node has made.
     * @param request PageRequestType message or plain object
     * @returns Promise
     */
    public listPurchases(request: IPageRequestType): Promise<Order>;

    /**
     * Get an order by ID
     * @param request OrderRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public getQuote(request: IOrderRequestType, callback: OrderService.GetQuoteCallback): void;

    /**
     * Get an order by ID
     * @param request OrderRequestType message or plain object
     * @returns Promise
     */
    public getQuote(request: IOrderRequestType): Promise<OrderResponseType>;

    /**
     * The purchase call can be made to a reachable or a unreachable vendor
     * (offline or not able to receive incoming messages).
     * An order will be created in the AWAITING_PAYMENT state after this call.
     * If the total of the purchase is not more than 4X the current transaction fee, the purchase will be rejected
     * (ie: if the fee is 0.0001, the total purchase must be more than 0.0004).
     * @param request OrderRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public purchase(request: IOrderRequestType, callback: OrderService.PurchaseCallback): void;

    /**
     * The purchase call can be made to a reachable or a unreachable vendor
     * (offline or not able to receive incoming messages).
     * An order will be created in the AWAITING_PAYMENT state after this call.
     * If the total of the purchase is not more than 4X the current transaction fee, the purchase will be rejected
     * (ie: if the fee is 0.0001, the total purchase must be more than 0.0004).
     * @param request OrderRequestType message or plain object
     * @returns Promise
     */
    public purchase(request: IOrderRequestType): Promise<OrderResponseType>;

    /**
     * Online orders are confirmed instantly. This API call is to confirm an order sent to the vendor
     * while he was offline.
     * @param request OrderCompleteRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public confirm(request: IOrderCompleteRequestType, callback: OrderService.ConfirmCallback): void;

    /**
     * Online orders are confirmed instantly. This API call is to confirm an order sent to the vendor
     * while he was offline.
     * @param request OrderCompleteRequestType message or plain object
     * @returns Promise
     */
    public confirm(request: IOrderCompleteRequestType): Promise<OrderResponseType>;

    /**
     * Send the order complete message (including the rating) to the vendor. If this is a moderated order, it will
     * sign and release the funds to the vendor.
     * @param request OrderCompleteRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public complete(request: IOrderCompleteRequestType, callback: OrderService.CompleteCallback): void;

    /**
     * Send the order complete message (including the rating) to the vendor. If this is a moderated order, it will
     * sign and release the funds to the vendor.
     * @param request OrderCompleteRequestType message or plain object
     * @returns Promise
     */
    public complete(request: IOrderCompleteRequestType): Promise<OrderResponseType>;

    /**
     * Refund the order. If it's a moderated order, it will release the funds back to the buyer.
     * If it's direct it will send the coins from your wallet.
     * @param request OrderRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public refundOrder(request: IOrderRequestType, callback: OrderService.RefundOrderCallback): void;

    /**
     * Refund the order. If it's a moderated order, it will release the funds back to the buyer.
     * If it's direct it will send the coins from your wallet.
     * @param request OrderRequestType message or plain object
     * @returns Promise
     */
    public refundOrder(request: IOrderRequestType): Promise<OrderResponseType>;

    /**
     * Cancel an outstanding offline order. It will move the bitcoins back into your wallet.
     * @param request OrderRequestType message or plain object
     * @param callback Node-style callback called with the error, if any, and OrderResponseType
     */
    public cancelOrder(request: IOrderRequestType, callback: OrderService.CancelOrderCallback): void;

    /**
     * Cancel an outstanding offline order. It will move the bitcoins back into your wallet.
     * @param request OrderRequestType message or plain object
     * @returns Promise
     */
    public cancelOrder(request: IOrderRequestType): Promise<OrderResponseType>;
}

export namespace OrderService {

    /**
     * Callback as used by {@link OrderService#listCases}.
     * @param error Error, if any
     * @param [response] Order
     */
    type ListCasesCallback = (error: (Error|null), response?: Order) => void;

    /**
     * Callback as used by {@link OrderService#listSales}.
     * @param error Error, if any
     * @param [response] Order
     */
    type ListSalesCallback = (error: (Error|null), response?: Order) => void;

    /**
     * Callback as used by {@link OrderService#listPurchases}.
     * @param error Error, if any
     * @param [response] Order
     */
    type ListPurchasesCallback = (error: (Error|null), response?: Order) => void;

    /**
     * Callback as used by {@link OrderService#getQuote}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type GetQuoteCallback = (error: (Error|null), response?: OrderResponseType) => void;

    /**
     * Callback as used by {@link OrderService#purchase}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type PurchaseCallback = (error: (Error|null), response?: OrderResponseType) => void;

    /**
     * Callback as used by {@link OrderService#confirm}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type ConfirmCallback = (error: (Error|null), response?: OrderResponseType) => void;

    /**
     * Callback as used by {@link OrderService#complete}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type CompleteCallback = (error: (Error|null), response?: OrderResponseType) => void;

    /**
     * Callback as used by {@link OrderService#refundOrder}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type RefundOrderCallback = (error: (Error|null), response?: OrderResponseType) => void;

    /**
     * Callback as used by {@link OrderService#cancelOrder}.
     * @param error Error, if any
     * @param [response] OrderResponseType
     */
    type CancelOrderCallback = (error: (Error|null), response?: OrderResponseType) => void;
}

/** Properties of an OrderResponseType. */
export interface IOrderResponseType {

    /** OrderResponseType order */
    order?: (IOrder|null);
}

/** Represents an OrderResponseType. */
export class OrderResponseType implements IOrderResponseType {

    /**
     * Constructs a new OrderResponseType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderResponseType);

    /** OrderResponseType order. */
    public order?: (IOrder|null);

    /**
     * Creates a new OrderResponseType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderResponseType instance
     */
    public static create(properties?: IOrderResponseType): OrderResponseType;

    /**
     * Encodes the specified OrderResponseType message. Does not implicitly {@link OrderResponseType.verify|verify} messages.
     * @param message OrderResponseType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderResponseType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderResponseType message, length delimited. Does not implicitly {@link OrderResponseType.verify|verify} messages.
     * @param message OrderResponseType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderResponseType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderResponseType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderResponseType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderResponseType;

    /**
     * Decodes an OrderResponseType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderResponseType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderResponseType;

    /**
     * Verifies an OrderResponseType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderResponseType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderResponseType
     */
    public static fromObject(object: { [k: string]: any }): OrderResponseType;

    /**
     * Creates a plain object from an OrderResponseType message. Also converts values to other types if specified.
     * @param message OrderResponseType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderResponseType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderResponseType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RatingStub. */
export interface IRatingStub {

    /** RatingStub slug */
    slug?: (string|null);

    /** RatingStub overall */
    overall?: (number|null);

    /** RatingStub quality */
    quality?: (number|null);

    /** RatingStub description */
    description?: (number|null);

    /** RatingStub deliverySpeed */
    deliverySpeed?: (number|null);

    /** RatingStub customerService */
    customerService?: (number|null);

    /** RatingStub review */
    review?: (string|null);

    /** RatingStub anonymous */
    anonymous?: (boolean|null);
}

/** Represents a RatingStub. */
export class RatingStub implements IRatingStub {

    /**
     * Constructs a new RatingStub.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRatingStub);

    /** RatingStub slug. */
    public slug: string;

    /** RatingStub overall. */
    public overall: number;

    /** RatingStub quality. */
    public quality: number;

    /** RatingStub description. */
    public description: number;

    /** RatingStub deliverySpeed. */
    public deliverySpeed: number;

    /** RatingStub customerService. */
    public customerService: number;

    /** RatingStub review. */
    public review: string;

    /** RatingStub anonymous. */
    public anonymous: boolean;

    /**
     * Creates a new RatingStub instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RatingStub instance
     */
    public static create(properties?: IRatingStub): RatingStub;

    /**
     * Encodes the specified RatingStub message. Does not implicitly {@link RatingStub.verify|verify} messages.
     * @param message RatingStub message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRatingStub, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RatingStub message, length delimited. Does not implicitly {@link RatingStub.verify|verify} messages.
     * @param message RatingStub message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRatingStub, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RatingStub message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RatingStub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RatingStub;

    /**
     * Decodes a RatingStub message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RatingStub
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RatingStub;

    /**
     * Verifies a RatingStub message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RatingStub message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RatingStub
     */
    public static fromObject(object: { [k: string]: any }): RatingStub;

    /**
     * Creates a plain object from a RatingStub message. Also converts values to other types if specified.
     * @param message RatingStub
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RatingStub, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RatingStub to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderCompleteRequestType. */
export interface IOrderCompleteRequestType {

    /** OrderCompleteRequestType orderId */
    orderId?: (string|null);

    /** OrderCompleteRequestType ratings */
    ratings?: (IRatingStub[]|null);
}

/** Represents an OrderCompleteRequestType. */
export class OrderCompleteRequestType implements IOrderCompleteRequestType {

    /**
     * Constructs a new OrderCompleteRequestType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderCompleteRequestType);

    /** OrderCompleteRequestType orderId. */
    public orderId: string;

    /** OrderCompleteRequestType ratings. */
    public ratings: IRatingStub[];

    /**
     * Creates a new OrderCompleteRequestType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderCompleteRequestType instance
     */
    public static create(properties?: IOrderCompleteRequestType): OrderCompleteRequestType;

    /**
     * Encodes the specified OrderCompleteRequestType message. Does not implicitly {@link OrderCompleteRequestType.verify|verify} messages.
     * @param message OrderCompleteRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderCompleteRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderCompleteRequestType message, length delimited. Does not implicitly {@link OrderCompleteRequestType.verify|verify} messages.
     * @param message OrderCompleteRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderCompleteRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderCompleteRequestType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderCompleteRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderCompleteRequestType;

    /**
     * Decodes an OrderCompleteRequestType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderCompleteRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderCompleteRequestType;

    /**
     * Verifies an OrderCompleteRequestType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderCompleteRequestType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderCompleteRequestType
     */
    public static fromObject(object: { [k: string]: any }): OrderCompleteRequestType;

    /**
     * Creates a plain object from an OrderCompleteRequestType message. Also converts values to other types if specified.
     * @param message OrderCompleteRequestType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderCompleteRequestType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderCompleteRequestType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderRequestType. */
export interface IOrderRequestType {

    /** OrderRequestType orderId */
    orderId?: (string|null);
}

/** Represents an OrderRequestType. */
export class OrderRequestType implements IOrderRequestType {

    /**
     * Constructs a new OrderRequestType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderRequestType);

    /** OrderRequestType orderId. */
    public orderId: string;

    /**
     * Creates a new OrderRequestType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderRequestType instance
     */
    public static create(properties?: IOrderRequestType): OrderRequestType;

    /**
     * Encodes the specified OrderRequestType message. Does not implicitly {@link OrderRequestType.verify|verify} messages.
     * @param message OrderRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderRequestType message, length delimited. Does not implicitly {@link OrderRequestType.verify|verify} messages.
     * @param message OrderRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderRequestType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderRequestType;

    /**
     * Decodes an OrderRequestType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderRequestType;

    /**
     * Verifies an OrderRequestType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderRequestType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderRequestType
     */
    public static fromObject(object: { [k: string]: any }): OrderRequestType;

    /**
     * Creates a plain object from an OrderRequestType message. Also converts values to other types if specified.
     * @param message OrderRequestType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderRequestType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderRequestType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderConfirmRequestType. */
export interface IOrderConfirmRequestType {

    /** OrderConfirmRequestType orderId */
    orderId?: (string|null);

    /** OrderConfirmRequestType reject */
    reject?: (boolean|null);
}

/** Represents an OrderConfirmRequestType. */
export class OrderConfirmRequestType implements IOrderConfirmRequestType {

    /**
     * Constructs a new OrderConfirmRequestType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderConfirmRequestType);

    /** OrderConfirmRequestType orderId. */
    public orderId: string;

    /** OrderConfirmRequestType reject. */
    public reject: boolean;

    /**
     * Creates a new OrderConfirmRequestType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderConfirmRequestType instance
     */
    public static create(properties?: IOrderConfirmRequestType): OrderConfirmRequestType;

    /**
     * Encodes the specified OrderConfirmRequestType message. Does not implicitly {@link OrderConfirmRequestType.verify|verify} messages.
     * @param message OrderConfirmRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderConfirmRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderConfirmRequestType message, length delimited. Does not implicitly {@link OrderConfirmRequestType.verify|verify} messages.
     * @param message OrderConfirmRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderConfirmRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderConfirmRequestType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderConfirmRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderConfirmRequestType;

    /**
     * Decodes an OrderConfirmRequestType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderConfirmRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderConfirmRequestType;

    /**
     * Verifies an OrderConfirmRequestType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderConfirmRequestType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderConfirmRequestType
     */
    public static fromObject(object: { [k: string]: any }): OrderConfirmRequestType;

    /**
     * Creates a plain object from an OrderConfirmRequestType message. Also converts values to other types if specified.
     * @param message OrderConfirmRequestType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderConfirmRequestType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderConfirmRequestType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PageRequestType. */
export interface IPageRequestType {

    /** PageRequestType limit */
    limit?: (number|null);

    /** PageRequestType offset */
    offset?: (number|null);
}

/** Represents a PageRequestType. */
export class PageRequestType implements IPageRequestType {

    /**
     * Constructs a new PageRequestType.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPageRequestType);

    /** PageRequestType limit. */
    public limit: number;

    /** PageRequestType offset. */
    public offset: number;

    /**
     * Creates a new PageRequestType instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PageRequestType instance
     */
    public static create(properties?: IPageRequestType): PageRequestType;

    /**
     * Encodes the specified PageRequestType message. Does not implicitly {@link PageRequestType.verify|verify} messages.
     * @param message PageRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPageRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PageRequestType message, length delimited. Does not implicitly {@link PageRequestType.verify|verify} messages.
     * @param message PageRequestType message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPageRequestType, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PageRequestType message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PageRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PageRequestType;

    /**
     * Decodes a PageRequestType message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PageRequestType
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PageRequestType;

    /**
     * Verifies a PageRequestType message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PageRequestType message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PageRequestType
     */
    public static fromObject(object: { [k: string]: any }): PageRequestType;

    /**
     * Creates a plain object from a PageRequestType message. Also converts values to other types if specified.
     * @param message PageRequestType
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PageRequestType, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PageRequestType to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RicardianContract. */
export interface IRicardianContract {

    /** RicardianContract vendorListings */
    vendorListings?: (IListing[]|null);

    /** RicardianContract buyerOrder */
    buyerOrder?: (IOrder|null);

    /** RicardianContract vendorOrderConfirmation */
    vendorOrderConfirmation?: (IOrderConfirmation|null);

    /** RicardianContract vendorOrderFulfillment */
    vendorOrderFulfillment?: (IOrderFulfillment[]|null);

    /** RicardianContract buyerOrderCompletion */
    buyerOrderCompletion?: (IOrderCompletion|null);

    /** RicardianContract dispute */
    dispute?: (IDispute|null);

    /** RicardianContract disputeResolution */
    disputeResolution?: (IDisputeResolution|null);

    /** RicardianContract disputeAcceptance */
    disputeAcceptance?: (IDisputeAcceptance|null);

    /** RicardianContract refund */
    refund?: (IRefund|null);

    /** RicardianContract signatures */
    signatures?: (ISignature[]|null);

    /** RicardianContract errors */
    errors?: (string[]|null);
}

/** Represents a RicardianContract. */
export class RicardianContract implements IRicardianContract {

    /**
     * Constructs a new RicardianContract.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRicardianContract);

    /** RicardianContract vendorListings. */
    public vendorListings: IListing[];

    /** RicardianContract buyerOrder. */
    public buyerOrder?: (IOrder|null);

    /** RicardianContract vendorOrderConfirmation. */
    public vendorOrderConfirmation?: (IOrderConfirmation|null);

    /** RicardianContract vendorOrderFulfillment. */
    public vendorOrderFulfillment: IOrderFulfillment[];

    /** RicardianContract buyerOrderCompletion. */
    public buyerOrderCompletion?: (IOrderCompletion|null);

    /** RicardianContract dispute. */
    public dispute?: (IDispute|null);

    /** RicardianContract disputeResolution. */
    public disputeResolution?: (IDisputeResolution|null);

    /** RicardianContract disputeAcceptance. */
    public disputeAcceptance?: (IDisputeAcceptance|null);

    /** RicardianContract refund. */
    public refund?: (IRefund|null);

    /** RicardianContract signatures. */
    public signatures: ISignature[];

    /** RicardianContract errors. */
    public errors: string[];

    /**
     * Creates a new RicardianContract instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RicardianContract instance
     */
    public static create(properties?: IRicardianContract): RicardianContract;

    /**
     * Encodes the specified RicardianContract message. Does not implicitly {@link RicardianContract.verify|verify} messages.
     * @param message RicardianContract message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRicardianContract, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RicardianContract message, length delimited. Does not implicitly {@link RicardianContract.verify|verify} messages.
     * @param message RicardianContract message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRicardianContract, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RicardianContract message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RicardianContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RicardianContract;

    /**
     * Decodes a RicardianContract message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RicardianContract
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RicardianContract;

    /**
     * Verifies a RicardianContract message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RicardianContract message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RicardianContract
     */
    public static fromObject(object: { [k: string]: any }): RicardianContract;

    /**
     * Creates a plain object from a RicardianContract message. Also converts values to other types if specified.
     * @param message RicardianContract
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RicardianContract, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RicardianContract to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Listing. */
export interface IListing {

    /** Listing slug */
    slug?: (string|null);

    /** Listing vendorID */
    vendorID?: (IID|null);

    /** Listing metadata */
    metadata?: (Listing.IMetadata|null);

    /** Listing item */
    item?: (Listing.IItem|null);

    /** Listing shippingOptions */
    shippingOptions?: (Listing.IShippingOption[]|null);

    /** Listing taxes */
    taxes?: (Listing.ITax[]|null);

    /** Listing coupons */
    coupons?: (Listing.ICoupon[]|null);

    /** Listing moderators */
    moderators?: (string[]|null);

    /** Listing termsAndConditions */
    termsAndConditions?: (string|null);

    /** Listing refundPolicy */
    refundPolicy?: (string|null);
}

/** Represents a Listing. */
export class Listing implements IListing {

    /**
     * Constructs a new Listing.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListing);

    /** Listing slug. */
    public slug: string;

    /** Listing vendorID. */
    public vendorID?: (IID|null);

    /** Listing metadata. */
    public metadata?: (Listing.IMetadata|null);

    /** Listing item. */
    public item?: (Listing.IItem|null);

    /** Listing shippingOptions. */
    public shippingOptions: Listing.IShippingOption[];

    /** Listing taxes. */
    public taxes: Listing.ITax[];

    /** Listing coupons. */
    public coupons: Listing.ICoupon[];

    /** Listing moderators. */
    public moderators: string[];

    /** Listing termsAndConditions. */
    public termsAndConditions: string;

    /** Listing refundPolicy. */
    public refundPolicy: string;

    /**
     * Creates a new Listing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Listing instance
     */
    public static create(properties?: IListing): Listing;

    /**
     * Encodes the specified Listing message. Does not implicitly {@link Listing.verify|verify} messages.
     * @param message Listing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Listing message, length delimited. Does not implicitly {@link Listing.verify|verify} messages.
     * @param message Listing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Listing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Listing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing;

    /**
     * Decodes a Listing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Listing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing;

    /**
     * Verifies a Listing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Listing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Listing
     */
    public static fromObject(object: { [k: string]: any }): Listing;

    /**
     * Creates a plain object from a Listing message. Also converts values to other types if specified.
     * @param message Listing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Listing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Listing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Listing {

    /** Properties of a Metadata. */
    interface IMetadata {

        /** Metadata version */
        version?: (number|null);

        /** Metadata contractType */
        contractType?: (Listing.Metadata.ContractType|null);

        /** Metadata format */
        format?: (Listing.Metadata.Format|null);

        /** Metadata expiry */
        expiry?: (google.protobuf.ITimestamp|null);

        /** Metadata acceptedCurrencies */
        acceptedCurrencies?: (string[]|null);

        /** Metadata pricingCurrency */
        pricingCurrency?: (string|null);

        /** Metadata language */
        language?: (string|null);

        /** Metadata escrowTimeoutHours */
        escrowTimeoutHours?: (number|null);

        /** Metadata coinType */
        coinType?: (string|null);

        /** Metadata coinDivisibility */
        coinDivisibility?: (number|null);
    }

    /** Represents a Metadata. */
    class Metadata implements IMetadata {

        /**
         * Constructs a new Metadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: Listing.IMetadata);

        /** Metadata version. */
        public version: number;

        /** Metadata contractType. */
        public contractType: Listing.Metadata.ContractType;

        /** Metadata format. */
        public format: Listing.Metadata.Format;

        /** Metadata expiry. */
        public expiry?: (google.protobuf.ITimestamp|null);

        /** Metadata acceptedCurrencies. */
        public acceptedCurrencies: string[];

        /** Metadata pricingCurrency. */
        public pricingCurrency: string;

        /** Metadata language. */
        public language: string;

        /** Metadata escrowTimeoutHours. */
        public escrowTimeoutHours: number;

        /** Metadata coinType. */
        public coinType: string;

        /** Metadata coinDivisibility. */
        public coinDivisibility: number;

        /**
         * Creates a new Metadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Metadata instance
         */
        public static create(properties?: Listing.IMetadata): Listing.Metadata;

        /**
         * Encodes the specified Metadata message. Does not implicitly {@link Listing.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Listing.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Metadata message, length delimited. Does not implicitly {@link Listing.Metadata.verify|verify} messages.
         * @param message Metadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Listing.IMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Metadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Metadata;

        /**
         * Decodes a Metadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Metadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Metadata;

        /**
         * Verifies a Metadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Metadata
         */
        public static fromObject(object: { [k: string]: any }): Listing.Metadata;

        /**
         * Creates a plain object from a Metadata message. Also converts values to other types if specified.
         * @param message Metadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Listing.Metadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Metadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Metadata {

        /** ContractType enum. */
        enum ContractType {
            PHYSICAL_GOOD = 0,
            DIGITAL_GOOD = 1,
            SERVICE = 2,
            CROWD_FUND = 3,
            CRYPTOCURRENCY = 4
        }

        /** Format enum. */
        enum Format {
            FIXED_PRICE = 0,
            MARKET_PRICE = 2
        }
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item title */
        title?: (string|null);

        /** Item description */
        description?: (string|null);

        /** Item processingTime */
        processingTime?: (string|null);

        /** Item price */
        price?: (number|Long|null);

        /** The price in ..... tk */
        nsfw?: (boolean|null);

        /** Whether the listing contains mature or adult content. */
        tags?: (string[]|null);

        /** A list of tags */
        images?: (IImage[]|null);

        /** A list of images for the item. (tiny: 90x90) */
        categories?: (string[]|null);

        /** A list of categories to organize listings within store */
        grams?: (number|null);

        /** Item condition */
        condition?: (string|null);

        /** Item options */
        options?: (Listing.Item.IOption[]|null);

        /** Item skus */
        skus?: (Listing.Item.ISku[]|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: Listing.IItem);

        /** Item title. */
        public title: string;

        /** Item description. */
        public description: string;

        /** Item processingTime. */
        public processingTime: string;

        /** Item price. */
        public price: (number|Long);

        /** The price in ..... tk */
        public nsfw: boolean;

        /** Whether the listing contains mature or adult content. */
        public tags: string[];

        /** A list of tags */
        public images: IImage[];

        /** A list of images for the item. (tiny: 90x90) */
        public categories: string[];

        /** A list of categories to organize listings within store */
        public grams: number;

        /** Item condition. */
        public condition: string;

        /** Item options. */
        public options: Listing.Item.IOption[];

        /** Item skus. */
        public skus: Listing.Item.ISku[];

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: Listing.IItem): Listing.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link Listing.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Listing.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link Listing.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Listing.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): Listing.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Listing.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Item {

        /** Properties of an Option. */
        interface IOption {

            /** Option name */
            name?: (string|null);

            /** Option description */
            description?: (string|null);

            /** Option variants */
            variants?: (Listing.Item.Option.IVariant[]|null);
        }

        /** Represents an Option. */
        class Option implements IOption {

            /**
             * Constructs a new Option.
             * @param [properties] Properties to set
             */
            constructor(properties?: Listing.Item.IOption);

            /** Option name. */
            public name: string;

            /** Option description. */
            public description: string;

            /** Option variants. */
            public variants: Listing.Item.Option.IVariant[];

            /**
             * Creates a new Option instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Option instance
             */
            public static create(properties?: Listing.Item.IOption): Listing.Item.Option;

            /**
             * Encodes the specified Option message. Does not implicitly {@link Listing.Item.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Listing.Item.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Option message, length delimited. Does not implicitly {@link Listing.Item.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Listing.Item.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Option message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Item.Option;

            /**
             * Decodes an Option message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Item.Option;

            /**
             * Verifies an Option message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Option message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Option
             */
            public static fromObject(object: { [k: string]: any }): Listing.Item.Option;

            /**
             * Creates a plain object from an Option message. Also converts values to other types if specified.
             * @param message Option
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Listing.Item.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Option to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Option {

            /** Properties of a Variant. */
            interface IVariant {

                /** Variant name */
                name?: (string|null);

                /** Variant image */
                image?: (IImage|null);
            }

            /** Represents a Variant. */
            class Variant implements IVariant {

                /**
                 * Constructs a new Variant.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: Listing.Item.Option.IVariant);

                /** Variant name. */
                public name: string;

                /** Variant image. */
                public image?: (IImage|null);

                /**
                 * Creates a new Variant instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Variant instance
                 */
                public static create(properties?: Listing.Item.Option.IVariant): Listing.Item.Option.Variant;

                /**
                 * Encodes the specified Variant message. Does not implicitly {@link Listing.Item.Option.Variant.verify|verify} messages.
                 * @param message Variant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: Listing.Item.Option.IVariant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Variant message, length delimited. Does not implicitly {@link Listing.Item.Option.Variant.verify|verify} messages.
                 * @param message Variant message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: Listing.Item.Option.IVariant, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Variant message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Variant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Item.Option.Variant;

                /**
                 * Decodes a Variant message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Variant
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Item.Option.Variant;

                /**
                 * Verifies a Variant message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Variant message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Variant
                 */
                public static fromObject(object: { [k: string]: any }): Listing.Item.Option.Variant;

                /**
                 * Creates a plain object from a Variant message. Also converts values to other types if specified.
                 * @param message Variant
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: Listing.Item.Option.Variant, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Variant to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Sku. */
        interface ISku {

            /** Sku variantCombo */
            variantCombo?: (number[]|null);

            /** Sku productID */
            productID?: (string|null);

            /** Sku surcharge */
            surcharge?: (number|Long|null);

            /** Sku quantity */
            quantity?: (number|Long|null);
        }

        /** Represents a Sku. */
        class Sku implements ISku {

            /**
             * Constructs a new Sku.
             * @param [properties] Properties to set
             */
            constructor(properties?: Listing.Item.ISku);

            /** Sku variantCombo. */
            public variantCombo: number[];

            /** Sku productID. */
            public productID: string;

            /** Sku surcharge. */
            public surcharge: (number|Long);

            /** Sku quantity. */
            public quantity: (number|Long);

            /**
             * Creates a new Sku instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Sku instance
             */
            public static create(properties?: Listing.Item.ISku): Listing.Item.Sku;

            /**
             * Encodes the specified Sku message. Does not implicitly {@link Listing.Item.Sku.verify|verify} messages.
             * @param message Sku message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Listing.Item.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Sku message, length delimited. Does not implicitly {@link Listing.Item.Sku.verify|verify} messages.
             * @param message Sku message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Listing.Item.ISku, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Sku message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Sku
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Item.Sku;

            /**
             * Decodes a Sku message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Sku
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Item.Sku;

            /**
             * Verifies a Sku message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Sku message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Sku
             */
            public static fromObject(object: { [k: string]: any }): Listing.Item.Sku;

            /**
             * Creates a plain object from a Sku message. Also converts values to other types if specified.
             * @param message Sku
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Listing.Item.Sku, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Sku to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a ShippingOption. */
    interface IShippingOption {

        /** ShippingOption name */
        name?: (string|null);

        /** ShippingOption type */
        type?: (Listing.ShippingOption.ShippingType|null);

        /** ShippingOption regions */
        regions?: (CountryCode[]|null);

        /** ShippingOption services */
        services?: (Listing.ShippingOption.IService[]|null);
    }

    /** Represents a ShippingOption. */
    class ShippingOption implements IShippingOption {

        /**
         * Constructs a new ShippingOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: Listing.IShippingOption);

        /** ShippingOption name. */
        public name: string;

        /** ShippingOption type. */
        public type: Listing.ShippingOption.ShippingType;

        /** ShippingOption regions. */
        public regions: CountryCode[];

        /** ShippingOption services. */
        public services: Listing.ShippingOption.IService[];

        /**
         * Creates a new ShippingOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShippingOption instance
         */
        public static create(properties?: Listing.IShippingOption): Listing.ShippingOption;

        /**
         * Encodes the specified ShippingOption message. Does not implicitly {@link Listing.ShippingOption.verify|verify} messages.
         * @param message ShippingOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Listing.IShippingOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShippingOption message, length delimited. Does not implicitly {@link Listing.ShippingOption.verify|verify} messages.
         * @param message ShippingOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Listing.IShippingOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShippingOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShippingOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.ShippingOption;

        /**
         * Decodes a ShippingOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShippingOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.ShippingOption;

        /**
         * Verifies a ShippingOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShippingOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShippingOption
         */
        public static fromObject(object: { [k: string]: any }): Listing.ShippingOption;

        /**
         * Creates a plain object from a ShippingOption message. Also converts values to other types if specified.
         * @param message ShippingOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Listing.ShippingOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShippingOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ShippingOption {

        /** ShippingType enum. */
        enum ShippingType {
            LOCAL_PICKUP = 0,
            FIXED_PRICE = 1
        }

        /** Properties of a Service. */
        interface IService {

            /** Service name */
            name?: (string|null);

            /** Service price */
            price?: (number|Long|null);

            /** Service estimatedDelivery */
            estimatedDelivery?: (string|null);

            /** Service additionalItemPrice */
            additionalItemPrice?: (number|Long|null);
        }

        /** Represents a Service. */
        class Service implements IService {

            /**
             * Constructs a new Service.
             * @param [properties] Properties to set
             */
            constructor(properties?: Listing.ShippingOption.IService);

            /** Service name. */
            public name: string;

            /** Service price. */
            public price: (number|Long);

            /** Service estimatedDelivery. */
            public estimatedDelivery: string;

            /** Service additionalItemPrice. */
            public additionalItemPrice: (number|Long);

            /**
             * Creates a new Service instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Service instance
             */
            public static create(properties?: Listing.ShippingOption.IService): Listing.ShippingOption.Service;

            /**
             * Encodes the specified Service message. Does not implicitly {@link Listing.ShippingOption.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Listing.ShippingOption.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Service message, length delimited. Does not implicitly {@link Listing.ShippingOption.Service.verify|verify} messages.
             * @param message Service message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Listing.ShippingOption.IService, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Service message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.ShippingOption.Service;

            /**
             * Decodes a Service message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Service
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.ShippingOption.Service;

            /**
             * Verifies a Service message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Service message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Service
             */
            public static fromObject(object: { [k: string]: any }): Listing.ShippingOption.Service;

            /**
             * Creates a plain object from a Service message. Also converts values to other types if specified.
             * @param message Service
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Listing.ShippingOption.Service, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Service to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Tax. */
    interface ITax {

        /** Tax taxType */
        taxType?: (string|null);

        /** Tax taxRegions */
        taxRegions?: (CountryCode[]|null);

        /** Tax taxShipping */
        taxShipping?: (boolean|null);

        /** Tax percentage */
        percentage?: (number|null);
    }

    /** Represents a Tax. */
    class Tax implements ITax {

        /**
         * Constructs a new Tax.
         * @param [properties] Properties to set
         */
        constructor(properties?: Listing.ITax);

        /** Tax taxType. */
        public taxType: string;

        /** Tax taxRegions. */
        public taxRegions: CountryCode[];

        /** Tax taxShipping. */
        public taxShipping: boolean;

        /** Tax percentage. */
        public percentage: number;

        /**
         * Creates a new Tax instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Tax instance
         */
        public static create(properties?: Listing.ITax): Listing.Tax;

        /**
         * Encodes the specified Tax message. Does not implicitly {@link Listing.Tax.verify|verify} messages.
         * @param message Tax message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Listing.ITax, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Tax message, length delimited. Does not implicitly {@link Listing.Tax.verify|verify} messages.
         * @param message Tax message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Listing.ITax, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Tax message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Tax
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Tax;

        /**
         * Decodes a Tax message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Tax
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Tax;

        /**
         * Verifies a Tax message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Tax message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Tax
         */
        public static fromObject(object: { [k: string]: any }): Listing.Tax;

        /**
         * Creates a plain object from a Tax message. Also converts values to other types if specified.
         * @param message Tax
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Listing.Tax, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Tax to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Coupon. */
    interface ICoupon {

        /** Coupon title */
        title?: (string|null);

        /** Coupon hash */
        hash?: (string|null);

        /** Coupon discountCode */
        discountCode?: (string|null);

        /** Coupon percentDiscount */
        percentDiscount?: (number|null);

        /** Coupon priceDiscount */
        priceDiscount?: (number|Long|null);
    }

    /** Represents a Coupon. */
    class Coupon implements ICoupon {

        /**
         * Constructs a new Coupon.
         * @param [properties] Properties to set
         */
        constructor(properties?: Listing.ICoupon);

        /** Coupon title. */
        public title: string;

        /** Coupon hash. */
        public hash: string;

        /** Coupon discountCode. */
        public discountCode: string;

        /** Coupon percentDiscount. */
        public percentDiscount: number;

        /** Coupon priceDiscount. */
        public priceDiscount: (number|Long);

        /** Coupon code. */
        public code?: ("hash"|"discountCode");

        /** Coupon discount. */
        public discount?: ("percentDiscount"|"priceDiscount");

        /**
         * Creates a new Coupon instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Coupon instance
         */
        public static create(properties?: Listing.ICoupon): Listing.Coupon;

        /**
         * Encodes the specified Coupon message. Does not implicitly {@link Listing.Coupon.verify|verify} messages.
         * @param message Coupon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Listing.ICoupon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Coupon message, length delimited. Does not implicitly {@link Listing.Coupon.verify|verify} messages.
         * @param message Coupon message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Listing.ICoupon, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Coupon message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Coupon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Listing.Coupon;

        /**
         * Decodes a Coupon message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Coupon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Listing.Coupon;

        /**
         * Verifies a Coupon message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Coupon message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Coupon
         */
        public static fromObject(object: { [k: string]: any }): Listing.Coupon;

        /**
         * Creates a plain object from a Coupon message. Also converts values to other types if specified.
         * @param message Coupon
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Listing.Coupon, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Coupon to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an Order. */
export interface IOrder {

    /** Order refundAddress */
    refundAddress?: (string|null);

    /** Order refundFee */
    refundFee?: (number|Long|null);

    /** Order shipping */
    shipping?: (Order.IShipping|null);

    /** Order buyerID */
    buyerID?: (IID|null);

    /** Order timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** Order items */
    items?: (Order.IItem[]|null);

    /** Order payment */
    payment?: (Order.IPayment|null);

    /** Order ratingKeys */
    ratingKeys?: (Uint8Array[]|null);

    /** Order alternateContactInfo */
    alternateContactInfo?: (string|null);

    /** Order version */
    version?: (number|null);
}

/** Represents an Order. */
export class Order implements IOrder {

    /**
     * Constructs a new Order.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrder);

    /** Order refundAddress. */
    public refundAddress: string;

    /** Order refundFee. */
    public refundFee: (number|Long);

    /** Order shipping. */
    public shipping?: (Order.IShipping|null);

    /** Order buyerID. */
    public buyerID?: (IID|null);

    /** Order timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** Order items. */
    public items: Order.IItem[];

    /** Order payment. */
    public payment?: (Order.IPayment|null);

    /** Order ratingKeys. */
    public ratingKeys: Uint8Array[];

    /** Order alternateContactInfo. */
    public alternateContactInfo: string;

    /** Order version. */
    public version: number;

    /**
     * Creates a new Order instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Order instance
     */
    public static create(properties?: IOrder): Order;

    /**
     * Encodes the specified Order message. Does not implicitly {@link Order.verify|verify} messages.
     * @param message Order message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Order message, length delimited. Does not implicitly {@link Order.verify|verify} messages.
     * @param message Order message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Order message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Order
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order;

    /**
     * Decodes an Order message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Order
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order;

    /**
     * Verifies an Order message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Order message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Order
     */
    public static fromObject(object: { [k: string]: any }): Order;

    /**
     * Creates a plain object from an Order message. Also converts values to other types if specified.
     * @param message Order
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Order to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Order {

    /** Properties of a Shipping. */
    interface IShipping {

        /** Shipping shipTo */
        shipTo?: (string|null);

        /** Shipping address */
        address?: (string|null);

        /** Shipping city */
        city?: (string|null);

        /** Shipping state */
        state?: (string|null);

        /** Shipping postalCode */
        postalCode?: (string|null);

        /** Shipping country */
        country?: (CountryCode|null);

        /** Shipping addressNotes */
        addressNotes?: (string|null);
    }

    /** Represents a Shipping. */
    class Shipping implements IShipping {

        /**
         * Constructs a new Shipping.
         * @param [properties] Properties to set
         */
        constructor(properties?: Order.IShipping);

        /** Shipping shipTo. */
        public shipTo: string;

        /** Shipping address. */
        public address: string;

        /** Shipping city. */
        public city: string;

        /** Shipping state. */
        public state: string;

        /** Shipping postalCode. */
        public postalCode: string;

        /** Shipping country. */
        public country: CountryCode;

        /** Shipping addressNotes. */
        public addressNotes: string;

        /**
         * Creates a new Shipping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Shipping instance
         */
        public static create(properties?: Order.IShipping): Order.Shipping;

        /**
         * Encodes the specified Shipping message. Does not implicitly {@link Order.Shipping.verify|verify} messages.
         * @param message Shipping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Order.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Shipping message, length delimited. Does not implicitly {@link Order.Shipping.verify|verify} messages.
         * @param message Shipping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Order.IShipping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Shipping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Shipping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order.Shipping;

        /**
         * Decodes a Shipping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Shipping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order.Shipping;

        /**
         * Verifies a Shipping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Shipping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Shipping
         */
        public static fromObject(object: { [k: string]: any }): Order.Shipping;

        /**
         * Creates a plain object from a Shipping message. Also converts values to other types if specified.
         * @param message Shipping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Order.Shipping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Shipping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item listingHash */
        listingHash?: (string|null);

        /** Item quantity */
        quantity?: (number|null);

        /** Item quantity64 */
        quantity64?: (number|Long|null);

        /** Item options */
        options?: (Order.Item.IOption[]|null);

        /** Item shippingOption */
        shippingOption?: (Order.Item.IShippingOption|null);

        /** Item memo */
        memo?: (string|null);

        /** Item couponCodes */
        couponCodes?: (string[]|null);

        /** Item paymentAddress */
        paymentAddress?: (string|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [properties] Properties to set
         */
        constructor(properties?: Order.IItem);

        /** Item listingHash. */
        public listingHash: string;

        /** Item quantity. */
        public quantity: number;

        /** Item quantity64. */
        public quantity64: (number|Long);

        /** Item options. */
        public options: Order.Item.IOption[];

        /** Item shippingOption. */
        public shippingOption?: (Order.Item.IShippingOption|null);

        /** Item memo. */
        public memo: string;

        /** Item couponCodes. */
        public couponCodes: string[];

        /** Item paymentAddress. */
        public paymentAddress: string;

        /**
         * Creates a new Item instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Item instance
         */
        public static create(properties?: Order.IItem): Order.Item;

        /**
         * Encodes the specified Item message. Does not implicitly {@link Order.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Order.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Item message, length delimited. Does not implicitly {@link Order.Item.verify|verify} messages.
         * @param message Item message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Order.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order.Item;

        /**
         * Decodes an Item message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order.Item;

        /**
         * Verifies an Item message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Item message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Item
         */
        public static fromObject(object: { [k: string]: any }): Order.Item;

        /**
         * Creates a plain object from an Item message. Also converts values to other types if specified.
         * @param message Item
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Order.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Item to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Item {

        /** Properties of an Option. */
        interface IOption {

            /** Option name */
            name?: (string|null);

            /** Option value */
            value?: (string|null);
        }

        /** Represents an Option. */
        class Option implements IOption {

            /**
             * Constructs a new Option.
             * @param [properties] Properties to set
             */
            constructor(properties?: Order.Item.IOption);

            /** Option name. */
            public name: string;

            /** Option value. */
            public value: string;

            /**
             * Creates a new Option instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Option instance
             */
            public static create(properties?: Order.Item.IOption): Order.Item.Option;

            /**
             * Encodes the specified Option message. Does not implicitly {@link Order.Item.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Order.Item.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Option message, length delimited. Does not implicitly {@link Order.Item.Option.verify|verify} messages.
             * @param message Option message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Order.Item.IOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Option message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order.Item.Option;

            /**
             * Decodes an Option message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Option
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order.Item.Option;

            /**
             * Verifies an Option message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Option message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Option
             */
            public static fromObject(object: { [k: string]: any }): Order.Item.Option;

            /**
             * Creates a plain object from an Option message. Also converts values to other types if specified.
             * @param message Option
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Order.Item.Option, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Option to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ShippingOption. */
        interface IShippingOption {

            /** ShippingOption name */
            name?: (string|null);

            /** ShippingOption service */
            service?: (string|null);
        }

        /** Represents a ShippingOption. */
        class ShippingOption implements IShippingOption {

            /**
             * Constructs a new ShippingOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: Order.Item.IShippingOption);

            /** ShippingOption name. */
            public name: string;

            /** ShippingOption service. */
            public service: string;

            /**
             * Creates a new ShippingOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ShippingOption instance
             */
            public static create(properties?: Order.Item.IShippingOption): Order.Item.ShippingOption;

            /**
             * Encodes the specified ShippingOption message. Does not implicitly {@link Order.Item.ShippingOption.verify|verify} messages.
             * @param message ShippingOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: Order.Item.IShippingOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ShippingOption message, length delimited. Does not implicitly {@link Order.Item.ShippingOption.verify|verify} messages.
             * @param message ShippingOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: Order.Item.IShippingOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ShippingOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ShippingOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order.Item.ShippingOption;

            /**
             * Decodes a ShippingOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ShippingOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order.Item.ShippingOption;

            /**
             * Verifies a ShippingOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ShippingOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ShippingOption
             */
            public static fromObject(object: { [k: string]: any }): Order.Item.ShippingOption;

            /**
             * Creates a plain object from a ShippingOption message. Also converts values to other types if specified.
             * @param message ShippingOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: Order.Item.ShippingOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ShippingOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Payment. */
    interface IPayment {

        /** Payment method */
        method?: (Order.Payment.Method|null);

        /** Payment moderator */
        moderator?: (string|null);

        /** Payment amount */
        amount?: (number|Long|null);

        /** Payment chaincode */
        chaincode?: (string|null);

        /** Payment address */
        address?: (string|null);

        /** Payment redeemScript */
        redeemScript?: (string|null);

        /** Payment moderatorKey */
        moderatorKey?: (Uint8Array|null);
    }

    /** Represents a Payment. */
    class Payment implements IPayment {

        /**
         * Constructs a new Payment.
         * @param [properties] Properties to set
         */
        constructor(properties?: Order.IPayment);

        /** Payment method. */
        public method: Order.Payment.Method;

        /** Payment moderator. */
        public moderator: string;

        /** Payment amount. */
        public amount: (number|Long);

        /** Payment chaincode. */
        public chaincode: string;

        /** Payment address. */
        public address: string;

        /** Payment redeemScript. */
        public redeemScript: string;

        /** Payment moderatorKey. */
        public moderatorKey: Uint8Array;

        /**
         * Creates a new Payment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payment instance
         */
        public static create(properties?: Order.IPayment): Order.Payment;

        /**
         * Encodes the specified Payment message. Does not implicitly {@link Order.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Order.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payment message, length delimited. Does not implicitly {@link Order.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Order.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Order.Payment;

        /**
         * Decodes a Payment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Order.Payment;

        /**
         * Verifies a Payment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payment
         */
        public static fromObject(object: { [k: string]: any }): Order.Payment;

        /**
         * Creates a plain object from a Payment message. Also converts values to other types if specified.
         * @param message Payment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Order.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Payment {

        /** Method enum. */
        enum Method {
            ADDRESS_REQUEST = 0,
            DIRECT = 1,
            MODERATED = 2
        }
    }
}

/** Properties of an OrderConfirmation. */
export interface IOrderConfirmation {

    /** OrderConfirmation orderID */
    orderID?: (string|null);

    /** OrderConfirmation timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderConfirmation paymentAddress */
    paymentAddress?: (string|null);

    /** OrderConfirmation requestedAmount */
    requestedAmount?: (number|Long|null);

    /** OrderConfirmation ratingSignatures */
    ratingSignatures?: (IRatingSignature[]|null);
}

/** Represents an OrderConfirmation. */
export class OrderConfirmation implements IOrderConfirmation {

    /**
     * Constructs a new OrderConfirmation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderConfirmation);

    /** OrderConfirmation orderID. */
    public orderID: string;

    /** OrderConfirmation timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderConfirmation paymentAddress. */
    public paymentAddress: string;

    /** OrderConfirmation requestedAmount. */
    public requestedAmount: (number|Long);

    /** OrderConfirmation ratingSignatures. */
    public ratingSignatures: IRatingSignature[];

    /**
     * Creates a new OrderConfirmation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderConfirmation instance
     */
    public static create(properties?: IOrderConfirmation): OrderConfirmation;

    /**
     * Encodes the specified OrderConfirmation message. Does not implicitly {@link OrderConfirmation.verify|verify} messages.
     * @param message OrderConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderConfirmation message, length delimited. Does not implicitly {@link OrderConfirmation.verify|verify} messages.
     * @param message OrderConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderConfirmation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderConfirmation;

    /**
     * Decodes an OrderConfirmation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderConfirmation;

    /**
     * Verifies an OrderConfirmation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderConfirmation
     */
    public static fromObject(object: { [k: string]: any }): OrderConfirmation;

    /**
     * Creates a plain object from an OrderConfirmation message. Also converts values to other types if specified.
     * @param message OrderConfirmation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderConfirmation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderReject. */
export interface IOrderReject {

    /** OrderReject orderID */
    orderID?: (string|null);

    /** OrderReject timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderReject sigs */
    sigs?: (IBitcoinSignature[]|null);
}

/** Represents an OrderReject. */
export class OrderReject implements IOrderReject {

    /**
     * Constructs a new OrderReject.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderReject);

    /** OrderReject orderID. */
    public orderID: string;

    /** OrderReject timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderReject sigs. */
    public sigs: IBitcoinSignature[];

    /**
     * Creates a new OrderReject instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderReject instance
     */
    public static create(properties?: IOrderReject): OrderReject;

    /**
     * Encodes the specified OrderReject message. Does not implicitly {@link OrderReject.verify|verify} messages.
     * @param message OrderReject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderReject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderReject message, length delimited. Does not implicitly {@link OrderReject.verify|verify} messages.
     * @param message OrderReject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderReject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderReject message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderReject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderReject;

    /**
     * Decodes an OrderReject message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderReject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderReject;

    /**
     * Verifies an OrderReject message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderReject message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderReject
     */
    public static fromObject(object: { [k: string]: any }): OrderReject;

    /**
     * Creates a plain object from an OrderReject message. Also converts values to other types if specified.
     * @param message OrderReject
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderReject, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderReject to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RatingSignature. */
export interface IRatingSignature {

    /** RatingSignature metadata */
    metadata?: (RatingSignature.ITransactionMetadata|null);

    /** RatingSignature signature */
    signature?: (Uint8Array|null);
}

/** Represents a RatingSignature. */
export class RatingSignature implements IRatingSignature {

    /**
     * Constructs a new RatingSignature.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRatingSignature);

    /** RatingSignature metadata. */
    public metadata?: (RatingSignature.ITransactionMetadata|null);

    /** RatingSignature signature. */
    public signature: Uint8Array;

    /**
     * Creates a new RatingSignature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RatingSignature instance
     */
    public static create(properties?: IRatingSignature): RatingSignature;

    /**
     * Encodes the specified RatingSignature message. Does not implicitly {@link RatingSignature.verify|verify} messages.
     * @param message RatingSignature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRatingSignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RatingSignature message, length delimited. Does not implicitly {@link RatingSignature.verify|verify} messages.
     * @param message RatingSignature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRatingSignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RatingSignature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RatingSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RatingSignature;

    /**
     * Decodes a RatingSignature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RatingSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RatingSignature;

    /**
     * Verifies a RatingSignature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RatingSignature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RatingSignature
     */
    public static fromObject(object: { [k: string]: any }): RatingSignature;

    /**
     * Creates a plain object from a RatingSignature message. Also converts values to other types if specified.
     * @param message RatingSignature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RatingSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RatingSignature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace RatingSignature {

    /** Properties of a TransactionMetadata. */
    interface ITransactionMetadata {

        /** TransactionMetadata listingSlug */
        listingSlug?: (string|null);

        /** TransactionMetadata ratingKey */
        ratingKey?: (Uint8Array|null);

        /** TransactionMetadata moderatorKey */
        moderatorKey?: (Uint8Array|null);

        /** TransactionMetadata listingTitle */
        listingTitle?: (string|null);

        /** TransactionMetadata thumbnail */
        thumbnail?: (IImage|null);
    }

    /** Represents a TransactionMetadata. */
    class TransactionMetadata implements ITransactionMetadata {

        /**
         * Constructs a new TransactionMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: RatingSignature.ITransactionMetadata);

        /** TransactionMetadata listingSlug. */
        public listingSlug: string;

        /** TransactionMetadata ratingKey. */
        public ratingKey: Uint8Array;

        /** TransactionMetadata moderatorKey. */
        public moderatorKey: Uint8Array;

        /** TransactionMetadata listingTitle. */
        public listingTitle: string;

        /** TransactionMetadata thumbnail. */
        public thumbnail?: (IImage|null);

        /**
         * Creates a new TransactionMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionMetadata instance
         */
        public static create(properties?: RatingSignature.ITransactionMetadata): RatingSignature.TransactionMetadata;

        /**
         * Encodes the specified TransactionMetadata message. Does not implicitly {@link RatingSignature.TransactionMetadata.verify|verify} messages.
         * @param message TransactionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RatingSignature.ITransactionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionMetadata message, length delimited. Does not implicitly {@link RatingSignature.TransactionMetadata.verify|verify} messages.
         * @param message TransactionMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RatingSignature.ITransactionMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RatingSignature.TransactionMetadata;

        /**
         * Decodes a TransactionMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RatingSignature.TransactionMetadata;

        /**
         * Verifies a TransactionMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionMetadata
         */
        public static fromObject(object: { [k: string]: any }): RatingSignature.TransactionMetadata;

        /**
         * Creates a plain object from a TransactionMetadata message. Also converts values to other types if specified.
         * @param message TransactionMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RatingSignature.TransactionMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a BitcoinSignature. */
export interface IBitcoinSignature {

    /** BitcoinSignature inputIndex */
    inputIndex?: (number|null);

    /** BitcoinSignature signature */
    signature?: (Uint8Array|null);
}

/** Represents a BitcoinSignature. */
export class BitcoinSignature implements IBitcoinSignature {

    /**
     * Constructs a new BitcoinSignature.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBitcoinSignature);

    /** BitcoinSignature inputIndex. */
    public inputIndex: number;

    /** BitcoinSignature signature. */
    public signature: Uint8Array;

    /**
     * Creates a new BitcoinSignature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BitcoinSignature instance
     */
    public static create(properties?: IBitcoinSignature): BitcoinSignature;

    /**
     * Encodes the specified BitcoinSignature message. Does not implicitly {@link BitcoinSignature.verify|verify} messages.
     * @param message BitcoinSignature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBitcoinSignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BitcoinSignature message, length delimited. Does not implicitly {@link BitcoinSignature.verify|verify} messages.
     * @param message BitcoinSignature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBitcoinSignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BitcoinSignature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BitcoinSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BitcoinSignature;

    /**
     * Decodes a BitcoinSignature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BitcoinSignature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BitcoinSignature;

    /**
     * Verifies a BitcoinSignature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BitcoinSignature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BitcoinSignature
     */
    public static fromObject(object: { [k: string]: any }): BitcoinSignature;

    /**
     * Creates a plain object from a BitcoinSignature message. Also converts values to other types if specified.
     * @param message BitcoinSignature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BitcoinSignature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BitcoinSignature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OrderFulfillment. */
export interface IOrderFulfillment {

    /** OrderFulfillment orderId */
    orderId?: (string|null);

    /** OrderFulfillment slug */
    slug?: (string|null);

    /** OrderFulfillment timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderFulfillment physicalDelivery */
    physicalDelivery?: (OrderFulfillment.IPhysicalDelivery[]|null);

    /** OrderFulfillment digitalDelivery */
    digitalDelivery?: (OrderFulfillment.IDigitalDelivery[]|null);

    /** OrderFulfillment payout */
    payout?: (OrderFulfillment.IPayout|null);

    /** OrderFulfillment ratingSignature */
    ratingSignature?: (IRatingSignature|null);

    /** OrderFulfillment note */
    note?: (string|null);

    /** OrderFulfillment cryptocurrencyDelivery */
    cryptocurrencyDelivery?: (OrderFulfillment.ICryptocurrencyDelivery[]|null);
}

/** Represents an OrderFulfillment. */
export class OrderFulfillment implements IOrderFulfillment {

    /**
     * Constructs a new OrderFulfillment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderFulfillment);

    /** OrderFulfillment orderId. */
    public orderId: string;

    /** OrderFulfillment slug. */
    public slug: string;

    /** OrderFulfillment timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderFulfillment physicalDelivery. */
    public physicalDelivery: OrderFulfillment.IPhysicalDelivery[];

    /** OrderFulfillment digitalDelivery. */
    public digitalDelivery: OrderFulfillment.IDigitalDelivery[];

    /** OrderFulfillment payout. */
    public payout?: (OrderFulfillment.IPayout|null);

    /** OrderFulfillment ratingSignature. */
    public ratingSignature?: (IRatingSignature|null);

    /** OrderFulfillment note. */
    public note: string;

    /** OrderFulfillment cryptocurrencyDelivery. */
    public cryptocurrencyDelivery: OrderFulfillment.ICryptocurrencyDelivery[];

    /**
     * Creates a new OrderFulfillment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderFulfillment instance
     */
    public static create(properties?: IOrderFulfillment): OrderFulfillment;

    /**
     * Encodes the specified OrderFulfillment message. Does not implicitly {@link OrderFulfillment.verify|verify} messages.
     * @param message OrderFulfillment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderFulfillment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderFulfillment message, length delimited. Does not implicitly {@link OrderFulfillment.verify|verify} messages.
     * @param message OrderFulfillment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderFulfillment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderFulfillment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderFulfillment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderFulfillment;

    /**
     * Decodes an OrderFulfillment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderFulfillment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderFulfillment;

    /**
     * Verifies an OrderFulfillment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderFulfillment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderFulfillment
     */
    public static fromObject(object: { [k: string]: any }): OrderFulfillment;

    /**
     * Creates a plain object from an OrderFulfillment message. Also converts values to other types if specified.
     * @param message OrderFulfillment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderFulfillment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderFulfillment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace OrderFulfillment {

    /** Properties of a PhysicalDelivery. */
    interface IPhysicalDelivery {

        /** PhysicalDelivery shipper */
        shipper?: (string|null);

        /** PhysicalDelivery trackingNumber */
        trackingNumber?: (string|null);
    }

    /** Represents a PhysicalDelivery. */
    class PhysicalDelivery implements IPhysicalDelivery {

        /**
         * Constructs a new PhysicalDelivery.
         * @param [properties] Properties to set
         */
        constructor(properties?: OrderFulfillment.IPhysicalDelivery);

        /** PhysicalDelivery shipper. */
        public shipper: string;

        /** PhysicalDelivery trackingNumber. */
        public trackingNumber: string;

        /**
         * Creates a new PhysicalDelivery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhysicalDelivery instance
         */
        public static create(properties?: OrderFulfillment.IPhysicalDelivery): OrderFulfillment.PhysicalDelivery;

        /**
         * Encodes the specified PhysicalDelivery message. Does not implicitly {@link OrderFulfillment.PhysicalDelivery.verify|verify} messages.
         * @param message PhysicalDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OrderFulfillment.IPhysicalDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhysicalDelivery message, length delimited. Does not implicitly {@link OrderFulfillment.PhysicalDelivery.verify|verify} messages.
         * @param message PhysicalDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OrderFulfillment.IPhysicalDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhysicalDelivery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhysicalDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderFulfillment.PhysicalDelivery;

        /**
         * Decodes a PhysicalDelivery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhysicalDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderFulfillment.PhysicalDelivery;

        /**
         * Verifies a PhysicalDelivery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PhysicalDelivery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhysicalDelivery
         */
        public static fromObject(object: { [k: string]: any }): OrderFulfillment.PhysicalDelivery;

        /**
         * Creates a plain object from a PhysicalDelivery message. Also converts values to other types if specified.
         * @param message PhysicalDelivery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OrderFulfillment.PhysicalDelivery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhysicalDelivery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DigitalDelivery. */
    interface IDigitalDelivery {

        /** DigitalDelivery url */
        url?: (string|null);

        /** DigitalDelivery password */
        password?: (string|null);
    }

    /** Represents a DigitalDelivery. */
    class DigitalDelivery implements IDigitalDelivery {

        /**
         * Constructs a new DigitalDelivery.
         * @param [properties] Properties to set
         */
        constructor(properties?: OrderFulfillment.IDigitalDelivery);

        /** DigitalDelivery url. */
        public url: string;

        /** DigitalDelivery password. */
        public password: string;

        /**
         * Creates a new DigitalDelivery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DigitalDelivery instance
         */
        public static create(properties?: OrderFulfillment.IDigitalDelivery): OrderFulfillment.DigitalDelivery;

        /**
         * Encodes the specified DigitalDelivery message. Does not implicitly {@link OrderFulfillment.DigitalDelivery.verify|verify} messages.
         * @param message DigitalDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OrderFulfillment.IDigitalDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DigitalDelivery message, length delimited. Does not implicitly {@link OrderFulfillment.DigitalDelivery.verify|verify} messages.
         * @param message DigitalDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OrderFulfillment.IDigitalDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DigitalDelivery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DigitalDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderFulfillment.DigitalDelivery;

        /**
         * Decodes a DigitalDelivery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DigitalDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderFulfillment.DigitalDelivery;

        /**
         * Verifies a DigitalDelivery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DigitalDelivery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DigitalDelivery
         */
        public static fromObject(object: { [k: string]: any }): OrderFulfillment.DigitalDelivery;

        /**
         * Creates a plain object from a DigitalDelivery message. Also converts values to other types if specified.
         * @param message DigitalDelivery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OrderFulfillment.DigitalDelivery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DigitalDelivery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CryptocurrencyDelivery. */
    interface ICryptocurrencyDelivery {

        /** CryptocurrencyDelivery transactionID */
        transactionID?: (string|null);
    }

    /** Represents a CryptocurrencyDelivery. */
    class CryptocurrencyDelivery implements ICryptocurrencyDelivery {

        /**
         * Constructs a new CryptocurrencyDelivery.
         * @param [properties] Properties to set
         */
        constructor(properties?: OrderFulfillment.ICryptocurrencyDelivery);

        /** CryptocurrencyDelivery transactionID. */
        public transactionID: string;

        /**
         * Creates a new CryptocurrencyDelivery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CryptocurrencyDelivery instance
         */
        public static create(properties?: OrderFulfillment.ICryptocurrencyDelivery): OrderFulfillment.CryptocurrencyDelivery;

        /**
         * Encodes the specified CryptocurrencyDelivery message. Does not implicitly {@link OrderFulfillment.CryptocurrencyDelivery.verify|verify} messages.
         * @param message CryptocurrencyDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OrderFulfillment.ICryptocurrencyDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CryptocurrencyDelivery message, length delimited. Does not implicitly {@link OrderFulfillment.CryptocurrencyDelivery.verify|verify} messages.
         * @param message CryptocurrencyDelivery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OrderFulfillment.ICryptocurrencyDelivery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CryptocurrencyDelivery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CryptocurrencyDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderFulfillment.CryptocurrencyDelivery;

        /**
         * Decodes a CryptocurrencyDelivery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CryptocurrencyDelivery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderFulfillment.CryptocurrencyDelivery;

        /**
         * Verifies a CryptocurrencyDelivery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CryptocurrencyDelivery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CryptocurrencyDelivery
         */
        public static fromObject(object: { [k: string]: any }): OrderFulfillment.CryptocurrencyDelivery;

        /**
         * Creates a plain object from a CryptocurrencyDelivery message. Also converts values to other types if specified.
         * @param message CryptocurrencyDelivery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OrderFulfillment.CryptocurrencyDelivery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CryptocurrencyDelivery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Payout. */
    interface IPayout {

        /** Payout sigs */
        sigs?: (IBitcoinSignature[]|null);

        /** Payout payoutAddress */
        payoutAddress?: (string|null);

        /** Payout payoutFeePerByte */
        payoutFeePerByte?: (number|Long|null);
    }

    /** Represents a Payout. */
    class Payout implements IPayout {

        /**
         * Constructs a new Payout.
         * @param [properties] Properties to set
         */
        constructor(properties?: OrderFulfillment.IPayout);

        /** Payout sigs. */
        public sigs: IBitcoinSignature[];

        /** Payout payoutAddress. */
        public payoutAddress: string;

        /** Payout payoutFeePerByte. */
        public payoutFeePerByte: (number|Long);

        /**
         * Creates a new Payout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payout instance
         */
        public static create(properties?: OrderFulfillment.IPayout): OrderFulfillment.Payout;

        /**
         * Encodes the specified Payout message. Does not implicitly {@link OrderFulfillment.Payout.verify|verify} messages.
         * @param message Payout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: OrderFulfillment.IPayout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payout message, length delimited. Does not implicitly {@link OrderFulfillment.Payout.verify|verify} messages.
         * @param message Payout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: OrderFulfillment.IPayout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderFulfillment.Payout;

        /**
         * Decodes a Payout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderFulfillment.Payout;

        /**
         * Verifies a Payout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payout
         */
        public static fromObject(object: { [k: string]: any }): OrderFulfillment.Payout;

        /**
         * Creates a plain object from a Payout message. Also converts values to other types if specified.
         * @param message Payout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: OrderFulfillment.Payout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an OrderCompletion. */
export interface IOrderCompletion {

    /** OrderCompletion orderId */
    orderId?: (string|null);

    /** OrderCompletion timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderCompletion payoutSigs */
    payoutSigs?: (IBitcoinSignature[]|null);

    /** OrderCompletion ratings */
    ratings?: (IRating[]|null);
}

/** Represents an OrderCompletion. */
export class OrderCompletion implements IOrderCompletion {

    /**
     * Constructs a new OrderCompletion.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderCompletion);

    /** OrderCompletion orderId. */
    public orderId: string;

    /** OrderCompletion timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** OrderCompletion payoutSigs. */
    public payoutSigs: IBitcoinSignature[];

    /** OrderCompletion ratings. */
    public ratings: IRating[];

    /**
     * Creates a new OrderCompletion instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderCompletion instance
     */
    public static create(properties?: IOrderCompletion): OrderCompletion;

    /**
     * Encodes the specified OrderCompletion message. Does not implicitly {@link OrderCompletion.verify|verify} messages.
     * @param message OrderCompletion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderCompletion message, length delimited. Does not implicitly {@link OrderCompletion.verify|verify} messages.
     * @param message OrderCompletion message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderCompletion, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderCompletion message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderCompletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderCompletion;

    /**
     * Decodes an OrderCompletion message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderCompletion
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderCompletion;

    /**
     * Verifies an OrderCompletion message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderCompletion message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderCompletion
     */
    public static fromObject(object: { [k: string]: any }): OrderCompletion;

    /**
     * Creates a plain object from an OrderCompletion message. Also converts values to other types if specified.
     * @param message OrderCompletion
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderCompletion, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderCompletion to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Rating. */
export interface IRating {

    /** Rating ratingData */
    ratingData?: (Rating.IRatingData|null);

    /** Rating signature */
    signature?: (Uint8Array|null);
}

/** Represents a Rating. */
export class Rating implements IRating {

    /**
     * Constructs a new Rating.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRating);

    /** Rating ratingData. */
    public ratingData?: (Rating.IRatingData|null);

    /** Rating signature. */
    public signature: Uint8Array;

    /**
     * Creates a new Rating instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Rating instance
     */
    public static create(properties?: IRating): Rating;

    /**
     * Encodes the specified Rating message. Does not implicitly {@link Rating.verify|verify} messages.
     * @param message Rating message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRating, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Rating message, length delimited. Does not implicitly {@link Rating.verify|verify} messages.
     * @param message Rating message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRating, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Rating message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Rating
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Rating;

    /**
     * Decodes a Rating message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Rating
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Rating;

    /**
     * Verifies a Rating message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Rating message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Rating
     */
    public static fromObject(object: { [k: string]: any }): Rating;

    /**
     * Creates a plain object from a Rating message. Also converts values to other types if specified.
     * @param message Rating
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Rating, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Rating to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Rating {

    /** Properties of a RatingData. */
    interface IRatingData {

        /** RatingData ratingKey */
        ratingKey?: (Uint8Array|null);

        /** RatingData vendorID */
        vendorID?: (IID|null);

        /** RatingData vendorSig */
        vendorSig?: (IRatingSignature|null);

        /** RatingData buyerID */
        buyerID?: (IID|null);

        /** RatingData buyerName */
        buyerName?: (string|null);

        /** RatingData buyerSig */
        buyerSig?: (Uint8Array|null);

        /** RatingData moderatorSig */
        moderatorSig?: (Uint8Array|null);

        /** RatingData timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);

        /** RatingData overall */
        overall?: (number|null);

        /** RatingData quality */
        quality?: (number|null);

        /** RatingData description */
        description?: (number|null);

        /** RatingData deliverySpeed */
        deliverySpeed?: (number|null);

        /** RatingData customerService */
        customerService?: (number|null);

        /** RatingData review */
        review?: (string|null);
    }

    /** Represents a RatingData. */
    class RatingData implements IRatingData {

        /**
         * Constructs a new RatingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: Rating.IRatingData);

        /** RatingData ratingKey. */
        public ratingKey: Uint8Array;

        /** RatingData vendorID. */
        public vendorID?: (IID|null);

        /** RatingData vendorSig. */
        public vendorSig?: (IRatingSignature|null);

        /** RatingData buyerID. */
        public buyerID?: (IID|null);

        /** RatingData buyerName. */
        public buyerName: string;

        /** RatingData buyerSig. */
        public buyerSig: Uint8Array;

        /** RatingData moderatorSig. */
        public moderatorSig: Uint8Array;

        /** RatingData timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /** RatingData overall. */
        public overall: number;

        /** RatingData quality. */
        public quality: number;

        /** RatingData description. */
        public description: number;

        /** RatingData deliverySpeed. */
        public deliverySpeed: number;

        /** RatingData customerService. */
        public customerService: number;

        /** RatingData review. */
        public review: string;

        /**
         * Creates a new RatingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RatingData instance
         */
        public static create(properties?: Rating.IRatingData): Rating.RatingData;

        /**
         * Encodes the specified RatingData message. Does not implicitly {@link Rating.RatingData.verify|verify} messages.
         * @param message RatingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Rating.IRatingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RatingData message, length delimited. Does not implicitly {@link Rating.RatingData.verify|verify} messages.
         * @param message RatingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Rating.IRatingData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RatingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RatingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Rating.RatingData;

        /**
         * Decodes a RatingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RatingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Rating.RatingData;

        /**
         * Verifies a RatingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RatingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RatingData
         */
        public static fromObject(object: { [k: string]: any }): Rating.RatingData;

        /**
         * Creates a plain object from a RatingData message. Also converts values to other types if specified.
         * @param message RatingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Rating.RatingData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RatingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Dispute. */
export interface IDispute {

    /** Dispute timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** Dispute claim */
    claim?: (string|null);

    /** Dispute payoutAddress */
    payoutAddress?: (string|null);

    /** Dispute outpoints */
    outpoints?: (IOutpoint[]|null);

    /** Dispute serializedContract */
    serializedContract?: (Uint8Array|null);
}

/** Represents a Dispute. */
export class Dispute implements IDispute {

    /**
     * Constructs a new Dispute.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDispute);

    /** Dispute timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** Dispute claim. */
    public claim: string;

    /** Dispute payoutAddress. */
    public payoutAddress: string;

    /** Dispute outpoints. */
    public outpoints: IOutpoint[];

    /** Dispute serializedContract. */
    public serializedContract: Uint8Array;

    /**
     * Creates a new Dispute instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Dispute instance
     */
    public static create(properties?: IDispute): Dispute;

    /**
     * Encodes the specified Dispute message. Does not implicitly {@link Dispute.verify|verify} messages.
     * @param message Dispute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDispute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Dispute message, length delimited. Does not implicitly {@link Dispute.verify|verify} messages.
     * @param message Dispute message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDispute, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Dispute message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Dispute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Dispute;

    /**
     * Decodes a Dispute message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Dispute
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Dispute;

    /**
     * Verifies a Dispute message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Dispute message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Dispute
     */
    public static fromObject(object: { [k: string]: any }): Dispute;

    /**
     * Creates a plain object from a Dispute message. Also converts values to other types if specified.
     * @param message Dispute
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Dispute, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Dispute to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DisputeResolution. */
export interface IDisputeResolution {

    /** DisputeResolution timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** DisputeResolution orderId */
    orderId?: (string|null);

    /** DisputeResolution proposedBy */
    proposedBy?: (string|null);

    /** DisputeResolution resolution */
    resolution?: (string|null);

    /** DisputeResolution payout */
    payout?: (DisputeResolution.IPayout|null);

    /** DisputeResolution moderatorRatingSigs */
    moderatorRatingSigs?: (Uint8Array[]|null);
}

/** Represents a DisputeResolution. */
export class DisputeResolution implements IDisputeResolution {

    /**
     * Constructs a new DisputeResolution.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisputeResolution);

    /** DisputeResolution timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** DisputeResolution orderId. */
    public orderId: string;

    /** DisputeResolution proposedBy. */
    public proposedBy: string;

    /** DisputeResolution resolution. */
    public resolution: string;

    /** DisputeResolution payout. */
    public payout?: (DisputeResolution.IPayout|null);

    /** DisputeResolution moderatorRatingSigs. */
    public moderatorRatingSigs: Uint8Array[];

    /**
     * Creates a new DisputeResolution instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisputeResolution instance
     */
    public static create(properties?: IDisputeResolution): DisputeResolution;

    /**
     * Encodes the specified DisputeResolution message. Does not implicitly {@link DisputeResolution.verify|verify} messages.
     * @param message DisputeResolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisputeResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisputeResolution message, length delimited. Does not implicitly {@link DisputeResolution.verify|verify} messages.
     * @param message DisputeResolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisputeResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisputeResolution message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisputeResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisputeResolution;

    /**
     * Decodes a DisputeResolution message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisputeResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisputeResolution;

    /**
     * Verifies a DisputeResolution message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisputeResolution message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisputeResolution
     */
    public static fromObject(object: { [k: string]: any }): DisputeResolution;

    /**
     * Creates a plain object from a DisputeResolution message. Also converts values to other types if specified.
     * @param message DisputeResolution
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisputeResolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisputeResolution to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace DisputeResolution {

    /** Properties of a Payout. */
    interface IPayout {

        /** Payout sigs */
        sigs?: (IBitcoinSignature[]|null);

        /** Payout inputs */
        inputs?: (IOutpoint[]|null);

        /** Payout buyerOutput */
        buyerOutput?: (DisputeResolution.Payout.IOutput|null);

        /** Payout vendorOutput */
        vendorOutput?: (DisputeResolution.Payout.IOutput|null);

        /** Payout moderatorOutput */
        moderatorOutput?: (DisputeResolution.Payout.IOutput|null);
    }

    /** Represents a Payout. */
    class Payout implements IPayout {

        /**
         * Constructs a new Payout.
         * @param [properties] Properties to set
         */
        constructor(properties?: DisputeResolution.IPayout);

        /** Payout sigs. */
        public sigs: IBitcoinSignature[];

        /** Payout inputs. */
        public inputs: IOutpoint[];

        /** Payout buyerOutput. */
        public buyerOutput?: (DisputeResolution.Payout.IOutput|null);

        /** Payout vendorOutput. */
        public vendorOutput?: (DisputeResolution.Payout.IOutput|null);

        /** Payout moderatorOutput. */
        public moderatorOutput?: (DisputeResolution.Payout.IOutput|null);

        /**
         * Creates a new Payout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payout instance
         */
        public static create(properties?: DisputeResolution.IPayout): DisputeResolution.Payout;

        /**
         * Encodes the specified Payout message. Does not implicitly {@link DisputeResolution.Payout.verify|verify} messages.
         * @param message Payout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DisputeResolution.IPayout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payout message, length delimited. Does not implicitly {@link DisputeResolution.Payout.verify|verify} messages.
         * @param message Payout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DisputeResolution.IPayout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisputeResolution.Payout;

        /**
         * Decodes a Payout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisputeResolution.Payout;

        /**
         * Verifies a Payout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payout
         */
        public static fromObject(object: { [k: string]: any }): DisputeResolution.Payout;

        /**
         * Creates a plain object from a Payout message. Also converts values to other types if specified.
         * @param message Payout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DisputeResolution.Payout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Payout {

        /** Properties of an Output. */
        interface IOutput {

            /** Output script */
            script?: (string|null);

            /** Output amount */
            amount?: (number|Long|null);
        }

        /** Represents an Output. */
        class Output implements IOutput {

            /**
             * Constructs a new Output.
             * @param [properties] Properties to set
             */
            constructor(properties?: DisputeResolution.Payout.IOutput);

            /** Output script. */
            public script: string;

            /** Output amount. */
            public amount: (number|Long);

            /**
             * Creates a new Output instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Output instance
             */
            public static create(properties?: DisputeResolution.Payout.IOutput): DisputeResolution.Payout.Output;

            /**
             * Encodes the specified Output message. Does not implicitly {@link DisputeResolution.Payout.Output.verify|verify} messages.
             * @param message Output message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: DisputeResolution.Payout.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Output message, length delimited. Does not implicitly {@link DisputeResolution.Payout.Output.verify|verify} messages.
             * @param message Output message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: DisputeResolution.Payout.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Output message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Output
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisputeResolution.Payout.Output;

            /**
             * Decodes an Output message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Output
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisputeResolution.Payout.Output;

            /**
             * Verifies an Output message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Output message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Output
             */
            public static fromObject(object: { [k: string]: any }): DisputeResolution.Payout.Output;

            /**
             * Creates a plain object from an Output message. Also converts values to other types if specified.
             * @param message Output
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: DisputeResolution.Payout.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Output to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a DisputeAcceptance. */
export interface IDisputeAcceptance {

    /** DisputeAcceptance timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** DisputeAcceptance closedBy */
    closedBy?: (string|null);
}

/** Represents a DisputeAcceptance. */
export class DisputeAcceptance implements IDisputeAcceptance {

    /**
     * Constructs a new DisputeAcceptance.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisputeAcceptance);

    /** DisputeAcceptance timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** DisputeAcceptance closedBy. */
    public closedBy: string;

    /**
     * Creates a new DisputeAcceptance instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisputeAcceptance instance
     */
    public static create(properties?: IDisputeAcceptance): DisputeAcceptance;

    /**
     * Encodes the specified DisputeAcceptance message. Does not implicitly {@link DisputeAcceptance.verify|verify} messages.
     * @param message DisputeAcceptance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisputeAcceptance, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisputeAcceptance message, length delimited. Does not implicitly {@link DisputeAcceptance.verify|verify} messages.
     * @param message DisputeAcceptance message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisputeAcceptance, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisputeAcceptance message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisputeAcceptance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisputeAcceptance;

    /**
     * Decodes a DisputeAcceptance message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisputeAcceptance
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisputeAcceptance;

    /**
     * Verifies a DisputeAcceptance message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisputeAcceptance message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisputeAcceptance
     */
    public static fromObject(object: { [k: string]: any }): DisputeAcceptance;

    /**
     * Creates a plain object from a DisputeAcceptance message. Also converts values to other types if specified.
     * @param message DisputeAcceptance
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisputeAcceptance, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisputeAcceptance to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Outpoint. */
export interface IOutpoint {

    /** Outpoint hash */
    hash?: (string|null);

    /** Outpoint index */
    index?: (number|null);

    /** Outpoint value */
    value?: (number|Long|null);
}

/** Represents an Outpoint. */
export class Outpoint implements IOutpoint {

    /**
     * Constructs a new Outpoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOutpoint);

    /** Outpoint hash. */
    public hash: string;

    /** Outpoint index. */
    public index: number;

    /** Outpoint value. */
    public value: (number|Long);

    /**
     * Creates a new Outpoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Outpoint instance
     */
    public static create(properties?: IOutpoint): Outpoint;

    /**
     * Encodes the specified Outpoint message. Does not implicitly {@link Outpoint.verify|verify} messages.
     * @param message Outpoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOutpoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Outpoint message, length delimited. Does not implicitly {@link Outpoint.verify|verify} messages.
     * @param message Outpoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOutpoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Outpoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Outpoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Outpoint;

    /**
     * Decodes an Outpoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Outpoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Outpoint;

    /**
     * Verifies an Outpoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Outpoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Outpoint
     */
    public static fromObject(object: { [k: string]: any }): Outpoint;

    /**
     * Creates a plain object from an Outpoint message. Also converts values to other types if specified.
     * @param message Outpoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Outpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Outpoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Refund. */
export interface IRefund {

    /** Refund orderID */
    orderID?: (string|null);

    /** Refund timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** Refund sigs */
    sigs?: (IBitcoinSignature[]|null);

    /** Refund refundTransaction */
    refundTransaction?: (Refund.ITransactionInfo|null);

    /** Refund memo */
    memo?: (string|null);
}

/** Represents a Refund. */
export class Refund implements IRefund {

    /**
     * Constructs a new Refund.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRefund);

    /** Refund orderID. */
    public orderID: string;

    /** Refund timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** Refund sigs. */
    public sigs: IBitcoinSignature[];

    /** Refund refundTransaction. */
    public refundTransaction?: (Refund.ITransactionInfo|null);

    /** Refund memo. */
    public memo: string;

    /**
     * Creates a new Refund instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Refund instance
     */
    public static create(properties?: IRefund): Refund;

    /**
     * Encodes the specified Refund message. Does not implicitly {@link Refund.verify|verify} messages.
     * @param message Refund message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRefund, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Refund message, length delimited. Does not implicitly {@link Refund.verify|verify} messages.
     * @param message Refund message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRefund, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Refund message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Refund
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Refund;

    /**
     * Decodes a Refund message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Refund
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Refund;

    /**
     * Verifies a Refund message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Refund message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Refund
     */
    public static fromObject(object: { [k: string]: any }): Refund;

    /**
     * Creates a plain object from a Refund message. Also converts values to other types if specified.
     * @param message Refund
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Refund, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Refund to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Refund {

    /** Properties of a TransactionInfo. */
    interface ITransactionInfo {

        /** TransactionInfo txid */
        txid?: (string|null);

        /** TransactionInfo value */
        value?: (number|Long|null);
    }

    /** Represents a TransactionInfo. */
    class TransactionInfo implements ITransactionInfo {

        /**
         * Constructs a new TransactionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Refund.ITransactionInfo);

        /** TransactionInfo txid. */
        public txid: string;

        /** TransactionInfo value. */
        public value: (number|Long);

        /**
         * Creates a new TransactionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionInfo instance
         */
        public static create(properties?: Refund.ITransactionInfo): Refund.TransactionInfo;

        /**
         * Encodes the specified TransactionInfo message. Does not implicitly {@link Refund.TransactionInfo.verify|verify} messages.
         * @param message TransactionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Refund.ITransactionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionInfo message, length delimited. Does not implicitly {@link Refund.TransactionInfo.verify|verify} messages.
         * @param message TransactionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Refund.ITransactionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Refund.TransactionInfo;

        /**
         * Decodes a TransactionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Refund.TransactionInfo;

        /**
         * Verifies a TransactionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionInfo
         */
        public static fromObject(object: { [k: string]: any }): Refund.TransactionInfo;

        /**
         * Creates a plain object from a TransactionInfo message. Also converts values to other types if specified.
         * @param message TransactionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Refund.TransactionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ID. */
export interface IID {

    /** ID peerID */
    peerID?: (string|null);

    /** ID handle */
    handle?: (string|null);

    /** ID pubkeys */
    pubkeys?: (ID.IPubkeys|null);

    /** ID bitcoinSig */
    bitcoinSig?: (Uint8Array|null);
}

/** Represents a ID. */
export class ID implements IID {

    /**
     * Constructs a new ID.
     * @param [properties] Properties to set
     */
    constructor(properties?: IID);

    /** ID peerID. */
    public peerID: string;

    /** ID handle. */
    public handle: string;

    /** ID pubkeys. */
    public pubkeys?: (ID.IPubkeys|null);

    /** ID bitcoinSig. */
    public bitcoinSig: Uint8Array;

    /**
     * Creates a new ID instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ID instance
     */
    public static create(properties?: IID): ID;

    /**
     * Encodes the specified ID message. Does not implicitly {@link ID.verify|verify} messages.
     * @param message ID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ID message, length delimited. Does not implicitly {@link ID.verify|verify} messages.
     * @param message ID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ID message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ID;

    /**
     * Decodes a ID message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ID;

    /**
     * Verifies a ID message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ID message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ID
     */
    public static fromObject(object: { [k: string]: any }): ID;

    /**
     * Creates a plain object from a ID message. Also converts values to other types if specified.
     * @param message ID
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ID, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ID to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ID {

    /** Properties of a Pubkeys. */
    interface IPubkeys {

        /** Pubkeys identity */
        identity?: (Uint8Array|null);

        /** Pubkeys bitcoin */
        bitcoin?: (Uint8Array|null);
    }

    /** Represents a Pubkeys. */
    class Pubkeys implements IPubkeys {

        /**
         * Constructs a new Pubkeys.
         * @param [properties] Properties to set
         */
        constructor(properties?: ID.IPubkeys);

        /** Pubkeys identity. */
        public identity: Uint8Array;

        /** Pubkeys bitcoin. */
        public bitcoin: Uint8Array;

        /**
         * Creates a new Pubkeys instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pubkeys instance
         */
        public static create(properties?: ID.IPubkeys): ID.Pubkeys;

        /**
         * Encodes the specified Pubkeys message. Does not implicitly {@link ID.Pubkeys.verify|verify} messages.
         * @param message Pubkeys message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ID.IPubkeys, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pubkeys message, length delimited. Does not implicitly {@link ID.Pubkeys.verify|verify} messages.
         * @param message Pubkeys message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ID.IPubkeys, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pubkeys message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pubkeys
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ID.Pubkeys;

        /**
         * Decodes a Pubkeys message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pubkeys
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ID.Pubkeys;

        /**
         * Verifies a Pubkeys message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pubkeys message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pubkeys
         */
        public static fromObject(object: { [k: string]: any }): ID.Pubkeys;

        /**
         * Creates a plain object from a Pubkeys message. Also converts values to other types if specified.
         * @param message Pubkeys
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ID.Pubkeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pubkeys to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Signature. */
export interface ISignature {

    /** Signature section */
    section?: (Signature.Section|null);

    /** Signature signatureBytes */
    signatureBytes?: (Uint8Array|null);
}

/** Represents a Signature. */
export class Signature implements ISignature {

    /**
     * Constructs a new Signature.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignature);

    /** Signature section. */
    public section: Signature.Section;

    /** Signature signatureBytes. */
    public signatureBytes: Uint8Array;

    /**
     * Creates a new Signature instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Signature instance
     */
    public static create(properties?: ISignature): Signature;

    /**
     * Encodes the specified Signature message. Does not implicitly {@link Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Signature message, length delimited. Does not implicitly {@link Signature.verify|verify} messages.
     * @param message Signature message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Signature message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Signature;

    /**
     * Decodes a Signature message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Signature
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Signature;

    /**
     * Verifies a Signature message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Signature message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Signature
     */
    public static fromObject(object: { [k: string]: any }): Signature;

    /**
     * Creates a plain object from a Signature message. Also converts values to other types if specified.
     * @param message Signature
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Signature to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Signature {

    /** Section enum. */
    enum Section {
        LISTING = 0,
        ORDER = 1,
        ORDER_CONFIRMATION = 2,
        ORDER_FULFILLMENT = 3,
        ORDER_COMPLETION = 4,
        DISPUTE = 5,
        DISPUTE_RESOLUTION = 6,
        REFUND = 7
    }
}

/** Properties of a SignedListing. */
export interface ISignedListing {

    /** SignedListing listing */
    listing?: (IListing|null);

    /** SignedListing hash */
    hash?: (string|null);

    /** SignedListing signature */
    signature?: (Uint8Array|null);
}

/** Represents a SignedListing. */
export class SignedListing implements ISignedListing {

    /**
     * Constructs a new SignedListing.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignedListing);

    /** SignedListing listing. */
    public listing?: (IListing|null);

    /** SignedListing hash. */
    public hash: string;

    /** SignedListing signature. */
    public signature: Uint8Array;

    /**
     * Creates a new SignedListing instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignedListing instance
     */
    public static create(properties?: ISignedListing): SignedListing;

    /**
     * Encodes the specified SignedListing message. Does not implicitly {@link SignedListing.verify|verify} messages.
     * @param message SignedListing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignedListing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SignedListing message, length delimited. Does not implicitly {@link SignedListing.verify|verify} messages.
     * @param message SignedListing message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignedListing, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignedListing message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignedListing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignedListing;

    /**
     * Decodes a SignedListing message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SignedListing
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignedListing;

    /**
     * Verifies a SignedListing message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SignedListing message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SignedListing
     */
    public static fromObject(object: { [k: string]: any }): SignedListing;

    /**
     * Creates a plain object from a SignedListing message. Also converts values to other types if specified.
     * @param message SignedListing
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SignedListing, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SignedListing to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** CountryCode enum. */
export enum CountryCode {
    NA = 0,
    AFGHANISTAN = 1,
    ALAND_ISLANDS = 2,
    ALBANIA = 3,
    ALGERIA = 4,
    AMERICAN_SAMOA = 5,
    ANDORRA = 6,
    ANGOLA = 7,
    ANGUILLA = 8,
    ANTIGUA = 9,
    ARGENTINA = 10,
    ARMENIA = 11,
    ARUBA = 12,
    AUSTRALIA = 13,
    AUSTRIA = 14,
    AZERBAIJAN = 15,
    BAHAMAS = 16,
    BAHRAIN = 17,
    BANGLADESH = 18,
    BARBADOS = 19,
    BELARUS = 20,
    BELGIUM = 21,
    BELIZE = 22,
    BENIN = 23,
    BERMUDA = 24,
    BHUTAN = 25,
    BOLIVIA = 26,
    BONAIRE_SINT_EUSTATIUS_SABA = 27,
    BOSNIA = 28,
    BOTSWANA = 29,
    BOUVET_ISLAND = 30,
    BRAZIL = 31,
    BRITISH_INDIAN_OCEAN_TERRITORY = 32,
    BRUNEI_DARUSSALAM = 33,
    BULGARIA = 34,
    BURKINA_FASO = 35,
    BURUNDI = 36,
    CABO_VERDE = 37,
    CAMBODIA = 38,
    CAMEROON = 39,
    CANADA = 40,
    CAYMAN_ISLANDS = 41,
    CENTRAL_AFRICAN_REPUBLIC = 42,
    CHAD = 43,
    CHILE = 44,
    CHINA = 45,
    CHRISTMAS_ISLAND = 46,
    COCOS_ISLANDS = 47,
    COLOMBIA = 48,
    COMOROS = 49,
    CONGO_REPUBLIC = 50,
    CONGO = 51,
    COOK_ISLANDS = 52,
    COSTA_RICA = 53,
    COTE_DIVOIRE = 54,
    CROATIA = 55,
    CUBA = 56,
    CURACAO = 57,
    CYPRUS = 58,
    CZECH_REPUBLIC = 59,
    DENMARK = 60,
    DJIBOUTI = 61,
    DOMINICA = 62,
    DOMINICAN_REPUBLIC = 63,
    ECUADOR = 64,
    EGYPT = 65,
    EL_SALVADOR = 66,
    EQUATORIAL_GUINEA = 67,
    ERITREA = 68,
    ESTONIA = 69,
    ETHIOPIA = 70,
    FALKLAND_ISLANDS = 71,
    FAROE_ISLANDS = 72,
    FIJI = 73,
    FINLAND = 74,
    FRANCE = 75,
    FRENCH_GUIANA = 76,
    FRENCH_POLYNESIA = 77,
    FRENCH_SOUTHERN_TERRITORIES = 78,
    GABON = 79,
    GAMBIA = 80,
    GEORGIA = 81,
    GERMANY = 82,
    GHANA = 83,
    GIBRALTAR = 84,
    GREECE = 85,
    GREENLAND = 86,
    GRENADA = 87,
    GUADELOUPE = 88,
    GUAM = 89,
    GUATEMALA = 90,
    GUERNSEY = 91,
    GUINEA = 92,
    GUINEA_BISSAU = 93,
    GUYANA = 94,
    HAITI = 95,
    HEARD_ISLAND = 96,
    HOLY_SEE = 97,
    HONDURAS = 98,
    HONG_KONG = 99,
    HUNGARY = 100,
    ICELAND = 101,
    INDIA = 102,
    INDONESIA = 103,
    IRAN = 104,
    IRAQ = 105,
    IRELAND = 106,
    ISLE_OF_MAN = 107,
    ISRAEL = 108,
    ITALY = 109,
    JAMAICA = 110,
    JAPAN = 111,
    JERSEY = 112,
    JORDAN = 113,
    KAZAKHSTAN = 114,
    KENYA = 115,
    KIRIBATI = 116,
    NORTH_KOREA = 117,
    SOUTH_KOREA = 118,
    KUWAIT = 119,
    KYRGYZSTAN = 120,
    LAO = 121,
    LATVIA = 122,
    LEBANON = 123,
    LESOTHO = 124,
    LIBERIA = 125,
    LIBYA = 126,
    LIECHTENSTEIN = 127,
    LITHUANIA = 128,
    LUXEMBOURG = 129,
    MACAO = 130,
    MACEDONIA = 131,
    MADAGASCAR = 132,
    MALAWI = 133,
    MALAYSIA = 134,
    MALDIVES = 135,
    MALI = 136,
    MALTA = 137,
    MARSHALL_ISLANDS = 138,
    MARTINIQUE = 139,
    MAURITANIA = 140,
    MAURITIUS = 141,
    MAYOTTE = 142,
    MEXICO = 143,
    MICRONESIA = 144,
    MOLDOVA = 145,
    MONACO = 146,
    MONGOLIA = 147,
    MONTENEGRO = 148,
    MONTSERRAT = 149,
    MOROCCO = 150,
    MOZAMBIQUE = 151,
    MYANMAR = 152,
    NAMIBIA = 153,
    NAURU = 154,
    NEPAL = 155,
    NETHERLANDS = 156,
    NEW_CALEDONIA = 157,
    NEW_ZEALAND = 158,
    NICARAGUA = 159,
    NIGER = 160,
    NIGERIA = 161,
    NIUE = 162,
    NORFOLK_ISLAND = 163,
    NORTHERN_MARIANA_ISLANDS = 164,
    NORWAY = 165,
    OMAN = 166,
    PAKISTAN = 167,
    PALAU = 168,
    PANAMA = 169,
    PAPUA_NEW_GUINEA = 170,
    PARAGUAY = 171,
    PERU = 172,
    PHILIPPINES = 173,
    PITCAIRN = 174,
    POLAND = 175,
    PORTUGAL = 176,
    PUERTO_RICO = 177,
    QATAR = 178,
    REUNION = 179,
    ROMANIA = 180,
    RUSSIA = 181,
    RWANDA = 182,
    SAINT_BARTHELEMY = 183,
    SAINT_HELENA = 184,
    SAINT_KITTS = 185,
    SAINT_LUCIA = 186,
    SAINT_MARTIN = 187,
    SAINT_PIERRE = 188,
    SAINT_VINCENT = 189,
    SAMOA = 190,
    SAN_MARINO = 191,
    SAO_TOME = 192,
    SAUDI_ARABIA = 193,
    SENEGAL = 194,
    SERBIA = 195,
    SEYCHELLES = 196,
    SIERRA_LEONE = 197,
    SINGAPORE = 198,
    SINT_MAARTEN = 199,
    SUCRE = 200,
    SLOVAKIA = 201,
    SLOVENIA = 202,
    SOLOMON_ISLANDS = 203,
    SOMALIA = 204,
    SOUTH_AFRICA = 205,
    SOUTH_SUDAN = 206,
    SPAIN = 207,
    SRI_LANKA = 208,
    SUDAN = 209,
    SURINAME = 210,
    SVALBARD = 211,
    SWAZILAND = 212,
    SWEDEN = 213,
    SWITZERLAND = 214,
    SYRIAN_ARAB_REPUBLIC = 215,
    TAIWAN = 216,
    TAJIKISTAN = 217,
    TANZANIA = 218,
    THAILAND = 219,
    TIMOR_LESTE = 220,
    TOGO = 221,
    TOKELAU = 222,
    TONGA = 223,
    TRINIDAD = 224,
    TUNISIA = 225,
    TURKEY = 226,
    TURKMENISTAN = 227,
    TURKS_AND_CAICOS_ISLANDS = 228,
    TUVALU = 229,
    UGANDA = 230,
    UKRAINE = 231,
    UNITED_ARAB_EMIRATES = 232,
    UNITED_KINGDOM = 233,
    UNITED_STATES = 234,
    URUGUAY = 235,
    UZBEKISTAN = 236,
    VANUATU = 237,
    VENEZUELA = 238,
    VIETNAM = 239,
    VIRGIN_ISLANDS_BRITISH = 240,
    VIRGIN_ISLANDS_US = 241,
    WALLIS_AND_FUTUNA = 242,
    WESTERN_SAHARA = 243,
    YEMEN = 244,
    ZAMBIA = 245,
    ZIMBABWE = 246,
    ALL = 500,
    AFRICA = 501,
    ASIA = 502,
    CENTRAL_AMERICA = 503,
    EUROPE = 504,
    MIDDLE_EAST = 505,
    NORTH_AMERICA = 506,
    SOUTH_AMERICA = 507,
    OCEANIA = 508
}

/** Properties of an Image. */
export interface IImage {

    /** Image tiny */
    tiny?: (string|null);

    /** Image resource at smallest size, given by CIDv1 hash */
    small?: (string|null);

    /** The CIDv1 hash of the image resource with double the dimensions of tiny version. */
    medium?: (string|null);

    /** Double the size of small image */
    large?: (string|null);
}

/** Represents an Image. */
export class Image implements IImage {

    /**
     * Constructs a new Image.
     * @param [properties] Properties to set
     */
    constructor(properties?: IImage);

    /** Image tiny. */
    public tiny: string;

    /** Image resource at smallest size, given by CIDv1 hash */
    public small: string;

    /** The CIDv1 hash of the image resource with double the dimensions of tiny version. */
    public medium: string;

    /** Double the size of small image */
    public large: string;

    /**
     * Creates a new Image instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Image instance
     */
    public static create(properties?: IImage): Image;

    /**
     * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
     * @param message Image message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Image message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Image;

    /**
     * Decodes an Image message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Image
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Image;

    /**
     * Verifies an Image message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Image message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Image
     */
    public static fromObject(object: { [k: string]: any }): Image;

    /**
     * Creates a plain object from an Image message. Also converts values to other types if specified.
     * @param message Image
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Image to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message messageType */
    messageType?: (Message.MessageType|null);

    /** Message payload */
    payload?: (google.protobuf.IAny|null);

    /** Message requestId */
    requestId?: (number|null);

    /** Message isResponse */
    isResponse?: (boolean|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message messageType. */
    public messageType: Message.MessageType;

    /** Message payload. */
    public payload?: (google.protobuf.IAny|null);

    /** Message requestId. */
    public requestId: number;

    /** Message isResponse. */
    public isResponse: boolean;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {

    /** MessageType enum. */
    enum MessageType {
        PING = 0,
        CHAT = 1,
        FOLLOW = 2,
        UNFOLLOW = 3,
        ORDER = 4,
        ORDER_REJECT = 5,
        ORDER_CANCEL = 6,
        ORDER_CONFIRMATION = 7,
        ORDER_FULFILLMENT = 8,
        ORDER_COMPLETION = 9,
        DISPUTE_OPEN = 10,
        DISPUTE_UPDATE = 11,
        DISPUTE_CLOSE = 12,
        REFUND = 13,
        OFFLINE_ACK = 14,
        OFFLINE_RELAY = 15,
        MODERATOR_ADD = 16,
        MODERATOR_REMOVE = 17,
        STORE = 18,
        BLOCK = 19,
        ERROR = 500
    }
}

/** Properties of an Envelope. */
export interface IEnvelope {

    /** Envelope message */
    message?: (IMessage|null);

    /** Envelope pubkey */
    pubkey?: (Uint8Array|null);

    /** Envelope signature */
    signature?: (Uint8Array|null);
}

/** Represents an Envelope. */
export class Envelope implements IEnvelope {

    /**
     * Constructs a new Envelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvelope);

    /** Envelope message. */
    public message?: (IMessage|null);

    /** Envelope pubkey. */
    public pubkey: Uint8Array;

    /** Envelope signature. */
    public signature: Uint8Array;

    /**
     * Creates a new Envelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Envelope instance
     */
    public static create(properties?: IEnvelope): Envelope;

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Envelope;

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Envelope;

    /**
     * Verifies an Envelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Envelope
     */
    public static fromObject(object: { [k: string]: any }): Envelope;

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @param message Envelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Envelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Chat. */
export interface IChat {

    /** Chat messageId */
    messageId?: (string|null);

    /** Chat subject */
    subject?: (string|null);

    /** Chat message */
    message?: (string|null);

    /** Chat timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** Chat flag */
    flag?: (Chat.Flag|null);
}

/** Represents a Chat. */
export class Chat implements IChat {

    /**
     * Constructs a new Chat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChat);

    /** Chat messageId. */
    public messageId: string;

    /** Chat subject. */
    public subject: string;

    /** Chat message. */
    public message: string;

    /** Chat timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** Chat flag. */
    public flag: Chat.Flag;

    /**
     * Creates a new Chat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Chat instance
     */
    public static create(properties?: IChat): Chat;

    /**
     * Encodes the specified Chat message. Does not implicitly {@link Chat.verify|verify} messages.
     * @param message Chat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Chat message, length delimited. Does not implicitly {@link Chat.verify|verify} messages.
     * @param message Chat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Chat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Chat;

    /**
     * Decodes a Chat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Chat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Chat;

    /**
     * Verifies a Chat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Chat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Chat
     */
    public static fromObject(object: { [k: string]: any }): Chat;

    /**
     * Creates a plain object from a Chat message. Also converts values to other types if specified.
     * @param message Chat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Chat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Chat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Chat {

    /** Flag enum. */
    enum Flag {
        MESSAGE = 0,
        TYPING = 1,
        READ = 2
    }
}

/** Properties of a SignedData. */
export interface ISignedData {

    /** SignedData senderPubkey */
    senderPubkey?: (Uint8Array|null);

    /** SignedData serializedData */
    serializedData?: (Uint8Array|null);

    /** SignedData signature */
    signature?: (Uint8Array|null);
}

/** Represents a SignedData. */
export class SignedData implements ISignedData {

    /**
     * Constructs a new SignedData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignedData);

    /** SignedData senderPubkey. */
    public senderPubkey: Uint8Array;

    /** SignedData serializedData. */
    public serializedData: Uint8Array;

    /** SignedData signature. */
    public signature: Uint8Array;

    /**
     * Creates a new SignedData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignedData instance
     */
    public static create(properties?: ISignedData): SignedData;

    /**
     * Encodes the specified SignedData message. Does not implicitly {@link SignedData.verify|verify} messages.
     * @param message SignedData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignedData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SignedData message, length delimited. Does not implicitly {@link SignedData.verify|verify} messages.
     * @param message SignedData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignedData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignedData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignedData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignedData;

    /**
     * Decodes a SignedData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SignedData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignedData;

    /**
     * Verifies a SignedData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SignedData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SignedData
     */
    public static fromObject(object: { [k: string]: any }): SignedData;

    /**
     * Creates a plain object from a SignedData message. Also converts values to other types if specified.
     * @param message SignedData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SignedData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SignedData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SignedData {

    /** Properties of a Command. */
    interface ICommand {

        /** Command peerID */
        peerID?: (string|null);

        /** Command type */
        type?: (Message.MessageType|null);

        /** Command timestamp */
        timestamp?: (google.protobuf.ITimestamp|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: SignedData.ICommand);

        /** Command peerID. */
        public peerID: string;

        /** Command type. */
        public type: Message.MessageType;

        /** Command timestamp. */
        public timestamp?: (google.protobuf.ITimestamp|null);

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: SignedData.ICommand): SignedData.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link SignedData.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SignedData.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link SignedData.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SignedData.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignedData.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignedData.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): SignedData.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SignedData.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a CidList. */
export interface ICidList {

    /** CidList cids */
    cids?: (string[]|null);
}

/** Represents a CidList. */
export class CidList implements ICidList {

    /**
     * Constructs a new CidList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICidList);

    /** CidList cids. */
    public cids: string[];

    /**
     * Creates a new CidList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CidList instance
     */
    public static create(properties?: ICidList): CidList;

    /**
     * Encodes the specified CidList message. Does not implicitly {@link CidList.verify|verify} messages.
     * @param message CidList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICidList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CidList message, length delimited. Does not implicitly {@link CidList.verify|verify} messages.
     * @param message CidList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICidList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CidList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CidList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CidList;

    /**
     * Decodes a CidList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CidList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CidList;

    /**
     * Verifies a CidList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CidList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CidList
     */
    public static fromObject(object: { [k: string]: any }): CidList;

    /**
     * Creates a plain object from a CidList message. Also converts values to other types if specified.
     * @param message CidList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CidList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CidList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Block. */
export interface IBlock {

    /** Block rawData */
    rawData?: (Uint8Array|null);

    /** Block cid */
    cid?: (string|null);
}

/** Represents a Block. */
export class Block implements IBlock {

    /**
     * Constructs a new Block.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBlock);

    /** Block rawData. */
    public rawData: Uint8Array;

    /** Block cid. */
    public cid: string;

    /**
     * Creates a new Block instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Block instance
     */
    public static create(properties?: IBlock): Block;

    /**
     * Encodes the specified Block message. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Block message, length delimited. Does not implicitly {@link Block.verify|verify} messages.
     * @param message Block message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Block message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Block;

    /**
     * Decodes a Block message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Block
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Block;

    /**
     * Verifies a Block message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Block message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Block
     */
    public static fromObject(object: { [k: string]: any }): Block;

    /**
     * Creates a plain object from a Block message. Also converts values to other types if specified.
     * @param message Block
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Block, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Block to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Error. */
export interface IError {

    /** Error code */
    code?: (number|null);

    /** Error errorMessage */
    errorMessage?: (string|null);

    /** Error orderID */
    orderID?: (string|null);
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error code. */
    public code: number;

    /** Error errorMessage. */
    public errorMessage: string;

    /** Error orderID. */
    public orderID: string;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a Moderator. */
export interface IModerator {

    /** Moderator description */
    description?: (string|null);

    /** Moderator termsAndConditions */
    termsAndConditions?: (string|null);

    /** Moderator languages */
    languages?: (string[]|null);

    /** Moderator acceptedCurrencies */
    acceptedCurrencies?: (string[]|null);

    /** Moderator fee */
    fee?: (Moderator.IFee|null);
}

/** Represents a Moderator. */
export class Moderator implements IModerator {

    /**
     * Constructs a new Moderator.
     * @param [properties] Properties to set
     */
    constructor(properties?: IModerator);

    /** Moderator description. */
    public description: string;

    /** Moderator termsAndConditions. */
    public termsAndConditions: string;

    /** Moderator languages. */
    public languages: string[];

    /** Moderator acceptedCurrencies. */
    public acceptedCurrencies: string[];

    /** Moderator fee. */
    public fee?: (Moderator.IFee|null);

    /**
     * Creates a new Moderator instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Moderator instance
     */
    public static create(properties?: IModerator): Moderator;

    /**
     * Encodes the specified Moderator message. Does not implicitly {@link Moderator.verify|verify} messages.
     * @param message Moderator message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IModerator, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Moderator message, length delimited. Does not implicitly {@link Moderator.verify|verify} messages.
     * @param message Moderator message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IModerator, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Moderator message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Moderator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Moderator;

    /**
     * Decodes a Moderator message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Moderator
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Moderator;

    /**
     * Verifies a Moderator message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Moderator message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Moderator
     */
    public static fromObject(object: { [k: string]: any }): Moderator;

    /**
     * Creates a plain object from a Moderator message. Also converts values to other types if specified.
     * @param message Moderator
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Moderator, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Moderator to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Moderator {

    /** Properties of a Fee. */
    interface IFee {

        /** Fee fixedFee */
        fixedFee?: (Moderator.IPrice|null);

        /** Fee percentage */
        percentage?: (number|null);

        /** Fee feeType */
        feeType?: (Moderator.Fee.FeeType|null);
    }

    /** Represents a Fee. */
    class Fee implements IFee {

        /**
         * Constructs a new Fee.
         * @param [properties] Properties to set
         */
        constructor(properties?: Moderator.IFee);

        /** Fee fixedFee. */
        public fixedFee?: (Moderator.IPrice|null);

        /** Fee percentage. */
        public percentage: number;

        /** Fee feeType. */
        public feeType: Moderator.Fee.FeeType;

        /**
         * Creates a new Fee instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Fee instance
         */
        public static create(properties?: Moderator.IFee): Moderator.Fee;

        /**
         * Encodes the specified Fee message. Does not implicitly {@link Moderator.Fee.verify|verify} messages.
         * @param message Fee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Moderator.IFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Fee message, length delimited. Does not implicitly {@link Moderator.Fee.verify|verify} messages.
         * @param message Fee message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Moderator.IFee, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Fee message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Fee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Moderator.Fee;

        /**
         * Decodes a Fee message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Fee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Moderator.Fee;

        /**
         * Verifies a Fee message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Fee message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Fee
         */
        public static fromObject(object: { [k: string]: any }): Moderator.Fee;

        /**
         * Creates a plain object from a Fee message. Also converts values to other types if specified.
         * @param message Fee
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Moderator.Fee, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Fee to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Fee {

        /** FeeType enum. */
        enum FeeType {
            FIXED = 0,
            PERCENTAGE = 1,
            FIXED_PLUS_PERCENTAGE = 2
        }
    }

    /** Properties of a Price. */
    interface IPrice {

        /** Price currencyCode */
        currencyCode?: (string|null);

        /** Price amount */
        amount?: (number|Long|null);
    }

    /** Represents a Price. */
    class Price implements IPrice {

        /**
         * Constructs a new Price.
         * @param [properties] Properties to set
         */
        constructor(properties?: Moderator.IPrice);

        /** Price currencyCode. */
        public currencyCode: string;

        /** Price amount. */
        public amount: (number|Long);

        /**
         * Creates a new Price instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Price instance
         */
        public static create(properties?: Moderator.IPrice): Moderator.Price;

        /**
         * Encodes the specified Price message. Does not implicitly {@link Moderator.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Moderator.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link Moderator.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Moderator.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Moderator.Price;

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Moderator.Price;

        /**
         * Verifies a Price message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Price
         */
        public static fromObject(object: { [k: string]: any }): Moderator.Price;

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @param message Price
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Moderator.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Price to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a DisputeUpdate. */
export interface IDisputeUpdate {

    /** DisputeUpdate orderId */
    orderId?: (string|null);

    /** DisputeUpdate payoutAddress */
    payoutAddress?: (string|null);

    /** DisputeUpdate outpoints */
    outpoints?: (IOutpoint[]|null);

    /** DisputeUpdate serializedContract */
    serializedContract?: (Uint8Array|null);
}

/** Represents a DisputeUpdate. */
export class DisputeUpdate implements IDisputeUpdate {

    /**
     * Constructs a new DisputeUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisputeUpdate);

    /** DisputeUpdate orderId. */
    public orderId: string;

    /** DisputeUpdate payoutAddress. */
    public payoutAddress: string;

    /** DisputeUpdate outpoints. */
    public outpoints: IOutpoint[];

    /** DisputeUpdate serializedContract. */
    public serializedContract: Uint8Array;

    /**
     * Creates a new DisputeUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisputeUpdate instance
     */
    public static create(properties?: IDisputeUpdate): DisputeUpdate;

    /**
     * Encodes the specified DisputeUpdate message. Does not implicitly {@link DisputeUpdate.verify|verify} messages.
     * @param message DisputeUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisputeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisputeUpdate message, length delimited. Does not implicitly {@link DisputeUpdate.verify|verify} messages.
     * @param message DisputeUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisputeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisputeUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisputeUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisputeUpdate;

    /**
     * Decodes a DisputeUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisputeUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisputeUpdate;

    /**
     * Verifies a DisputeUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisputeUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisputeUpdate
     */
    public static fromObject(object: { [k: string]: any }): DisputeUpdate;

    /**
     * Creates a plain object from a DisputeUpdate message. Also converts values to other types if specified.
     * @param message DisputeUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisputeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisputeUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** OrderState enum. */
export enum OrderState {
    PENDING = 0,
    AWAITING_PAYMENT = 1,
    AWAITING_PICKUP = 2,
    AWAITING_FULFILLMENT = 3,
    PARTIALLY_FULFILLED = 4,
    FULFILLED = 5,
    COMPLETED = 6,
    CANCELED = 7,
    DECLINED = 8,
    REFUNDED = 9,
    DISPUTED = 10,
    DECIDED = 11,
    RESOLVED = 12,
    PAYMENT_FINALIZED = 13,
    PROCESSING_ERROR = 14
}

/** Properties of a Post. */
export interface IPost {

    /** Post slug */
    slug?: (string|null);

    /** Immutable human readabile clean url */
    vendorID?: (IID|null);

    /** PeerID of the content */
    title?: (string|null);

    /** Title of post */
    longForm?: (string|null);

    /** Post content */
    images?: (IImage[]|null);

    /** List of post images */
    tags?: (string[]|null);

    /** List of text tags */
    timestamp?: (google.protobuf.ITimestamp|null);
}

/** Represents a Post. */
export class Post implements IPost {

    /**
     * Constructs a new Post.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPost);

    /** Post slug. */
    public slug: string;

    /** Immutable human readabile clean url */
    public vendorID?: (IID|null);

    /** PeerID of the content */
    public title: string;

    /** Title of post */
    public longForm: string;

    /** Post content */
    public images: IImage[];

    /** List of post images */
    public tags: string[];

    /** List of text tags */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new Post instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Post instance
     */
    public static create(properties?: IPost): Post;

    /**
     * Encodes the specified Post message. Does not implicitly {@link Post.verify|verify} messages.
     * @param message Post message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Post message, length delimited. Does not implicitly {@link Post.verify|verify} messages.
     * @param message Post message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Post message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Post
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Post;

    /**
     * Decodes a Post message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Post
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Post;

    /**
     * Verifies a Post message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Post message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Post
     */
    public static fromObject(object: { [k: string]: any }): Post;

    /**
     * Creates a plain object from a Post message. Also converts values to other types if specified.
     * @param message Post
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Post, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Post to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SignedPost. */
export interface ISignedPost {

    /** SignedPost post */
    post?: (IPost|null);

    /** SignedPost hash */
    hash?: (string|null);

    /** SignedPost signature */
    signature?: (Uint8Array|null);
}

/** Represents a SignedPost. */
export class SignedPost implements ISignedPost {

    /**
     * Constructs a new SignedPost.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISignedPost);

    /** SignedPost post. */
    public post?: (IPost|null);

    /** SignedPost hash. */
    public hash: string;

    /** SignedPost signature. */
    public signature: Uint8Array;

    /**
     * Creates a new SignedPost instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SignedPost instance
     */
    public static create(properties?: ISignedPost): SignedPost;

    /**
     * Encodes the specified SignedPost message. Does not implicitly {@link SignedPost.verify|verify} messages.
     * @param message SignedPost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISignedPost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SignedPost message, length delimited. Does not implicitly {@link SignedPost.verify|verify} messages.
     * @param message SignedPost message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISignedPost, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SignedPost message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SignedPost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SignedPost;

    /**
     * Decodes a SignedPost message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SignedPost
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SignedPost;

    /**
     * Verifies a SignedPost message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SignedPost message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SignedPost
     */
    public static fromObject(object: { [k: string]: any }): SignedPost;

    /**
     * Creates a plain object from a SignedPost message. Also converts values to other types if specified.
     * @param message SignedPost
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SignedPost, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SignedPost to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Profile. */
export interface IProfile {

    /** Profile peerID */
    peerID?: (string|null);

    /** The unique Base58 CIDv0 ipfs node identifer, (Qm...). */
    handle?: (string|null);

    /** Distinct authoritative human-readable name (i.e. dnslink) */
    name?: (string|null);

    /** Display name of peer */
    location?: (string|null);

    /** Description of store location (100 character limit) */
    about?: (string|null);

    /** Long description with basic html markup allowed. */
    shortDescription?: (string|null);

    /** Profile nsfw */
    nsfw?: (boolean|null);

    /** Whether the node hosts mature or adult content. */
    vendor?: (boolean|null);

    /** Whether the node is operating as a vendor. */
    moderator?: (boolean|null);

    /** Whether the node offers moderation as a service. */
    moderatorInfo?: (IModerator|null);

    /** Profile contactInfo */
    contactInfo?: (Profile.IContact|null);

    /** The contact info for the node. */
    colors?: (Profile.IColors|null);

    /** Profile avatarHashes */
    avatarHashes?: (IImage|null);

    /** The node avatar image. (tiny: 60x60) */
    headerHashes?: (IImage|null);

    /** Profile stats */
    stats?: (Profile.IStats|null);

    /** Profile bitcoinPubkey */
    bitcoinPubkey?: (string|null);

    /** Profile lastModified */
    lastModified?: (google.protobuf.ITimestamp|null);

    /** Profile currencies */
    currencies?: (string[]|null);
}

/**
 * A participant on the openbazaar network. Defined by a random secret (12 word seed), used to generate
 * both the root cryptocurrency address and ipfs public hash.
 */
export class Profile implements IProfile {

    /**
     * Constructs a new Profile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProfile);

    /** Profile peerID. */
    public peerID: string;

    /** The unique Base58 CIDv0 ipfs node identifer, (Qm...). */
    public handle: string;

    /** Distinct authoritative human-readable name (i.e. dnslink) */
    public name: string;

    /** Display name of peer */
    public location: string;

    /** Description of store location (100 character limit) */
    public about: string;

    /** Long description with basic html markup allowed. */
    public shortDescription: string;

    /** Profile nsfw. */
    public nsfw: boolean;

    /** Whether the node hosts mature or adult content. */
    public vendor: boolean;

    /** Whether the node is operating as a vendor. */
    public moderator: boolean;

    /** Whether the node offers moderation as a service. */
    public moderatorInfo?: (IModerator|null);

    /** Profile contactInfo. */
    public contactInfo?: (Profile.IContact|null);

    /** The contact info for the node. */
    public colors?: (Profile.IColors|null);

    /** Profile avatarHashes. */
    public avatarHashes?: (IImage|null);

    /** The node avatar image. (tiny: 60x60) */
    public headerHashes?: (IImage|null);

    /** Profile stats. */
    public stats?: (Profile.IStats|null);

    /** Profile bitcoinPubkey. */
    public bitcoinPubkey: string;

    /** Profile lastModified. */
    public lastModified?: (google.protobuf.ITimestamp|null);

    /** Profile currencies. */
    public currencies: string[];

    /**
     * Creates a new Profile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Profile instance
     */
    public static create(properties?: IProfile): Profile;

    /**
     * Encodes the specified Profile message. Does not implicitly {@link Profile.verify|verify} messages.
     * @param message Profile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Profile message, length delimited. Does not implicitly {@link Profile.verify|verify} messages.
     * @param message Profile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Profile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Profile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Profile;

    /**
     * Decodes a Profile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Profile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Profile;

    /**
     * Verifies a Profile message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Profile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Profile
     */
    public static fromObject(object: { [k: string]: any }): Profile;

    /**
     * Creates a plain object from a Profile message. Also converts values to other types if specified.
     * @param message Profile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Profile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Profile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Profile {

    /** Properties of a Contact. */
    interface IContact {

        /** Contact website */
        website?: (string|null);

        /** Website url */
        email?: (string|null);

        /** Contact email address */
        phoneNumber?: (string|null);

        /** Contact phone number */
        social?: (Profile.ISocialAccount[]|null);
    }

    /** Contact information for the node. */
    class Contact implements IContact {

        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(properties?: Profile.IContact);

        /** Contact website. */
        public website: string;

        /** Website url */
        public email: string;

        /** Contact email address */
        public phoneNumber: string;

        /** Contact phone number */
        public social: Profile.ISocialAccount[];

        /**
         * Creates a new Contact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contact instance
         */
        public static create(properties?: Profile.IContact): Profile.Contact;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link Profile.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Profile.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link Profile.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Profile.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Profile.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Profile.Contact;

        /**
         * Verifies a Contact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: { [k: string]: any }): Profile.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Profile.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SocialAccount. */
    interface ISocialAccount {

        /** SocialAccount type */
        type?: (string|null);

        /** Social media platform */
        username?: (string|null);

        /** Handle on social media platform */
        proof?: (string|null);
    }

    /** Reference to an external account */
    class SocialAccount implements ISocialAccount {

        /**
         * Constructs a new SocialAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: Profile.ISocialAccount);

        /** SocialAccount type. */
        public type: string;

        /** Social media platform */
        public username: string;

        /** Handle on social media platform */
        public proof: string;

        /**
         * Creates a new SocialAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SocialAccount instance
         */
        public static create(properties?: Profile.ISocialAccount): Profile.SocialAccount;

        /**
         * Encodes the specified SocialAccount message. Does not implicitly {@link Profile.SocialAccount.verify|verify} messages.
         * @param message SocialAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Profile.ISocialAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SocialAccount message, length delimited. Does not implicitly {@link Profile.SocialAccount.verify|verify} messages.
         * @param message SocialAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Profile.ISocialAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SocialAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SocialAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Profile.SocialAccount;

        /**
         * Decodes a SocialAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SocialAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Profile.SocialAccount;

        /**
         * Verifies a SocialAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SocialAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SocialAccount
         */
        public static fromObject(object: { [k: string]: any }): Profile.SocialAccount;

        /**
         * Creates a plain object from a SocialAccount message. Also converts values to other types if specified.
         * @param message SocialAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Profile.SocialAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SocialAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Colors. */
    interface IColors {

        /** Colors primary */
        primary?: (string|null);

        /** Twitter style profile theme color, default #FFFFFF */
        secondary?: (string|null);

        /** Alternate color, default #ECEEF2 */
        text?: (string|null);

        /** Text color, default #252525 */
        highlight?: (string|null);

        /** Highlight color, default #2BAD23 */
        highlightText?: (string|null);
    }

    /** Profile theme colors, not implemented. Values given in html style hex code */
    class Colors implements IColors {

        /**
         * Constructs a new Colors.
         * @param [properties] Properties to set
         */
        constructor(properties?: Profile.IColors);

        /** Colors primary. */
        public primary: string;

        /** Twitter style profile theme color, default #FFFFFF */
        public secondary: string;

        /** Alternate color, default #ECEEF2 */
        public text: string;

        /** Text color, default #252525 */
        public highlight: string;

        /** Highlight color, default #2BAD23 */
        public highlightText: string;

        /**
         * Creates a new Colors instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Colors instance
         */
        public static create(properties?: Profile.IColors): Profile.Colors;

        /**
         * Encodes the specified Colors message. Does not implicitly {@link Profile.Colors.verify|verify} messages.
         * @param message Colors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Profile.IColors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Colors message, length delimited. Does not implicitly {@link Profile.Colors.verify|verify} messages.
         * @param message Colors message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Profile.IColors, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Colors message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Colors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Profile.Colors;

        /**
         * Decodes a Colors message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Colors
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Profile.Colors;

        /**
         * Verifies a Colors message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Colors message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Colors
         */
        public static fromObject(object: { [k: string]: any }): Profile.Colors;

        /**
         * Creates a plain object from a Colors message. Also converts values to other types if specified.
         * @param message Colors
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Profile.Colors, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Colors to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Stats. */
    interface IStats {

        /** Stats followerCount */
        followerCount?: (number|null);

        /** Follower count */
        followingCount?: (number|null);

        /** Following count */
        listingCount?: (number|null);

        /** Total active listing count */
        ratingCount?: (number|null);

        /** Rating count */
        postCount?: (number|null);

        /** Total number of posts */
        averageRating?: (number|null);
    }

    /** Unverified stats maintained and provided by server for convenience. */
    class Stats implements IStats {

        /**
         * Constructs a new Stats.
         * @param [properties] Properties to set
         */
        constructor(properties?: Profile.IStats);

        /** Stats followerCount. */
        public followerCount: number;

        /** Follower count */
        public followingCount: number;

        /** Following count */
        public listingCount: number;

        /** Total active listing count */
        public ratingCount: number;

        /** Rating count */
        public postCount: number;

        /** Total number of posts */
        public averageRating: number;

        /**
         * Creates a new Stats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Stats instance
         */
        public static create(properties?: Profile.IStats): Profile.Stats;

        /**
         * Encodes the specified Stats message. Does not implicitly {@link Profile.Stats.verify|verify} messages.
         * @param message Stats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Profile.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Stats message, length delimited. Does not implicitly {@link Profile.Stats.verify|verify} messages.
         * @param message Stats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Profile.IStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Stats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Profile.Stats;

        /**
         * Decodes a Stats message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Stats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Profile.Stats;

        /**
         * Verifies a Stats message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Stats message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Stats
         */
        public static fromObject(object: { [k: string]: any }): Profile.Stats;

        /**
         * Creates a plain object from a Stats message. Also converts values to other types if specified.
         * @param message Stats
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Profile.Stats, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Stats to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a SearchResponse. */
export interface ISearchResponse {

    /** SearchResponse name */
    name?: (string|null);

    /** Display name of search provider */
    logo?: (string|null);

    /** URL of icon for search provider */
    links?: ({ [k: string]: string }|null);

    /** URI endpoints */
    options?: ({ [k: string]: SearchResponse.ISearchProviderOption }|null);

    /** Filtering options for search */
    sortBy?: ({ [k: string]: SearchResponse.ISearchProviderSort }|null);
}

/** Represents a SearchResponse. */
export class SearchResponse implements ISearchResponse {

    /**
     * Constructs a new SearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISearchResponse);

    /** SearchResponse name. */
    public name: string;

    /** Display name of search provider */
    public logo: string;

    /** URL of icon for search provider */
    public links: { [k: string]: string };

    /** URI endpoints */
    public options: { [k: string]: SearchResponse.ISearchProviderOption };

    /** Filtering options for search */
    public sortBy: { [k: string]: SearchResponse.ISearchProviderSort };

    /**
     * Creates a new SearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SearchResponse instance
     */
    public static create(properties?: ISearchResponse): SearchResponse;

    /**
     * Encodes the specified SearchResponse message. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SearchResponse message, length delimited. Does not implicitly {@link SearchResponse.verify|verify} messages.
     * @param message SearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse;

    /**
     * Decodes a SearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse;

    /**
     * Verifies a SearchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SearchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SearchResponse
     */
    public static fromObject(object: { [k: string]: any }): SearchResponse;

    /**
     * Creates a plain object from a SearchResponse message. Also converts values to other types if specified.
     * @param message SearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SearchResponse {

    /** Properties of a SearchProviderOptionItem. */
    interface ISearchProviderOptionItem {

        /** SearchProviderOptionItem label */
        label?: (string|null);

        /** SearchProviderOptionItem value */
        value?: (google.protobuf.IAny|null);

        /** SearchProviderOptionItem checked */
        checked?: (boolean|null);

        /** SearchProviderOptionItem default */
        "default"?: (boolean|null);
    }

    /** Represents a SearchProviderOptionItem. */
    class SearchProviderOptionItem implements ISearchProviderOptionItem {

        /**
         * Constructs a new SearchProviderOptionItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.ISearchProviderOptionItem);

        /** SearchProviderOptionItem label. */
        public label: string;

        /** SearchProviderOptionItem value. */
        public value?: (google.protobuf.IAny|null);

        /** SearchProviderOptionItem checked. */
        public checked: boolean;

        /** SearchProviderOptionItem default. */
        public default: boolean;

        /**
         * Creates a new SearchProviderOptionItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchProviderOptionItem instance
         */
        public static create(properties?: SearchResponse.ISearchProviderOptionItem): SearchResponse.SearchProviderOptionItem;

        /**
         * Encodes the specified SearchProviderOptionItem message. Does not implicitly {@link SearchResponse.SearchProviderOptionItem.verify|verify} messages.
         * @param message SearchProviderOptionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.ISearchProviderOptionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchProviderOptionItem message, length delimited. Does not implicitly {@link SearchResponse.SearchProviderOptionItem.verify|verify} messages.
         * @param message SearchProviderOptionItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.ISearchProviderOptionItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchProviderOptionItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchProviderOptionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.SearchProviderOptionItem;

        /**
         * Decodes a SearchProviderOptionItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchProviderOptionItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.SearchProviderOptionItem;

        /**
         * Verifies a SearchProviderOptionItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchProviderOptionItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchProviderOptionItem
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.SearchProviderOptionItem;

        /**
         * Creates a plain object from a SearchProviderOptionItem message. Also converts values to other types if specified.
         * @param message SearchProviderOptionItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.SearchProviderOptionItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchProviderOptionItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchProviderOption. */
    interface ISearchProviderOption {

        /** SearchProviderOption label */
        label?: (string|null);

        /** SearchProviderOption type */
        type?: (SearchResponse.SearchProviderOption.SearchOptionType|null);

        /** SearchProviderOption options */
        options?: ({ [k: string]: SearchResponse.ISearchProviderOptionItem }|null);
    }

    /** Represents a SearchProviderOption. */
    class SearchProviderOption implements ISearchProviderOption {

        /**
         * Constructs a new SearchProviderOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.ISearchProviderOption);

        /** SearchProviderOption label. */
        public label: string;

        /** SearchProviderOption type. */
        public type: SearchResponse.SearchProviderOption.SearchOptionType;

        /** SearchProviderOption options. */
        public options: { [k: string]: SearchResponse.ISearchProviderOptionItem };

        /**
         * Creates a new SearchProviderOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchProviderOption instance
         */
        public static create(properties?: SearchResponse.ISearchProviderOption): SearchResponse.SearchProviderOption;

        /**
         * Encodes the specified SearchProviderOption message. Does not implicitly {@link SearchResponse.SearchProviderOption.verify|verify} messages.
         * @param message SearchProviderOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.ISearchProviderOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchProviderOption message, length delimited. Does not implicitly {@link SearchResponse.SearchProviderOption.verify|verify} messages.
         * @param message SearchProviderOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.ISearchProviderOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchProviderOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchProviderOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.SearchProviderOption;

        /**
         * Decodes a SearchProviderOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchProviderOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.SearchProviderOption;

        /**
         * Verifies a SearchProviderOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchProviderOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchProviderOption
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.SearchProviderOption;

        /**
         * Creates a plain object from a SearchProviderOption message. Also converts values to other types if specified.
         * @param message SearchProviderOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.SearchProviderOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchProviderOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SearchProviderOption {

        /** SearchOptionType enum. */
        enum SearchOptionType {
            RADIO = 0,
            CHECKBOX = 1,
            DROPDOWN = 2
        }
    }

    /** Properties of a SearchProviderSort. */
    interface ISearchProviderSort {

        /** SearchProviderSort label */
        label?: (string|null);

        /** SearchProviderSort selected */
        selected?: (boolean|null);

        /** SearchProviderSort default */
        "default"?: (boolean|null);
    }

    /** Represents a SearchProviderSort. */
    class SearchProviderSort implements ISearchProviderSort {

        /**
         * Constructs a new SearchProviderSort.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.ISearchProviderSort);

        /** SearchProviderSort label. */
        public label: string;

        /** SearchProviderSort selected. */
        public selected: boolean;

        /** SearchProviderSort default. */
        public default: boolean;

        /**
         * Creates a new SearchProviderSort instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchProviderSort instance
         */
        public static create(properties?: SearchResponse.ISearchProviderSort): SearchResponse.SearchProviderSort;

        /**
         * Encodes the specified SearchProviderSort message. Does not implicitly {@link SearchResponse.SearchProviderSort.verify|verify} messages.
         * @param message SearchProviderSort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.ISearchProviderSort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchProviderSort message, length delimited. Does not implicitly {@link SearchResponse.SearchProviderSort.verify|verify} messages.
         * @param message SearchProviderSort message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.ISearchProviderSort, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchProviderSort message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchProviderSort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.SearchProviderSort;

        /**
         * Decodes a SearchProviderSort message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchProviderSort
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.SearchProviderSort;

        /**
         * Verifies a SearchProviderSort message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchProviderSort message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchProviderSort
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.SearchProviderSort;

        /**
         * Creates a plain object from a SearchProviderSort message. Also converts values to other types if specified.
         * @param message SearchProviderSort
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.SearchProviderSort, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchProviderSort to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SearchResultType enum. */
    enum SearchResultType {
        LISTING = 0,
        NODE = 1
    }

    /** Properties of a Vendor. */
    interface IVendor {

        /** Vendor peerID */
        peerID?: (string|null);

        /** Vendor name */
        name?: (string|null);

        /** Vendor avatarHashes */
        avatarHashes?: (IImage|null);
    }

    /** Represents a Vendor. */
    class Vendor implements IVendor {

        /**
         * Constructs a new Vendor.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.IVendor);

        /** Vendor peerID. */
        public peerID: string;

        /** Vendor name. */
        public name: string;

        /** Vendor avatarHashes. */
        public avatarHashes?: (IImage|null);

        /**
         * Creates a new Vendor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vendor instance
         */
        public static create(properties?: SearchResponse.IVendor): SearchResponse.Vendor;

        /**
         * Encodes the specified Vendor message. Does not implicitly {@link SearchResponse.Vendor.verify|verify} messages.
         * @param message Vendor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.IVendor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vendor message, length delimited. Does not implicitly {@link SearchResponse.Vendor.verify|verify} messages.
         * @param message Vendor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.IVendor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vendor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vendor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.Vendor;

        /**
         * Decodes a Vendor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vendor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.Vendor;

        /**
         * Verifies a Vendor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vendor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vendor
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.Vendor;

        /**
         * Creates a plain object from a Vendor message. Also converts values to other types if specified.
         * @param message Vendor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.Vendor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vendor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Listing. */
    interface IListing {

        /** Listing title */
        title?: (string|null);

        /** Listing slug */
        slug?: (string|null);

        /** Listing description */
        description?: (string|null);

        /** Listing acceptedCurrencies */
        acceptedCurrencies?: (string[]|null);

        /** Listing averageRating */
        averageRating?: (number|null);

        /** Listing ratingCount */
        ratingCount?: (number|null);

        /** Listing contractType */
        contractType?: (SearchResponse.ContractType|null);

        /** Listing nsfw */
        nsfw?: (boolean|null);

        /** Listing thumbnail */
        thumbnail?: (IImage|null);

        /** Listing price */
        price?: (SearchResponse.IPrice|null);
    }

    /** Represents a Listing. */
    class Listing implements IListing {

        /**
         * Constructs a new Listing.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.IListing);

        /** Listing title. */
        public title: string;

        /** Listing slug. */
        public slug: string;

        /** Listing description. */
        public description: string;

        /** Listing acceptedCurrencies. */
        public acceptedCurrencies: string[];

        /** Listing averageRating. */
        public averageRating: number;

        /** Listing ratingCount. */
        public ratingCount: number;

        /** Listing contractType. */
        public contractType: SearchResponse.ContractType;

        /** Listing nsfw. */
        public nsfw: boolean;

        /** Listing thumbnail. */
        public thumbnail?: (IImage|null);

        /** Listing price. */
        public price?: (SearchResponse.IPrice|null);

        /**
         * Creates a new Listing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Listing instance
         */
        public static create(properties?: SearchResponse.IListing): SearchResponse.Listing;

        /**
         * Encodes the specified Listing message. Does not implicitly {@link SearchResponse.Listing.verify|verify} messages.
         * @param message Listing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.IListing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Listing message, length delimited. Does not implicitly {@link SearchResponse.Listing.verify|verify} messages.
         * @param message Listing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.IListing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Listing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Listing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.Listing;

        /**
         * Decodes a Listing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Listing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.Listing;

        /**
         * Verifies a Listing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Listing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Listing
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.Listing;

        /**
         * Creates a plain object from a Listing message. Also converts values to other types if specified.
         * @param message Listing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.Listing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Listing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Price. */
    interface IPrice {

        /** Price currencyCode */
        currencyCode?: (string|null);

        /** Price amount */
        amount?: (number|Long|null);
    }

    /** Represents a Price. */
    class Price implements IPrice {

        /**
         * Constructs a new Price.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.IPrice);

        /** Price currencyCode. */
        public currencyCode: string;

        /** Price amount. */
        public amount: (number|Long);

        /**
         * Creates a new Price instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Price instance
         */
        public static create(properties?: SearchResponse.IPrice): SearchResponse.Price;

        /**
         * Encodes the specified Price message. Does not implicitly {@link SearchResponse.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link SearchResponse.Price.verify|verify} messages.
         * @param message Price message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.Price;

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.Price;

        /**
         * Verifies a Price message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Price
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.Price;

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @param message Price
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Price to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ContractType enum. */
    enum ContractType {
        PHYSICAL_GOOD = 0,
        DIGITAL_GOOD = 1,
        SERVICE = 2,
        CROWD_FUND = 3,
        CRYPTOCURRENCY = 4
    }

    /** Properties of a VendorWrap. */
    interface IVendorWrap {

        /** VendorWrap data */
        data?: (SearchResponse.IVendor|null);
    }

    /** Represents a VendorWrap. */
    class VendorWrap implements IVendorWrap {

        /**
         * Constructs a new VendorWrap.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.IVendorWrap);

        /** VendorWrap data. */
        public data?: (SearchResponse.IVendor|null);

        /**
         * Creates a new VendorWrap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VendorWrap instance
         */
        public static create(properties?: SearchResponse.IVendorWrap): SearchResponse.VendorWrap;

        /**
         * Encodes the specified VendorWrap message. Does not implicitly {@link SearchResponse.VendorWrap.verify|verify} messages.
         * @param message VendorWrap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.IVendorWrap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VendorWrap message, length delimited. Does not implicitly {@link SearchResponse.VendorWrap.verify|verify} messages.
         * @param message VendorWrap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.IVendorWrap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VendorWrap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VendorWrap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.VendorWrap;

        /**
         * Decodes a VendorWrap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VendorWrap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.VendorWrap;

        /**
         * Verifies a VendorWrap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VendorWrap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VendorWrap
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.VendorWrap;

        /**
         * Creates a plain object from a VendorWrap message. Also converts values to other types if specified.
         * @param message VendorWrap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.VendorWrap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VendorWrap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Relationship. */
    interface IRelationship {

        /** Relationship moderators */
        moderators?: (string[]|null);

        /** Relationship vendor */
        vendor?: (SearchResponse.IVendorWrap|null);
    }

    /** Represents a Relationship. */
    class Relationship implements IRelationship {

        /**
         * Constructs a new Relationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.IRelationship);

        /** Relationship moderators. */
        public moderators: string[];

        /** Relationship vendor. */
        public vendor?: (SearchResponse.IVendorWrap|null);

        /**
         * Creates a new Relationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Relationship instance
         */
        public static create(properties?: SearchResponse.IRelationship): SearchResponse.Relationship;

        /**
         * Encodes the specified Relationship message. Does not implicitly {@link SearchResponse.Relationship.verify|verify} messages.
         * @param message Relationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.IRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Relationship message, length delimited. Does not implicitly {@link SearchResponse.Relationship.verify|verify} messages.
         * @param message Relationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.IRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Relationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.Relationship;

        /**
         * Decodes a Relationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Relationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.Relationship;

        /**
         * Verifies a Relationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Relationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Relationship
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.Relationship;

        /**
         * Creates a plain object from a Relationship message. Also converts values to other types if specified.
         * @param message Relationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.Relationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Relationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchResult. */
    interface ISearchResult {

        /** SearchResult type */
        type?: (string|null);

        /** SearchResult relationships */
        relationships?: (SearchResponse.IRelationship|null);

        /** SearchResult data */
        data?: (SearchResponse.IListing|null);
    }

    /** Represents a SearchResult. */
    class SearchResult implements ISearchResult {

        /**
         * Constructs a new SearchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.ISearchResult);

        /** SearchResult type. */
        public type: string;

        /** SearchResult relationships. */
        public relationships?: (SearchResponse.IRelationship|null);

        /** SearchResult data. */
        public data?: (SearchResponse.IListing|null);

        /**
         * Creates a new SearchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchResult instance
         */
        public static create(properties?: SearchResponse.ISearchResult): SearchResponse.SearchResult;

        /**
         * Encodes the specified SearchResult message. Does not implicitly {@link SearchResponse.SearchResult.verify|verify} messages.
         * @param message SearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.ISearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchResult message, length delimited. Does not implicitly {@link SearchResponse.SearchResult.verify|verify} messages.
         * @param message SearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.ISearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.SearchResult;

        /**
         * Decodes a SearchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.SearchResult;

        /**
         * Verifies a SearchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchResult
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.SearchResult;

        /**
         * Creates a plain object from a SearchResult message. Also converts values to other types if specified.
         * @param message SearchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.SearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SearchResults. */
    interface ISearchResults {

        /** SearchResults total */
        total?: (number|Long|null);

        /** SearchResults morePages */
        morePages?: (boolean|null);

        /** SearchResults results */
        results?: (SearchResponse.ISearchResult[]|null);
    }

    /** Represents a SearchResults. */
    class SearchResults implements ISearchResults {

        /**
         * Constructs a new SearchResults.
         * @param [properties] Properties to set
         */
        constructor(properties?: SearchResponse.ISearchResults);

        /** SearchResults total. */
        public total: (number|Long);

        /** SearchResults morePages. */
        public morePages: boolean;

        /** SearchResults results. */
        public results: SearchResponse.ISearchResult[];

        /**
         * Creates a new SearchResults instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SearchResults instance
         */
        public static create(properties?: SearchResponse.ISearchResults): SearchResponse.SearchResults;

        /**
         * Encodes the specified SearchResults message. Does not implicitly {@link SearchResponse.SearchResults.verify|verify} messages.
         * @param message SearchResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SearchResponse.ISearchResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SearchResults message, length delimited. Does not implicitly {@link SearchResponse.SearchResults.verify|verify} messages.
         * @param message SearchResults message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SearchResponse.ISearchResults, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SearchResults message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SearchResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SearchResponse.SearchResults;

        /**
         * Decodes a SearchResults message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SearchResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SearchResponse.SearchResults;

        /**
         * Verifies a SearchResults message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SearchResults message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SearchResults
         */
        public static fromObject(object: { [k: string]: any }): SearchResponse.SearchResults;

        /**
         * Creates a plain object from a SearchResults message. Also converts values to other types if specified.
         * @param message SearchResults
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SearchResponse.SearchResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SearchResults to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ListingFlat. */
export interface IListingFlat {

    /** ListingFlat id */
    id?: (string|null);

    /** ListingFlat peerID */
    peerID?: (string|null);

    /** ListingFlat slug */
    slug?: (string|null);

    /** ListingFlat title */
    title?: (string|null);

    /** ListingFlat description */
    description?: (string|null);

    /** ListingFlat nsfw */
    nsfw?: (boolean|null);

    /** ListingFlat contractType */
    contractType?: (ListingFlat.ContractType|null);

    /** ListingFlat profileName */
    profileName?: (string|null);

    /** ListingFlat profileAvatar */
    profileAvatar?: (string|null);

    /** ListingFlat pricingCurrency */
    pricingCurrency?: (string|null);

    /** ListingFlat acceptedCurrencies */
    acceptedCurrencies?: (string[]|null);

    /** ListingFlat price */
    price?: (number|Long|null);

    /** ListingFlat ratingCount */
    ratingCount?: (number|null);

    /** ListingFlat averageRating */
    averageRating?: (number|null);

    /** ListingFlat thumbnail */
    thumbnail?: (string|null);
}

/** Represents a ListingFlat. */
export class ListingFlat implements IListingFlat {

    /**
     * Constructs a new ListingFlat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListingFlat);

    /** ListingFlat id. */
    public id: string;

    /** ListingFlat peerID. */
    public peerID: string;

    /** ListingFlat slug. */
    public slug: string;

    /** ListingFlat title. */
    public title: string;

    /** ListingFlat description. */
    public description: string;

    /** ListingFlat nsfw. */
    public nsfw: boolean;

    /** ListingFlat contractType. */
    public contractType: ListingFlat.ContractType;

    /** ListingFlat profileName. */
    public profileName: string;

    /** ListingFlat profileAvatar. */
    public profileAvatar: string;

    /** ListingFlat pricingCurrency. */
    public pricingCurrency: string;

    /** ListingFlat acceptedCurrencies. */
    public acceptedCurrencies: string[];

    /** ListingFlat price. */
    public price: (number|Long);

    /** ListingFlat ratingCount. */
    public ratingCount: number;

    /** ListingFlat averageRating. */
    public averageRating: number;

    /** ListingFlat thumbnail. */
    public thumbnail: string;

    /**
     * Creates a new ListingFlat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListingFlat instance
     */
    public static create(properties?: IListingFlat): ListingFlat;

    /**
     * Encodes the specified ListingFlat message. Does not implicitly {@link ListingFlat.verify|verify} messages.
     * @param message ListingFlat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListingFlat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListingFlat message, length delimited. Does not implicitly {@link ListingFlat.verify|verify} messages.
     * @param message ListingFlat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListingFlat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListingFlat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListingFlat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListingFlat;

    /**
     * Decodes a ListingFlat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListingFlat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListingFlat;

    /**
     * Verifies a ListingFlat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListingFlat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListingFlat
     */
    public static fromObject(object: { [k: string]: any }): ListingFlat;

    /**
     * Creates a plain object from a ListingFlat message. Also converts values to other types if specified.
     * @param message ListingFlat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListingFlat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListingFlat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ListingFlat {

    /** ContractType enum. */
    enum ContractType {
        PHYSICAL_GOOD = 0,
        DIGITAL_GOOD = 1,
        SERVICE = 2,
        CROWD_FUND = 3,
        CRYPTOCURRENCY = 4
    }
}
