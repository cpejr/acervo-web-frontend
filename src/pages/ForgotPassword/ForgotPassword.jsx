import { Body, Container, Title } from './Styles';
import { useState, useRef } from 'react';

export default function ForgotPassword() {
  return (
    <Body>
      <Title>Como você deseja recuperar sua senha?</Title>
      <Container>
        <b> Recuperar senha pelo e-mail</b>
      </Container>
    </Body>
  );
}
