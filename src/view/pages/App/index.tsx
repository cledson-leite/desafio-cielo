import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import * as Styled from './styles'
import { Modal } from '../../components/Modal'
import { ModalProvider } from '../../provider/show-modal'

export const App = () => {
  
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
