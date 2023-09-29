import { IListTransaction } from "../../../ports/input/i-list-transaction";
import { TransactionDto } from "../../../shared/dto/transaction-dto";

export class ListTransactionController {
    constructor(private readonly input: IListTransaction){}

    async handle(): Promise<TransactionDto[]>{
        return this.input.execute()
    }
}