// import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

import { PhysicalRegisterInput } from '../../components/features';
import { Container, Button, SendButton, ButtonContainer } from './Styles';

export default function RegisterPhysicalPerson() {
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
      <PhysicalRegisterInput />
      <ButtonContainer>
        <SendButton>Enviar</SendButton>
      </ButtonContainer>
    </Container>
  );
}
