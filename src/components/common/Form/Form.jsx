import React from 'react';

import {
  Container,
  InputContainer,
  InputWrapper,
  Label,
  Input,
} from './Styles';

export default function Form() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={handleNomeChange}
            placeholder=" "
          />
          <Label htmlFor="nome">Nome:</Label>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputWrapper>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder=" "
          />
          <Label htmlFor="email">Email:</Label>
        </InputWrapper>
      </InputContainer>
    </Container>
  );
}
