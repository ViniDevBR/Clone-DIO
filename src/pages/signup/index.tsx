//COMPONENTES
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
//STYLED-COMPONENTS
import { DivGradient, Title } from '../login/styles'
import { Column, ContainerSignUp, GoBackLogin, TitleSignUp, SubtitleSignUp, Declarations, Wrapper, GoBackLogin2, ErrorText } from './styles'
//REACT ICONS
import { BsFillPersonFill, MdEmail, MdLock, IoPhonePortraitOutline } from 'react-icons/all'
//HOOK FORM and YUP
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//BACK END
import { api } from '../../services/api'
//ROUTER DOM
import { useNavigate } from 'react-router-dom'

interface FormSignUp {
  email: string
  name: string
  senha: string
  phone: string
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required('Campo Obrigatótio').email('E-mail não é valido'),
  senha: yup.string().min(6, 'Senha Invalida').required('Campo Obrigatótio'),
  phone: yup.string().required().min(11, 'Não esta faltando algum numero?')
}).required();


export function SignUp() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors }} = useForm<FormSignUp>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onChange'
  })
  
  const onSubmit: SubmitHandler<FormSignUp> = async(formData: FormSignUp) => {
    try {
      const { data } = await api.post('', {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone,
        senha: formData.senha.trim(),
      })
     
      if(data.id){
        alert('Usuario criado com sucesso!')
        navigate('/login')
      } else {
        alert('Não foi possivel criar usuario')
      }

    } catch (error) {
        console.log('errors ===>', error)
        alert('Não foi possivel criar usuario')
    }
  }

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                required
                placeholder="Nome completo"
                leftIcon={<BsFillPersonFill color='#8747af'/>}
                name="name"
                control={control}
              />
              {errors.name && <ErrorText>Nome é obrigatório</ErrorText>}
              <Input
                required
                placeholder="Seu melhor @e-mail"
                leftIcon={<MdEmail color='#8747af'/>}
                name="email"
                control={control}
                type='email' 
              />
              {errors.email && <ErrorText>E-mail é obrigatório</ErrorText>}
              <Input
                required
                placeholder="Celular ex.: (11) 12345-6789"
                leftIcon={<IoPhonePortraitOutline color='#8747af'/>}
                name="phone"
                control={control}
                type='tel' 
              />
              {errors.phone && <ErrorText>Não esta faltando algum numero?</ErrorText>}
              <Input
                required
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock color='#8747af'/>}
                name="senha"
                control={control}
              />
              {errors.senha && <ErrorText>Senha é obrigatório</ErrorText>}

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
