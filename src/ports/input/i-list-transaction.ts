import { Response } from "../../shared/dto/response";
import { TransactionDto } from "../../shared/dto/transaction-dto";

export interface IListTransaction {
    execute: () => Promise<Response<TransactionDto[]>>
}