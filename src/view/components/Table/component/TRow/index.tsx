import { useContext } from 'react';
import { ModalContext } from '../../../../provider/show-modal';
import { Cell } from '../Cell'
import * as Styled from './styles'

type TRowProps = {
    index: number,
    texts: string[],
}

export const TRow = ({index, texts}: TRowProps) => {
    const {handleShow} = useContext(ModalContext)
     const sizes= [64,83,115,95,80,52,66,67]
  return (
    <Styled.Container 
        odd={(index+1)%2==1} 
        onClick={() => handleShow(index)}
        >
            {
                texts.map((text, index) => (
                    <Cell 
                        key={index} 
                        index={index} 
                        size={sizes[index]}
                    >
                        {text}
                    </Cell>
                ))
            }
        </Styled.Container>
  )
}
