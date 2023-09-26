import  axios from "axios"
import { ListTransactionService } from "./list-transactions-service"
import { transactionFake } from '../../../core/use_case/mocks/transaction-fake';
import {dbFake} from '../mocks/db-fake'
import { IListTransactionService } from "../../../ports/output/i-list-transaction";

jest.mock('axios', () => ({
    get: async () => Promise.resolve({data: dbFake})
}))

describe('List Transaction Use Case', () => {
    let sut: IListTransactionService

    beforeEach(() => {
        sut = new ListTransactionService(axios)
    })

    it('Should call the http client', async () => {
        const getSpy = jest.spyOn(axios,'get')
        await sut.list()
        expect(getSpy).toHaveBeenCalled()
    })
    it('Should throw the error received', async () => {
        jest.spyOn(axios,'get').mockRejectedValueOnce(new Error())
        const promise = sut.list()
       await expect(promise).rejects.toThrow()
    })
    it('Should return a list of transactions dto', async () => {
        const data = [transactionFake]
        const result = await sut.list()
        expect(result).toEqual(data)
    })
})