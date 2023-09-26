import { faker } from '@faker-js/faker'
import * as Actions from '../../actions/list-transactions'
import { listReducer } from "./"
import { transactionFake } from '../../../core/use_case/mocks/transaction-fake'

describe('List Transactions Reducers', () => {
    it('Should return the initial state', () => {
        const stateFake = {load: false, list: [], error: ''}
        const sut = listReducer({} as any, {type: ''})
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with load true', () => {
        const stateFake = {load: true, list: [], error: ''}
        const sut = listReducer({} as any, Actions.listRequest())
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with error message', () => {
        const error = faker.lorem.sentence(3)
        const stateFake = {load: false, list: [], error}
        const sut = listReducer({} as any, Actions.listFailure(error))
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with transactions list', () => {
        const stateFake = {load: false, list: [transactionFake], error: ''}
        const sut = listReducer(
            {} as any, 
            Actions.listSuccess([transactionFake])
            )
        expect(sut).toEqual(stateFake)
    })
})