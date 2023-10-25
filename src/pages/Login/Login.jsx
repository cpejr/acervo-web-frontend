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
import { useState, useRef } from 'react';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);

    // Obtém a posição atual do cursor
    const cursorPosition = passwordInputRef.current.selectionStart;

    if (passwordInputRef.current) {
      passwordInputRef.current.focus(); // Define o foco no input de senha

      // Define a posição do cursor novamente
      if (cursorPosition !== null) {
        passwordInputRef.current.setSelectionRange(
          cursorPosition,
          cursorPosition
        );
      }
    }
  };
  const handlePasswordChage = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Body>
      {/* <Containerall> */}
      <Title>Entrar</Title>
      <Container>
        <Control>
          <Input placeholder="  Login:" />
        </Control>

        <Control>
          <Input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="  Senha:"
            value={password}
            onChange={handlePasswordChage}
            ref={passwordInputRef}
          />
          <MyConst onClick={togglePasswordVisibility} />
        </Control>

        <ContainerIn>
          <In>Entrar</In>
        </ContainerIn>
      </Container>
      <Forgot>Esqueci minha senha</Forgot>
      {/* </Containerall> */}
    </Body>
  );
}
