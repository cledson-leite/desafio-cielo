import { call, put } from 'redux-saga/effects';
import { ListTransactionController } from '../../../adapters/input/list-transaction/list-transactions-controller'
import { ListTransactionUsecase } from '../../../core/use_case/list-transaction/list-transaction'
import { ListTransactionService } from '../../../adapters/output/list-transactions/list-transactions-service'
import { api } from '../../../external/api'
import * as Actions from '../../actions/list-transactions'
import { TransactionDto } from '../../../shared/dto/transaction-dto';

export const control = async () => {
    const service = new ListTransactionService(api)
    const input = new ListTransactionUsecase(service)
    const controller = new ListTransactionController(input)
    return await controller.handle()
}

export function* listRequestSaga(): Generator {
    try {
        const result = yield call(control)
        yield put(Actions.listSuccess(result as TransactionDto[]))
    } catch (error: any) {
        yield put(Actions.listFailure(error.message))
    }
   
    
}