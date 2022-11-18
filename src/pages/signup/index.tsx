//COMPONENTES
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
//STYLED-COMPONENTS
import { DivGradient, Title } from '../login/styles'
import { Column, ContainerSignUp, GoBackLogin, TitleSignUp, SubtitleSignUp, Declarations, Wrapper, GoBackLogin2 } from './styles'
//REACT ICONS
import { BsFillPersonFill, MdEmail, MdLock, IoPhonePortraitOutline } from 'react-icons/all'
//HOOK FORM and YUP
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//BACK END
import { api } from '../../services/api'
//ROUTER DOM
import { useNavigate } from 'react-router-dom'


const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required('Campo Obrigatótio').email('E-mail não é valido'),
  senha: yup.string().min(6, 'Senha Invalida').required('Campo Obrigatótio'),
  phone: yup.number().required().min(11, 'Não esta faltando algum numero?')
}).required();


export function SignUp() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors }} = useForm<FieldValues>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange'
  })

  const onSubmit = handleSubmit(data => console.log(data));

  // async function onSubmit(formData: any) {
  //   try {
  //     const { data } = await api.get(
  //       `/users?email=${formData.email}&senha=${formData.senha}`
  //     )

  //     if (data.length && data[0].id) {
  //       navigate('/feed')
  //       return
  //     }
  //     alert('Usuário ou senha inválido')
  //   } catch (error) {
  //     console.log('errors', error)
  //     //TODO: HOUVE UM ERRO
  //   }
  // }

  function handlelogin(){
    navigate('/login')
  }

  return (
    <>
      <Header />
      <ContainerSignUp>
        <Column>
          <DivGradient />
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>

          <GoBackLogin onClick={handlelogin} >VOLTAR PARA LOGIN</GoBackLogin>
        </Column>
        
        
        <Column>
          <Wrapper>
            <DivGradient />
            <TitleSignUp>Comece agora grátis</TitleSignUp>
            <SubtitleSignUp>Faça seu login e make the change._</SubtitleSignUp>

            <form onSubmit={onSubmit}>
              <Input
                required
                placeholder="Nome completo"
                leftIcon={<BsFillPersonFill color='#8747af'/>}
                name="name"
                control={control}
              />
              <Input
                required
                placeholder="Seu melhor @e-mail"
                leftIcon={<MdEmail color='#8747af'/>}
                name="email"
                control={control}
                type='email' 
              />
              <Input
                required
                placeholder="Celular ex.: (11) 12345-6789"
                leftIcon={<IoPhonePortraitOutline color='#8747af'/>}
                name="email"
                control={control}
                type='tel' 
              />

              {/* {errors.email && <span>E-mail é obrigatório</span>} */}

              <Input
                required
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock color='#8747af'/>}
                name="senha"
                control={control}
              />

              {/* {errors.senha && <span>Senha é obrigatório</span>} */}

              <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
            </form>

            <Declarations>
              Ao clicar em "criar minha conta grátis", declaro que aceito as <a href="#">Políticas de Privacidade</a>  e os <a href="#">Termos de Uso </a>da DIO.
            </Declarations>

            <GoBackLogin2>
              Já tenho conta. <a onClick={handlelogin}>Fazer login.</a> 
            </GoBackLogin2>
          </Wrapper>
        </Column>
      </ContainerSignUp>
    </>
  )
}
