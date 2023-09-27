import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import  * as Styled from './styles'

export const Footer = () => {
  return (
    <Styled.Container  >
        <Styled.Text role='text'>Desenvolvido por:</Styled.Text>
        <Styled.Name role='desenvolvedor'>Cledson Leite</Styled.Name>
        <Styled.Action role='action'>
            <Styled.Link 
                role='linkedin' 
                href='https://www.linkedin.com/in/cledson-leite/'
                >
                    <FaLinkedin/>
            </Styled.Link>
            <Styled.Link 
                role='github' 
                href='https://github.com/cledson-leite/'
                >
                    <FaGithubSquare />
            </Styled.Link>
        </Styled.Action>
    </Styled.Container>
  )
}
