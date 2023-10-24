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
  Text2,
} from './Styles';

export default function RegisterLegalPerson() {
  return (
    <Container>
      <Header>
        <Line>
          <Image>
            <img src={LogoDespacho} alt="logo branca" />
          </Image>
          <Text>Cadastro de Pessoa Jurídica</Text>
        </Line>
      </Header>
      <Button>
        <IoIosArrowBack />
      </Button>
      <Info>
        <p1>
          Razão Social:
          <Input />
        </p1>
        <p1>
          Nome Fantasia: <Input />
        </p1>
        <p1>
          Ramo de atividade: <Input />
        </p1>
        <p1>
          CNPJ: <Input />
        </p1>
        <p1>
          Inscrição Municipal: <Input />
        </p1>
        <p1>
          Inscrição Estadual: <Input />
        </p1>
      </Info>
      <Text2>Contato:</Text2>
      <Info>
        <p1>
          Nome: <Input />
        </p1>
        <p1>
          Data de Nascimento: <Input />
        </p1>
        <p1>
          Função: <Input />
        </p1>
        <p1>
          CEP da empresa: <Input />
        </p1>
        <p1>
          Estado: <Input />
        </p1>
        <p1>
          Bairro: <Input />
        </p1>
        <p1>
          Cidade: <Input />
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
          Telefone comercial: <Input />
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
