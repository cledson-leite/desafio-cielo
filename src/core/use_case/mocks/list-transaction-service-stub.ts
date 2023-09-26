import { IListTransactionService } from "../../../ports/output/i-list-transaction";
import { Transaction } from "../../domain/transaction";
import { transactionFake } from "./transaction-fake";

export class ListTransactionServiceStub implements IListTransactionService{
    async list(): Promise<Transaction[]>{
        return [transactionFake]
    }
}