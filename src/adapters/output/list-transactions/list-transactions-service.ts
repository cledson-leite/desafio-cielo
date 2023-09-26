import { AxiosInstance } from 'axios';
import { TransactionDto } from '../../../shared/dto/transaction-dto';
import { IListTransactionService } from '../../../ports/output/i-list-transaction';

export class ListTransactionService implements IListTransactionService {
    constructor(
        private readonly httpClient: AxiosInstance
    ){}

    async list(): Promise<TransactionDto[]>{
        const url = '/transaction'
        const result = await this.httpClient.get(url)
        const transactions = result.data.transactions
        const dto = transactions.map((transaction: TransactionDto) => {
            return new TransactionDto(
            transaction.id,
            transaction.merchantId,
            transaction.paymentNode,
            transaction.cnpjRoot,
            transaction.date,
            transaction.paymentType,
            transaction.cardBrand,
            transaction.authorizationCode,
            transaction.truncatedCardNumber,
            transaction.grossAmount,
            transaction.netAmount,
            transaction.terminal,
            transaction.administrationFee,
            transaction.channelCode,
            transaction.channel,
            transaction.withdrawAmount,
            transaction.minimumMDRAmmount,
            transaction.mdrTaxAmount,
            transaction.mdrFeeAmount,
            transaction.status,
        )
        })
        return dto
    }
}