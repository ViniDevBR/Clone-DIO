//COMPONENTES
import { Button } from '../Button';
//STYLED COMPONENTES
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';
//IMG
import logo from '../../assets/logo-dio.png';
import { Flags } from '../flags';
//REACT ROUTER DOM
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  autenticado?: boolean
}

export function Header(props: HeaderProps) {
  const navigate = useNavigate();
  
  function handleClickSignIn() {
    navigate('/login')
  }
  function handleClickHome() {
    navigate('/')
  }
  function handleClickSignUp() {
    navigate('/signup')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio"/>
          {props.autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
              <Flags />
            </>
          ) : null}
        </Row>
        <Row>
          {props.autenticado ? 
          ( <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>) 
          : 
          (<>  
            <MenuRight onClick={handleClickHome}>Home</MenuRight>  
            <MenuRight href="#">Catálogo</MenuRight>  
            <MenuRight href="#">Planos</MenuRight>  
            <MenuRight href="#">Para Empresas</MenuRight>  
            <Button onClick={handleClickSignIn} title="Entrar" />  
            <Button onClick={handleClickSignUp} title="Cadastrar" />
            <Flags />
          </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}
