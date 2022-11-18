//REACT ROUTER DOM
import { useNavigate  } from "react-router-dom";
//COMPONENTES
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
//STYLED-COMPONENTS
import { Container, Title, TitleHighlight, TextContent, TitleContainer } from './styles';

export function Home() {
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate('/login')
  }

  return (<>
    <Header />
    <Container>
      <TitleContainer>
        <Title>
          <TitleHighlight>
            Implemente <br />
          </TitleHighlight>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="terciary" onClick={handleClickSignIn}/>
      </TitleContainer>
    </Container>
  </>)
}