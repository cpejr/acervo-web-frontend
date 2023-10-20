import {
  Body,
  Container,
  In,
  Title,
  Input,
  Forgot,
  ContainerIn,
} from './Styles';

export default function Login() {
  return (
    <Body>
      <Title>Entrar</Title>
      <Container>
        <Input placeholder="Login" />
        <Input placeholder="Senha" />
        <ContainerIn>
          <In>Entrar</In>
        </ContainerIn>
      </Container>
      <Forgot>Esqueci minha senha</Forgot>
    </Body>
  );
}
