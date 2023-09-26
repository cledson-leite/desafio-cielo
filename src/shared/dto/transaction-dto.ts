import { Transaction } from "../../core/domain/transaction"

export class TransactionDto implements Transaction {
    
    constructor(
        readonly id: string,
        readonly merchantId: string,
        readonly paymentNode: number,
        readonly cnpjRoot: number,
        readonly date: Date,
        readonly paymentType: string,
        readonly cardBrand: string,
        readonly authorizationCode: string,
        readonly truncatedCardNumber: string,
        readonly grossAmount: number,
        readonly netAmount: number,
        readonly terminal: string,
        readonly administrationFee: number,
        readonly channelCode: number,
        readonly channel: string,
        readonly withdrawAmount: number,
        readonly minimumMDRAmmount: number,
        readonly mdrTaxAmount: number,
        readonly mdrFeeAmount: number,
        readonly status: string,
    ){}
}