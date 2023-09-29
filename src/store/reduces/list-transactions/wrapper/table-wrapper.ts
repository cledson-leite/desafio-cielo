import moment from "moment";
import { TableDataDto } from "../../../../shared/dto/table-data-dto";
import { mask } from "../../../../shared/mask";

export const tableWrapper = (json: any): TableDataDto[] => {
    return json.map(transaction => ({
        autorizar: transaction.authorizationCode,
        data: moment(transaction.date).format('DD/MM/yyyy'),
        canal: transaction.channel,
        tipo: transaction.paymentType,
        bandeira: transaction.cardBrand,
        valor_bruto: mask(transaction.grossAmount.toFixed(2)),
        valor_liquido: mask(transaction.netAmount.toFixed(2)),
        estagio: transaction.status,
    }))
}