//COMPONENTES
import { Button } from '../Button';
import { DropDown } from '../DropDown';
import { PopOver } from '../PopOver';
//STYLED COMPONENTES
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture, UserDetails } from './styles';
//IMG
import logo from '../../assets/logo-dio.png';
import { Flags } from '../flags';
//REACT ROUTER DOM
import { useNavigate } from 'react-router-dom';
//REACT ICONS
import { BsSearch } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io';

interface HeaderProps {
  autenticado?: boolean
}

export function Header({autenticado = false}: HeaderProps) {
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
    <Wrapper auth={autenticado}>
      <Container>
        <Row>
          <img src={logo} alt="Logo da dio"/>

          {autenticado ? (
            <>
              <BuscarInputContainer>
                <BsSearch  color='#fff'/>
                <Input  placeholder='Pesquisar'/>
              </BuscarInputContainer>
              <Menu>Play</Menu>
              <Menu option='yellow'>Global</Menu>
              <Menu option='yellow'>English4Tech</Menu>
              <Menu>Artigos</Menu>
              <Menu>Rooms</Menu>
              <Menu option='green'>Seja Premium</Menu>
              
            </>
          ) : null}

        </Row>

        <Row>
          {autenticado ? 
          (
            <UserDetails>
              <IoIosNotifications size={30} color='#FFF'/>
              <PopOver />
              <DropDown /> 
            </UserDetails>
          ) 
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
