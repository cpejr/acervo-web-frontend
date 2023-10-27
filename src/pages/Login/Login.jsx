import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Body,
  Container,
  In,
  Input,
  Forgot,
  ContainerIn,
  MyConst,
  Control,
} from './Styles';

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordInputRef = useRef(null);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);

    const cursorPosition = passwordInputRef.current.selectionStart;

    if (passwordInputRef.current) {
      passwordInputRef.current.focus();

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
      <Forgot
        onClick={() => {
          navigate('/esqueci-minha-senha');
        }}
      >
        Esqueci minha senha
      </Forgot>
    </Body>
  );
}
