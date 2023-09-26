import {faker} from '@faker-js/faker'
import { Transaction } from "../../domain/transaction";

export const transactionFake: Transaction = {
    id: faker.string.uuid(),
    merchantId: faker.string.uuid(),
    paymentNode: faker.number.int(),
    cnpjRoot: faker.number.int(),
    date: faker.date.anytime(),
    paymentType: faker.finance.transactionType(),
    cardBrand: faker.lorem.word(),
    authorizationCode: faker.finance.routingNumber(),
    truncatedCardNumber: faker.finance.accountNumber({ length: 4 }),
    grossAmount: faker.number.float({precision:0.01}),
    netAmount: faker.number.float({precision:0.01}),
    terminal: faker.finance.pin({ length: 6 }),
    administrationFee: faker.number.float({precision:0.01}),
    channelCode: faker.number.int(),
    channel: faker.lorem.word(),
    withdrawAmount: faker.number.float({precision:0.01}),
    minimumMDRAmmount: faker.number.float({precision:0.01}),
    mdrTaxAmount:faker.number.float({precision:0.01}),
    mdrFeeAmount: faker.number.float({precision:0.01}),
    status: faker.lorem.word(),
}