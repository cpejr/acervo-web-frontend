// import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router';

import {
  Container,
  Info,
  Input,
  Button,
  SendButton,
  ButtonContainer,
} from './Styles';

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
      <Info>
        <p1>
          Nome:
          <Input />
        </p1>
        <p1>
          Profissão/atividade: <Input />
        </p1>
        <p1>
          CPF: <Input />
        </p1>
        <p1>
          RG: <Input />
        </p1>
        <p1>
          Data de nascimento: <Input />
        </p1>
        <p1>
          CEP: <Input />
        </p1>
        <p1>
          Estado: <Input />
        </p1>
        <p1>
          Cidade: <Input />
        </p1>
        <p1>
          Bairro: <Input />
        </p1>
        <p1>
          Rua: <Input />
        </p1>
        <p1>
          Número: <Input />
        </p1>
        <p1>
          Complemento: <Input />
        </p1>
        <p1>
          Celular: <Input />
        </p1>
        <p1>
          Email: <Input />
        </p1>
      </Info>
      <ButtonContainer>
        <SendButton>Enviar</SendButton>
      </ButtonContainer>
    </Container>
  );
}
