import { LogoDespacho } from '../../../assets/home';
import { Container, Image, Line, Text } from './Styles';

export default function HeaderRegister() {
  return (
    <Container>
      <Line>
        <Image>
          <img src={LogoDespacho} alt="logo branca" />
        </Image>
        <Text>Cadastre-se</Text>
      </Line>
    </Container>
  );
}
