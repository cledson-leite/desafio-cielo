import * as Styled from './styles'

type CardProps = {
    value: string,
    title:string
}

export const Card = ({value, title}: CardProps) => {
  return (
    <Styled.Container >
           <Styled.CellHead>{title}</Styled.CellHead>
            {value}
    </Styled.Container>
  )
}
