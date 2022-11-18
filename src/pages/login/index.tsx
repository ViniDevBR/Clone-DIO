//REACT ROUTER DOM
import { useNavigate } from 'react-router-dom'
//REACT ICONS
import { MdEmail, MdLock } from 'react-icons/md'
//COMPONENTS
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
//API
import { api } from '../../services/api'
//HOOK FORM and YUP
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//STYLED COMPONENTS
import {
  Container,
  Title,
  Column,
  TitleLogin,
  SubtitleLogin,
  EsqueciText,
  CriarText,
  Row,
  Wrapper,
  DivGradient,
  ErrorText
} from './styles'

type FormValues = {
  email: string
  senha: string
}

const schema = yup.object({
  email: yup.string().required('Campo Obrigatótio').email('E-mail não é valido'),
  senha: yup.string().min(6, 'Senha Invalida').required('Campo Obrigatótio'),
}).required();

export function Login() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid }} = useForm<FieldValues, FormValues>({
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    mode: 'onBlur'
  })
  console.log(errors, isValid)

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

  function handleClickSignUp(){
    navigate('/signup')
  }
  function handleClickFeed() {
    navigate('/feed')
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <DivGradient />
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <DivGradient />
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

            <form onSubmit={onSubmit}>
              <Input
                required
                placeholder="E-mail"
                leftIcon={<MdEmail color='#8747af'/>}
                name="email"
                control={control}
              />

              {errors.email?.message && <ErrorText>E-mail inválido</ErrorText>}

              <Input
                required
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock color='#8747af'/>}
                name="senha"
                control={control}
              />

              {errors.senha?.message && <ErrorText>Campo Obrigatótio</ErrorText>}

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText href='#'>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickSignUp}>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
