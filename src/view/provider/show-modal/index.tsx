import { createContext, useState } from "react";
import Db from '../mocks/dbFake.json'
import { mask } from "../../../shared/mask";
import moment from "moment";

type ModalData = {
    autorizar: string,
    terminal: string,
    canal: string,
    tipo: string,
    bandeira: string,
    cc: string,
    estagio: string,
    valor_bruto: string,
    valor_liquido: string,
    disponivel: string,
    mdr_min: string,
    mdr_imposto: string,
    mdr_tax: string,
    adm_tax: string,
}
type TableData = {
    codigo: string,
    data: string,
    canal: string,
    tipo: string,
    bandeira: string,
    valor_bruto: string,
    valor_liquido: string,
    estagio: string,
}

type ContextProps = {
    idx: number,
    show: boolean,
    tableData: TableData[],
    modalData: ModalData[],
    handleShow: (index?: number) => void
}

type ProviderProps = {
    children: React.ReactNode
}

export const ModalContext = createContext<ContextProps>({
    idx: 0,
    show: false,
    tableData: [],
    modalData: [],
    handleShow: () => {}
})

export const ModalProvider = ({children}: ProviderProps) => {
    const [show, setShow] =useState(false)
    const [idx, setIdx] =useState(0)
    const handleShow = (index?: number) => {
        if(index) setIdx(index)
        setShow(!show)
    }
    const modalData: ModalData[] = Db.transactions.map(transaction => ({
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
        mdr_min: mask(transaction.minimumMDRAmmount.toString()),
        mdr_imposto: transaction.mdrFeeAmount.toString(),
        mdr_tax: transaction.mdrFeeAmount.toString(),
        adm_tax: transaction.administrationFee.toString(),
    }))
    const tableData: TableData[] = Db.transactions.map(transaction => ({
        codigo: transaction.authorizationCode,
        data: moment(transaction.date).format('DD/MM/yyyy'),
        canal: transaction.channel,
        tipo: transaction.paymentType,
        bandeira: transaction.cardBrand,
        valor_bruto: mask(transaction.grossAmount.toFixed(2)),
        valor_liquido: mask(transaction.netAmount.toFixed(2)),
        estagio: transaction.status,
    }))
    return (
       < ModalContext.Provider value={{
            show,
            handleShow,
            idx,
            tableData,
            modalData
        }}>
        {children}
       </ModalContext.Provider>
    )
}