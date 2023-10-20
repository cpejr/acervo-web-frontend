import {
  Body,
  Container,
  In,
  Title,
  Input,
  Forgot,
  ContainerIn,
  MyConst,
  Control,
} from './Styles';

export default function Login() {
  return (
    <Body>
      <Title>Entrar</Title>
      <Container>
        <Control>
          <Input placeholder="  Login:" />
        </Control>

        <Control>
          <Input placeholder="  Senha:" />
          <MyConst />

        </Control>

        <ContainerIn>
          <In>Entrar</In>
        </ContainerIn>
      </Container>
      <Forgot>Esqueci minha senha</Forgot>
    </Body>
  );
}
