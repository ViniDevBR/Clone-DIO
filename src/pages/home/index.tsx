//REACT ROUTER DOM
import { useNavigate  } from "react-router-dom";
//IMG
import bannerImage from '../../assets/banner.png'
//COMPONENTES
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
//STYLED-COMPONENTS
import { Container, Title, TitleHighlight, TextContent } from './styles';

export function Home() {
  const navigate = useNavigate();

  function handleClickSignIn() {
    navigate('/login')
  }

  return (<>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente <br />
          </TitleHighlight>
          o seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
      </div>
      <div>
        <img src={bannerImage} alt="Imagem principal do site." />
      </div>
    </Container>
  </>)
}