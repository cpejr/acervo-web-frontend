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

export default function RegisterStudent() {
  return (
    <Container>
      <Header>
        <Line>
          <Image>
            <img src={LogoDespacho} alt="logo branca" />
          </Image>
          <Text>Cadastro de Aluno</Text>
        </Line>
      </Header>
      <Button>
        <IoIosArrowBack />
      </Button>
      <Info>
        <p1>
          Nome da(o) aluna(o):
          <Input />
        </p1>
        <p1>
          Nome dos pais ou responsáveis: <Input />
        </p1>
        <p1>
          RG: <Input />
        </p1>
        <p1>
          Data de nascimento: <Input />
        </p1>
        <p1>
          Endereço: <Input />
        </p1>
        <p1>
          Número: <Input />
        </p1>
        <p1>
          Complemento: <Input />
        </p1>
        <p1>
          Bairro: <Input />
        </p1>
        <p1>
          Cidade: <Input />
        </p1>
        <p1>
          Estado: <Input />
        </p1>
        <p1>
          CEP: <Input />
        </p1>
        <p1>
          Celular: <Input />
        </p1>
        <p1>
          Email: <Input />
        </p1>
        <p1>
          Escola: <Input />
        </p1>
        <p1>
          N° de matrícula: <Input />
        </p1>
        <p1>
          Ano/Série: <Input />
        </p1>
      </Info>
      <ButtonContainer>
        <SendButton>Enviar</SendButton>
      </ButtonContainer>
    </Container>
  );
}
