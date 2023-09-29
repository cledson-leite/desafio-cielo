import { Transaction } from "../../core/domain/transaction"

export class TransactionDto implements Transaction {
    
    constructor(
        readonly id: string,
        readonly merchantId: string,
        readonly paymentNode: number,
        readonly cnpjRoot: number,
        readonly date: Date,
        readonly authorizationCode: string,
        readonly terminal: string,
        readonly channel: string,
        readonly paymentType: string,
        readonly cardBrand: string,
        readonly truncatedCardNumber: string,
        readonly status: string,
        readonly grossAmount: number,
        readonly netAmount: number,
        readonly withdrawAmount: number,
        readonly channelCode: number,
        readonly minimumMDRAmmount: number,
        readonly mdrTaxAmount: number,
        readonly mdrFeeAmount: number,
        readonly administrationFee: number,
    ){}
}