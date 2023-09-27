import { Cell } from '../Cell'
import * as Styled from './styles'

type THeadProps = {
    texts: string[]
}


export const THead = ({texts}: THeadProps) => {
    const sizes= [64,83,115,95,80,52,66,67]
  return (
    <Styled.Container role='thead'>
            {
                    texts.map((text, index) => (
                        <Cell key={index} index={index} size={sizes[index]}>{text}</Cell>
                    ))
            }
        </Styled.Container>
  )
}
