import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import * as Styled from './styles'
import { Modal } from '../../components/Modal'
import { ModalProvider } from '../../provider/show-modal'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { listRequest } from '../../../store/actions/list-transactions'

export const App = () => {
  const dispcth = useDispatch()
  useEffect(() => {
    dispcth(listRequest())
  }, [])
  return (
    <Styled.Container >
      <Styled.Content  role='content'>
        <Styled.TopBar role='topBar' ><Header /></Styled.TopBar>
        <ModalProvider>
          <Styled.Main role='main'>
            <Table />
            <Modal/>
          </Styled.Main>
          </ModalProvider>
        <Styled.BottonBar role='bottonBar'><Footer/></Styled.BottonBar>
      </Styled.Content>
    </Styled.Container>
  )
}
