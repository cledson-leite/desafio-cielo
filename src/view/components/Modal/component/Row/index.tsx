import { useContext } from 'react'
import { Card } from '../Card'
import * as Styled from './styles'
import { ModalContext } from '../../../../provider/show-modal'

export const Row = () => {
    const {idx, modalData, show} = useContext(ModalContext)
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
  return (
    <Styled.Container show={show}>
      {
        Object.keys(modalData[idx]).map( (key, index) => (
          <Card
            key={index}
            value={modalData[idx][key]}
            title={titles[key]}
            />
        ))
      }
    </Styled.Container>
  )
}
