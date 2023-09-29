import moment from "moment";
import { ModalDataDto } from "../../../../shared/dto/modal-data-dto";
import { mask } from "../../../../shared/mask";

export const modalWrapper = (json: any): ModalDataDto[] => {
    return json.map(transaction => ({
        data: moment(transaction.date).format('DD/MM/yyyy'),
        autorizar: transaction.authorizationCode,
        terminal: transaction.terminal,
        canal: transaction.channel,
        tipo: transaction.paymentType,
        bandeira: transaction.cardBrand,
        valor_bruto: mask(transaction.grossAmount.toFixed(2)),
        valor_liquido: mask(transaction.netAmount.toFixed(2)),
        estagio: transaction.status,
        cc: transaction.truncatedCardNumber,
        disponivel: mask(transaction.withdrawAmount.toFixed(2)),
        mdr_min: mask(transaction.minimumMDRAmmount.toFixed(2)),
        mdr_imposto: mask(transaction.mdrFeeAmount.toFixed(2)),
        mdr_tax: mask(transaction.mdrFeeAmount.toFixed(2)),
        adm_tax: mask(transaction.administrationFee.toFixed(2)),
    }))
}