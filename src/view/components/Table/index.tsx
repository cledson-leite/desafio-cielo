import { useSelector } from 'react-redux'
import { RootState } from '../../../store'

import { TRow } from './component/TRow'
import { THead } from './component/Thead'

import * as Styled from './styles'


export const Table = () => {
    const {table} = useSelector((state: RootState) => state.transactions)
  return (
    <Styled.Container>
        <THead />
        <Styled.TBody>
            {
                table
                   ? table.map((cell, index) => (
                        <TRow 
                            key={index} 
                            index={index} 
                            texts={Object.values(cell)}
                        />
                    ))
                    : <TRow 
                            key={1} 
                            index={0} 
                            texts={['nada a acrecentar']}
                        />
            }
        </Styled.TBody>
    </Styled.Container>
  )
}
