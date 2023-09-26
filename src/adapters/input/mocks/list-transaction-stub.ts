import { transactionFake } from "../../../core/use_case/mocks/transaction-fake";
import { IListTransaction } from "../../../ports/input/i-list-transaction";
import { Response } from "../../../shared/dto/response";
import { TransactionDto } from "../../../shared/dto/transaction-dto";

export class ListTransactionStub implements IListTransaction {
    async execute (): Promise<Response<TransactionDto[]>> {
        return {success: true, data: [transactionFake]}
    }
}