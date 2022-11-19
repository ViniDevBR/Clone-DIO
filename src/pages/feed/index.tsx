//COMPONENTES
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';
//STYLED-COMPONENTS
import { Container, Column, Title, TitleHighlight } from './styles';

const UserInfos = [
  {
    id: 1,
    name: 'Vinicius Celestino',
    image: 'https://avatars.githubusercontent.com/u/106121034?v=4',
    percentual: 100
  },
  {
    id: 2,
    name: 'Mateus Silva',
    image: 'https://avatars.githubusercontent.com/u/40677854?v=4',
    percentual: 50
  },
  {
    id: 3,
    name: 'Diego Fernandes',
    image: 'https://avatars.githubusercontent.com/u/2254731?v=4',
    percentual: 25
  },
  {
    id: 4,
    name: 'Pablo Henrique',
    image: 'https://avatars.githubusercontent.com/u/45184516?v=',
    percentual: 0
  },
]

const cardInfos = [
  {
    id: 1,
    image: 'https://c4.wallpaperflare.com/wallpaper/111/745/193/reactjs-javascript-programming-programming-language-hd-wallpaper-preview.jpg',
    avatarUrl: UserInfos[0].image,
    name: UserInfos[0].name,
    time: 'Há 10 minutos',
    postTitle: 'Trabalhando com ReactJs',
    postDescripition: 'Projeto realizado no desafio.',
    techs: '#REACT #TYPESCRIPT',
    likes: 10
  },
  {
    id: 2,
    image: 'https://wallpaperaccess.com/full/7990038.png',
    avatarUrl: UserInfos[1].image,
    name: UserInfos[1].name,
    time: 'Há 1 hora',
    postTitle: 'Tipando com TypeScript',
    postDescripition: 'Elevando o nivel de seu JavaScript.',
    techs: '#JAVASCRIPT #TYPESCRIPT',
    likes: 50
  },
  {
    id: 3,
    image: 'https://miro.medium.com/max/880/0*7c5ocYZfhiZH4Rc0.png',
    avatarUrl: UserInfos[2].image,
    name: UserInfos[2].name,
    time: 'Há 1 hora e 20 minutos',
    postTitle: 'Iniciando com React Native',
    postDescripition: 'Curso para iniciantes em React Native.',
    techs: '#REACTNATIVE #TYPESCRIPT',
    likes: 100
  },
  {
    id: 4,
    image: 'https://www.workato.com/product-hub/wp-content/uploads/2020/12/workato-blog-JavaScript-20201208-bl-01.jpg',
    avatarUrl: UserInfos[3].image,
    name: UserInfos[3].name,
    time: 'Há 2 horas',
    postTitle: 'Iniciando em JavaScript',
    postDescripition: 'Curso para iniciantes em JavaScript.',
    techs: '#JAVASCRIPT',
    likes: 20
  },
]

export function Feed() {
  return (
    <>
      <Header autenticado={true}/>
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            {cardInfos.map(info => {return(
              <Card 
                key= {info.id}
                image= {info.image}
                name= {info.name}
                avatarUrl= {info.avatarUrl} 
                postTitle= {info.postTitle}
                postDescripition= {info.postDescripition}
                time= {info.time}
                techs= {info.techs}
                likes= {info.likes}
              />
            )})}
          </Column>
          <Column flex={1}>
            <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
              
              {UserInfos.map(info => { return(
                <UserInfo 
                  key= {info.id}
                  nome= {info.name}
                  image= {info.image}
                  percentual= {info.percentual}
                />
              )})}
            
          </Column>
      </Container>
    </>
  )
}
