import { useNavigate } from 'react-router';
import { LogoDespacho } from '../../../assets/home';
import { Container, Image, Line, Text } from './Styles';

export default function HeaderRegister() {
  const navigate = useNavigate();
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
        <Text>Cadastre-se</Text>
      </Line>
    </Container>
  );
}
