import { Cell } from '../Cell'
import * as Styled from './styles'

type TRowProps = {
    index: number,
    texts: string[],
}

export const TRow = ({index, texts}: TRowProps) => {
     const sizes= [64,83,115,95,80,52,66,67]
  return (
    <Styled.Container role='trow' odd={index%2==1}>
            {
                    texts.map((text, index) => (
                        <Cell key={index} index={index} size={sizes[index]}>{text}</Cell>
                    ))
            }
        </Styled.Container>
  )
}
