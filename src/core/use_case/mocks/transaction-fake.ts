import {faker} from '@faker-js/faker'
import { Transaction } from "../../domain/transaction";

export const transactionFake: Transaction = {
    id: faker.string.uuid(),
    merchantId: faker.string.uuid(),
    paymentNode: faker.number.int(),
    cnpjRoot: faker.number.int(),
    date: faker.date.anytime(),
    authorizationCode: faker.finance.routingNumber(),
    terminal: faker.finance.pin({ length: 6 }),
    channel: faker.lorem.word(),
    paymentType: faker.finance.transactionType(),
    cardBrand: faker.lorem.word(),
    truncatedCardNumber: faker.finance.accountNumber({ length: 4 }),
    status: faker.lorem.word(),
    grossAmount: faker.number.float({precision:0.01}),
    netAmount: faker.number.float({precision:0.01}),
    withdrawAmount: faker.number.float({precision:0.01}),
    channelCode: faker.number.int(),
    minimumMDRAmmount: faker.number.float({precision:0.01}),
    mdrTaxAmount:faker.number.float({precision:0.01}),
    mdrFeeAmount: faker.number.float({precision:0.01}),
    administrationFee: faker.number.float({precision:0.01}),
}