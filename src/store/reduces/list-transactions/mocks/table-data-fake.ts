import { transactionFake } from "../../../../core/use_case/mocks/transaction-fake"
import { tableWrapper } from "../wrapper/table-wrapper"

export const tableFake = tableWrapper([transactionFake])