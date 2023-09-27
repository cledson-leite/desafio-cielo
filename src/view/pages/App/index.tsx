import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import * as Styled from './styles'

export const App = () => {
  return (
    <Styled.Container >
      <Styled.Content  role='content'>
        <Styled.TopBar role='topBar'><Header /></Styled.TopBar>
        <Styled.Main role='main'><Table /></Styled.Main>
        <Styled.BottonBar role='bottonBar'><Footer/></Styled.BottonBar>
      </Styled.Content>
    </Styled.Container>
  )
}
