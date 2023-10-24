// import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from 'react-icons/io';

import { LogoDespacho } from '../../assets/home';
import {
  Image,
  Container,
  Header,
  Text,
  Line,
  Info,
  Input,
  Button,
  SendButton,
  ButtonContainer,
} from './Styles';

export default function RegisterPhysicalPerson() {
  return (
    <Container>
      <Header>
        <Line>
          <Image>
            <img src={LogoDespacho} alt="logo branca" />
          </Image>
          <Text>Cadastro de Pessoa Física</Text>
        </Line>
      </Header>
      <Button>
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
