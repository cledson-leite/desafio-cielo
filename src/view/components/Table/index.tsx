import { useContext } from 'react'
import { TRow } from './component/TRow'
import { THead } from './component/Thead'
import * as Styled from './styles'
import { ModalContext } from '../../provider/show-modal'


export const Table = () => {
    const {tableData} = useContext(ModalContext)
    const texts = {
    codigo: 'Codig',
    data: 'Data',
    canal: 'Canal',
    tipo: 'Tipo',
    bandeira: 'Bandeira',
    valor_bruto: 'Valor Bruto',
    valor_liquido: 'Valor Liquido',
    estagio: 'Estágio',
    }
    const getTexts = (): string[] => {
        return Object.keys(
            tableData[0]).filter(key => Object.keys(texts).includes(key)
            )
    }
  return (
    <Styled.Container>
        <THead texts={getTexts()} />
        <Styled.TBody>
            {
                tableData.map((cell, index) => (
                    <TRow 
                        key={index} 
                        index={index} 
                        texts={Object.values(cell)}
                    />
                ))
            }
        </Styled.TBody>
    </Styled.Container>
  )
}
