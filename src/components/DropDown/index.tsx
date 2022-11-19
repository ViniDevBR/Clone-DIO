//RADIX UI
import { Root, Trigger, Portal, Content, Item, Separator } from '@radix-ui/react-dropdown-menu';
//REACT ICONS
import { FaChevronDown } from 'react-icons/fa'
//ROUTER DOM
import { useNavigate } from 'react-router-dom';
//STYLES
import { UserPicture, OpenMenu } from './styles';
import './styles.css'


export function DropDown() {
  const navigate = useNavigate()

  function hadleClickLogout() {
    navigate('/login')
  }

  return(
    <Root>
      <Trigger asChild>
        <OpenMenu>
          <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
          <FaChevronDown color='#fff'/>
        </OpenMenu>
      </Trigger>

      <Portal>
        <Content className="DropdownMenuContent">
          <Item className="DropdownMenuItem">
            Perfil
          </Item>
          <Item className="DropdownMenuItem">
            Oportunidade
          </Item>
          <Item className="DropdownMenuItem">
            Certificados
          </Item>
          <Item className="DropdownMenuItem">
            Assinatura
          </Item>
          <Item className="DropdownMenuItem">
            Precisa de ajuda?
          </Item>

          <Separator className="DropdownMenuSeparator" />
          <Item onClick={hadleClickLogout} className="DropdownMenuItem">
            Sair
          </Item>
  
        </Content>
      </Portal>
    </Root>
  )
}