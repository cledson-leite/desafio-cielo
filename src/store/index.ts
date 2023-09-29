import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./reduces/list-transactions";
import { rootSaga } from "./sagas/list-transactions";
import { TableDataDto } from "../shared/dto/table-data-dto";
import { ModalDataDto } from "../shared/dto/modal-data-dto";

type State = {
    load: boolean,
    modal: ModalDataDto[],
    table: TableDataDto[],
    error: string
}

export  type RootState = {
  transactions: State
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    transactions: listReducer
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga)