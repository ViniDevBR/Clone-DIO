//COMPONENTES
import { Button } from '../Button';
//STYLED COMPONENTES
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';
//IMG
import logo from '../../assets/logo-dio.png';

interface HeaderProps {
  autenticado?: boolean
}

export function Header(props: HeaderProps) {
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
            </>
          ) : null}
        </Row>
        <Row>
          {props.autenticado ? 
          ( <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>) 
          : 
          (<>  
            <MenuRight href="/">Home</MenuRight>  
            <Button title="Entrar" />  
            <Button title="Cadastrar" />
          </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}
