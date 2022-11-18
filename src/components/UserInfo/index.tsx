//STYLED-COMPONENTS
import { Container, NameText, Progress, UserPicture} from './styles';

interface Props {
  percentual: number
  nome: string
  image: string
}

export function UserInfo(props: Props) {
  return (
    <Container>
      <UserPicture src={props.image} />
        <div>
          <NameText>{props.nome}</NameText>
          <Progress percentual={props.percentual} />
        </div>
    </Container>
  )
}