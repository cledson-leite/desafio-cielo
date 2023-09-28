import { useContext } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { ModalContext } from '../../../../provider/show-modal'
import * as Styled from './styles'

export const Title = () => {
    const {handleShow} = useContext(ModalContext)

  return (
    <Styled.Container>
        <FaChevronLeft onClick={() => handleShow()}/>
        Detalhamento
    </Styled.Container>
  )
}
