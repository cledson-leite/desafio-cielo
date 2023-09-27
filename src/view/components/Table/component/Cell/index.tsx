import * as Styled from './styles'

type CellProps = {
    children: string,
    size: number,
    index: number
}

export const Cell = ({children, size, index}: CellProps) => {
  return (
    <Styled.Container index={index} size={size}>{children.replace('_', ' ')}</Styled.Container>
  )
}
