import { IListTransaction } from "../../../ports/input/i-list-transaction";
import { Response } from "../../../shared/dto/response";
import { TransactionDto } from "../../../shared/dto/transaction-dto";

export class ListTransactionController {
    constructor(private readonly input: IListTransaction){}

    async handle(): Promise<Response<TransactionDto[]>>{
        return this.input.execute()
    }
}