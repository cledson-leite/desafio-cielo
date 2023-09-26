import { transactionFake } from "../../../core/use_case/mocks/transaction-fake"
import { IListTransaction } from "../../../ports/input/i-list-transaction"
import { ListTransactionStub } from "../mocks/list-transaction-stub"
import { ListTransactionController } from "./list-transactions-controller"

describe('List Transaction Use Case', () => {
    let input: IListTransaction
    let sut: ListTransactionController

    beforeEach(() => {
        input = new ListTransactionStub()
        sut = new ListTransactionController(input)
    })

    it('Should call the input', async () => {
        const executeSpy = jest.spyOn(input, 'execute')
        await sut.handle()
        expect(executeSpy).toHaveBeenCalled()
    })
    it('Should return an unexpected error message', async () => {
        const error = {success: false, message: 'Error Inesperado'}
        jest.spyOn(input, 'execute').mockResolvedValueOnce(error)
        const result = await sut.handle()
        expect(result).toEqual({success: false, message: 'Error Inesperado'})
    })
    it('Should return a list of transactions', async () => {
        const data = [transactionFake]
        const result = await sut.handle()
        expect(result).toEqual({success: true, data})
    })

})