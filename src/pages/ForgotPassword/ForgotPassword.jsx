import { IoIosArrowBack } from 'react-icons/io';
import { Body, Button, Container, Control, Title } from './Styles';
// import { useHistory } from 'react-router-dom';
export default function ForgotPassword() {
  return (
    <Body>
      <Button
        onClick={() => {
          window.history.back();
        }}
      >
        <IoIosArrowBack />
      </Button>
      <Control>
        <Title>Como você deseja recuperar sua senha?</Title>
        <Container>
          <strong> Recuperar senha pelo e-mail</strong>
        </Container>
      </Control>
    </Body>
  );
}
