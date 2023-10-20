import {
  Body,
  Container,
  In,
  Title,
  Input,
  Forgot,
  ContainerIn,
  Containerp,
} from './Styles';

export default function Login() {
  return (
    <Body>
      <Title>Login</Title>
      <Container>
        <Containerp>
          <Input placeholder="  Login:" />
          <Input type="password" placeholder="  Senha:" />
        </Containerp>
        <ContainerIn>
          <In>Entrar</In>
        </ContainerIn>
      </Container>
      <Forgot>Esqueci minha senha</Forgot>
    </Body>
  );
}
