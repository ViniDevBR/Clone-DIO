import { FiThumbsUp } from 'react-icons/fi'
import { 
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from './styles'

interface Props {
  image: string
  avatarUrl: string
  name: string
  time: string
  postTitle: string
  postDescripition: string
  techs: string
  likes: number
}

export function Card(props: Props) {
  return (
    <CardContainer>
      <ImageBackground src={props.image}/>
      <Content>
        <UserInfo>
          <UserPicture src={props.avatarUrl}/>
          <div>
            <h4>{props.name}</h4>
            <p>{props.time}</p>
          </div> 
        </UserInfo>
        <PostInfo>
          <h4>{props.postTitle}</h4>
          <p>{props.postDescripition}<strong>Saiba Mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>{props.techs}</h4>
          <p>
            <FiThumbsUp />{props.likes}
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
