import { ListTransactionUsecase } from "./list-transaction"
import { IListTransactionService } from '../../../ports/output/i-list-transaction';
import { ListTransactionServiceStub } from "../mocks/list-transaction-service-stub";
import { transactionFake } from "../mocks/transaction-fake";
import { IListTransaction } from "../../../ports/input/i-list-transaction";

describe('List Transaction Use Case', () => {
    let service: IListTransactionService
    let sut: IListTransaction

    beforeEach(() => {
        service = new ListTransactionServiceStub()
        sut = new ListTransactionUsecase(service)
    })

    it('Should call the service', async () => {
        const listSpy = jest.spyOn(service, 'list')
        await sut.execute()
        expect(listSpy).toHaveBeenCalled()
    })
    it('Should return an unexpected error message', async () => {
        jest.spyOn(service, 'list').mockRejectedValueOnce(new Error())
        const result = await sut.execute()
        expect(result).toEqual({success: false, message: 'Error Inesperado'})
    })
    it('Should return a list of transactions', async () => {
        const data = [transactionFake]
        const result = await sut.execute()
        expect(result).toEqual({success: true, data})
    })
})