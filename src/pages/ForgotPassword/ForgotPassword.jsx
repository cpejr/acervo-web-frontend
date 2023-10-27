import { IoIosArrowBack } from 'react-icons/io';
import { Body, Button, Container, Control, Title } from './Styles';
import { useNavigate } from 'react-router-dom';
export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <Body>
      <Button
        onClick={() => {
          navigate('/');
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
