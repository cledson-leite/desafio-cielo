import { faker } from '@faker-js/faker'
import * as Actions from '../../actions/list-transactions'
import { listReducer } from "./"
import { transactionFake } from '../../../core/use_case/mocks/transaction-fake'
import { modalFake } from './mocks/modal-data-fake'
import { tableFake } from './mocks/table-data-fake'

describe('List Transactions Reducers', () => {
    it('Should return the initial state', () => {
        const stateFake = {load: false, modal: [], table: [], error: ''}
        const sut = listReducer(undefined, {type: ''})
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with load true', () => {
        const stateFake = {load: true, modal: [], table: [], error: ''}
        const sut = listReducer(undefined, Actions.listRequest())
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with error message', () => {
        const error = faker.lorem.sentence(3)
        const stateFake = {load: false, modal: [], table: [], error}
        const sut = listReducer(undefined, Actions.listFailure(error))
        expect(sut).toEqual(stateFake)
    })
    it('Should return the state with transactions list', () => {
        const stateFake = {
            load: false, 
            modal: modalFake,
            table: tableFake,
             error: ''
            }
        const sut = listReducer(
            undefined, 
            Actions.listSuccess([transactionFake])
            )
        expect(sut).toEqual(stateFake)
    })
})