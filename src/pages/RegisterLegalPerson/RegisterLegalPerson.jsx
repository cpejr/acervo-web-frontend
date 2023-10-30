import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

import { LegalRegisterInput } from '../../components/features';
import { Container, Button, SendButton, ButtonContainer } from './Styles';

export default function RegisterLegalPerson() {
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
      <LegalRegisterInput />
      <ButtonContainer>
        <SendButton>Enviar</SendButton>
      </ButtonContainer>
    </Container>
  );
}
