import { useSelector } from 'react-redux'
import { Cell } from '../Cell'
import * as Styled from './styles'
import { RootState } from '../../../../../store'


export const THead = () => {
  const {table} = useSelector((state: RootState) => state.transactions)
  const sizes= [64,83,115,95,80,66,66,67]
    const texts = {
    autorizar: 'Codigo',
    data: 'Data',
    canal: 'Canal',
    tipo: 'Tipo',
    bandeira: 'Bandeira',
    valor_bruto: 'Valor Bruto',
    valor_liquido: 'Valor Liquido',
    estagio: 'Estágio',
    }
    const getTexts = (): string[] => {
        if(table.length){
            const keys = Object.keys(
            table[0]).filter(key => Object.keys(texts).includes(key)
            )
            return keys.map(key => texts[key])
        }
        return ['']
    }
  return (
    <Styled.Container role='thead'>
            {
                    getTexts().map((text, index) => (
                        <Cell key={index} index={index} size={sizes[index]}>{text}</Cell>
                    ))
            }
        </Styled.Container>
  )
}
