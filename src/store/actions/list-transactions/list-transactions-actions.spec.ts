import { faker } from '@faker-js/faker'
import * as Actions from './'
import { transactionFake } from '../../../core/use_case/mocks/transaction-fake'

describe('List Transaction Actions', () => {

    it('Should return request type without payload', () => {
        const sut = Actions.listRequest()
        expect(sut).toEqual({type: 'list_request'})
    })
    it('Should return failure with an error message in the payload', () => {
        const error = faker.lorem.sentence(3)
        const sut = Actions.listFailure(error)
        expect(sut).toEqual({type: 'list_failure', payload: error})
    })
    it('Should return type success with list of transactions in the payload', () => {
        const sut = Actions.listSuccess([transactionFake])
        expect(sut).toEqual({type: 'list_success', payload: [transactionFake]})
    })
})