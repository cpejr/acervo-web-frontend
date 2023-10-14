import logoBranca from '../../../assets/logos/logoBranca.png';
import { Contact, Container, Logo } from './Styles';

export default function Footer() {
  return (
    <Container>
      <div>
        <Logo src={logoBranca} alt="Logo Acervo" />
        <h2>Bom Despacho - MG</h2>
      </div>
      <Contact>
        <h1>contato@nossahistória.com.br</h1>
        <h1>(31) 9 40028922</h1>
      </Contact>
    </Container>
  );
}
