import { useNavigate, useLocation } from 'react-router';

import { LogoDespacho } from '../../../assets/home';
import { Container, Image, Line, Text } from './Styles';

export default function HeaderRegister() {
  const navigate = useNavigate();
  const location = useLocation();

  let textButton;

  if (location.pathname.includes('cadastro-pessoa-fisica')) {
    textButton = 'Cadastro de Pessoa Física';
  } else if (location.pathname.includes('cadastro-pessoa-juridica')) {
    textButton = 'Cadastro de Pessoa Jurídica';
  } else if (location.pathname.includes('cadastro-aluno')) {
    textButton = 'Cadastro de Aluno';
  } else {
    textButton = 'Cadastro';
  }

  return (
    <Container>
      <Line>
        <Image
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={LogoDespacho} alt="logo branca" />
        </Image>
        <Text>{textButton}</Text>
      </Line>
    </Container>
  );
}
