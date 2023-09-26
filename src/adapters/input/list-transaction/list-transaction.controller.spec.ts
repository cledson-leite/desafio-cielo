import { transactionFake } from "../../../core/use_case/mocks/transaction-fake"
import { IListTransaction } from "../../../ports/input/i-list-transaction"
import { ListTransactionStub } from "../mocks/list-transaction-stub"
import { ListTransactionController } from "./list-transactions-controller"

describe('List Transaction Controller', () => {
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
    it('Should throw error received', async () => {
       jest.spyOn(input, 'execute').mockRejectedValueOnce(new Error())
        const promise = sut.handle()
        await expect(promise).rejects.toThrow()
    })
    it('Should return a list of transactions', async () => {
        const result = await sut.handle()
        expect(result).toEqual( [transactionFake])
    })

})