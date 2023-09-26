import { TransactionDto } from '../../../shared/dto/transaction-dto'
import * as Types from '../../types/list-transactions'

export const listRequest = () => ({type: Types.LIST_REQUEST})
export const listFailure = (payload: string) => ({
    type: Types.LIST_FAILURE,
    payload
})
export const listSuccess = (payload: TransactionDto[]) => ({
    type: Types.LIST_SUCCESS,
    payload
})