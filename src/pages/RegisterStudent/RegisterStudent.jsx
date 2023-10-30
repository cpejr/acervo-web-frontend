import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

import { StudentRegisterInput } from '../../components/features';
import { Container, Button, SendButton, ButtonContainer } from './Styles';

export default function RegisterStudent() {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        onClick={() => {
          navigate('/cadastro');
        }}
      >
        <IoIosArrowBack />
      </Button>
      <StudentRegisterInput />
      <ButtonContainer>
        <SendButton>Enviar</SendButton>
      </ButtonContainer>
    </Container>
  );
}
