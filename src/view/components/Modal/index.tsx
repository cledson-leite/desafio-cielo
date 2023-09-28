import { useContext } from 'react';
import { ModalContext } from '../../provider/show-modal';
import * as Styled from './styles'
import { Title } from './component/Title';
import { Row } from './component/Row';

export const Modal = () => {
  const {show} = useContext(ModalContext)
  return (
    <Styled.Container show={show} >
      <Title />
      <Row />
    </Styled.Container>
  )
}
