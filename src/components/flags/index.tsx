//STYLED-COMPONENTS
import { ContainerFlags, Button } from "./styles";
//IMG
import BrasilFlag from '../../assets/brasil.svg'
import EuaFlag from '../../assets/eua.svg'
import EspanhaFlag from '../../assets/espanha.svg'


export function Flags() {
  return(
    <ContainerFlags>
      <Button filter="1">
        <img src={BrasilFlag} alt="Selecionar idioma portugues brasil" />
      </Button>
      <Button filter='2'>
        <img src={EuaFlag} alt="Selecionar idioma ingles" />
      </Button>
      <Button filter='2'>
        <img src={EspanhaFlag} alt="Selecionar idioma espanhol" />
      </Button>
    </ContainerFlags>
  )
}