import { useContext } from 'react';
import { Card } from '../Card'
import * as Styled from './styles'
import { ModalContext } from '../../../../provider/show-modal'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store'

export const Row = () => {
    const {modal} = useSelector((state: RootState) => state.transactions)
    const {idx, show} = useContext(ModalContext)
    const titles = {
    data: 'Data',
    autorizar: 'Codigo de Autorização',
    terminal: 'Terminal',
    canal: 'Canal',
    tipo: 'Tipo Pagamento',
    bandeira: 'Bandeira',
    cc: 'CC - Final',
    estagio: 'Estágio',
    valor_bruto: 'Valor Bruto',
    valor_liquido: 'Valor Liquido',
    disponivel: 'Disponível para Saque',
    mdr_min: 'MDR Mínimo',
    mdr_imposto: 'Imposto MDR',
    mdr_tax: 'Taxa MDR',
    adm_tax: 'Taxa ADM',
  }
  const modalKeys:string[]  = modal[idx] ? Object.keys(modal[idx]) : []
  return (
    <Styled.Container show={show}>
      {
        modalKeys.map( (key: string, index) => {
          const keyCreated = index
          const title = titles[key]
          const value = modal[idx][key]
          return <Card
                key={keyCreated}
                value={value}
                title={title}
                />
        })
      }
    </Styled.Container>
  )
}
