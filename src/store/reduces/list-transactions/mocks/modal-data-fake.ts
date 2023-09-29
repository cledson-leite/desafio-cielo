import { transactionFake } from "../../../../core/use_case/mocks/transaction-fake"
import { modalWrapper } from "../wrapper/modal-wrapper"

export const modalFake = modalWrapper([transactionFake])