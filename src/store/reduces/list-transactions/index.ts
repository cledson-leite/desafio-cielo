import { AnyAction } from "redux";
import * as Types from '../../types/list-transactions'
import { modalWrapper } from "./wrapper/modal-wrapper";
import { tableWrapper } from "./wrapper/table-wrapper";

const initialState = {
    load: false,
    modal: [],
    table: [],
    error: ""
}

export const listReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case Types.LIST_REQUEST:
            return {load: true, modal: [], table: [], error: ''}
        case Types.LIST_FAILURE:
            const error = action.payload
            return {load: false, modal: [], table: [], error}
        case Types.LIST_SUCCESS:
            return {
                load: false, 
                modal: modalWrapper(action.payload), 
                table: tableWrapper(action.payload), 
                error: ''}
        default:
            state = {...initialState}
            return state
    }
    
}