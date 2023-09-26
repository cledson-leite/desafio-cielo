import { IListTransactionService } from "../../../ports/output/i-list-transaction";
import { Response } from "../../../shared/dto/response";
import { Transaction } from "../../domain/transaction";

export class ListTransactionUsecase {
    constructor(private readonly service: IListTransactionService){};
    async execute(): Promise<Response<Transaction[]>>{
        try {
            const result = await this.service.list()
            return {
                        success: true,
                        data: result
                    }
        } catch (error) {
            return {success:false, message: 'Error Inesperado'}
        }
    }
}