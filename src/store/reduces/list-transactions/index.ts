import { AnyAction } from "redux";
import * as Types from '../../types/list-transactions'

const initialState = {
    load: false,
    list: [],
    error: ""
}

export const listReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case Types.LIST_REQUEST:
            return {load:true, list: [], error: ''}
        case Types.LIST_FAILURE:
            const error = action.payload
            return {load:false, list: [], error}
        case Types.LIST_SUCCESS:
            const list = action.payload
            return {load:false, list, error: ''}
        default:
            state = {...initialState}
            return state
    }
    
}