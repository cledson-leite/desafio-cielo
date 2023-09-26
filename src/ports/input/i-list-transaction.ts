import { TransactionDto } from "../../shared/dto/transaction-dto";

export interface IListTransaction {
    execute: () => Promise<TransactionDto[]>
}