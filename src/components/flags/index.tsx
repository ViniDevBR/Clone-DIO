//STYLED-COMPONENTS
import { ContainerFlags, Button } from "./styles";
//IMG
import BrasilFlag from '../../assets/brasil.svg'
import EuaFlag from '../../assets/eua.svg'
import EspanhaFlag from '../../assets/espanha.svg'


export function Flags() {
  return(
    <ContainerFlags>
      <Button filter>
        <img src={BrasilFlag} alt="Selecionar idioma portugues brasil" />
      </Button>
      <Button filter={false}>
        <img src={EuaFlag} alt="Selecionar idioma ingles" />
      </Button>
      <Button filter={false}>
        <img src={EspanhaFlag} alt="Selecionar idioma espanhol" />
      </Button>
    </ContainerFlags>
  )
}