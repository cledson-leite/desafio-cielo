import { AxiosInstance } from 'axios';
import { TransactionDto } from '../../../shared/dto/transaction-dto';
import { IListTransactionService } from '../../../ports/output/i-list-transaction';

export class ListTransactionService implements IListTransactionService {
    constructor(
        private readonly httpClient: AxiosInstance
    ){}

    async list(): Promise<TransactionDto[]>{
        const url = '/transactions'
        const result = await this.httpClient.get(url)
        console.log(result.data)
        const transactions: TransactionDto[] = result.data
        
        const dto = transactions.map((transaction: any) => {
            return new TransactionDto(
            transaction.id,
            transaction.merchantId,
            transaction.paymentNode,
            transaction.cnpjRoot,
            transaction.date,
            transaction.authorizationCode,
            transaction.terminal,
            transaction.channel,
            transaction.paymentType,
            transaction.cardBrand,
            transaction.truncatedCardNumber,
            transaction.status,
            transaction.grossAmount,
            transaction.netAmount,
            transaction.withdrawAmount,
            transaction.channelCode,
            transaction.minimumMDRAmmount,
            transaction.mdrTaxAmount,
            transaction.mdrFeeAmount,
            transaction.administrationFee,
        )
        })
        return dto
    }
}