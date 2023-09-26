import { TransactionDto } from "../../shared/dto/transaction-dto";

export interface IListTransactionService {
    list: () => Promise<TransactionDto[]>
}