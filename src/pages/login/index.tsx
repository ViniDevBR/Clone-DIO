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
//HOOK FORM
import { FieldValues, useForm } from 'react-hook-form'
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
  Wrapper
} from './styles'

interface FormValues {
  email: string
  senha: string
}

export function Login() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors }} = useForm<FieldValues, FormValues>({
    reValidateMode: 'onChange',
    mode: 'onChange'
  })

  async function onSubmit(formData: any) {
    try {
      const { data } = await api.get(
        `/users?email=${formData.email}&senha=${formData.senha}`
      )

      if (data.length && data[0].id) {
        navigate('/feed')
        return
      }
      alert('Usuário ou senha inválido')
    } catch (error) {
      console.log('errors', error)
      //TODO: HOUVE UM ERRO
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail />}
                name="email"
                control={control}
              />

              {errors.email && <span>E-mail é obrigatório</span>}

              <Input
                type="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                name="senha"
                control={control}
              />

              {errors.senha && <span>Senha é obrigatório</span>}

              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
