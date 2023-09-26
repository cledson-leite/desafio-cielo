import { call, put } from "redux-saga/effects"
import { transactionFake } from "../../../core/use_case/mocks/transaction-fake"
import * as Actions from '../../actions/list-transactions'
import { control, listRequestSaga } from "./"
import { faker } from "@faker-js/faker"

describe('List Transaction Saga', () => {
    let gen: Generator
    beforeAll(() => {
        gen = listRequestSaga()
    })
    it('Should call control function', () => {
        expect(gen.next().value).toEqual(call(control))
    })
    it('Should put action success with a list of transactions', () => {
        expect(gen.next([transactionFake]).value).toEqual(
            put(Actions.listSuccess([transactionFake]))
            )
    })
    it('Should put action failure with a error message', () => {
        const error = faker.lorem.sentence(3)
        const current = gen.throw(new Error(error));
        expect(current.value).toEqual(
            put(Actions.listFailure(error))
            )
    })
})