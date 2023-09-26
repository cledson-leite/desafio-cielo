import { IListTransaction } from "../../../ports/input/i-list-transaction";
import { IListTransactionService } from "../../../ports/output/i-list-transaction";
import { Transaction } from "../../domain/transaction";

export class ListTransactionUsecase implements IListTransaction{
    constructor(private readonly service: IListTransactionService){};
    async execute(): Promise<Transaction[]>{
        try {
            return await this.service.list()
        } catch (error) {
            throw new Error('Error Inesperado')
        }
    }
}