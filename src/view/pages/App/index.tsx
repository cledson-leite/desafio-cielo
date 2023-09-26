import { Header } from '../../components/Header'
import * as Styled from './styles'

export const App = () => {
  return (
    <Styled.Container >
      <Styled.Content  role='content'>
        <Styled.TopBar role='topBar'><Header /></Styled.TopBar>
        <Styled.Main role='main'></Styled.Main>
        <Styled.BottonBar role='bottonBar'></Styled.BottonBar>
      </Styled.Content>
    </Styled.Container>
  )
}
