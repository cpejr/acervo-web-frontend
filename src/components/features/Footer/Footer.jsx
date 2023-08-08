import logoAcervo from '../../../assets/logos/acervoLogo1.png';
import { Contact, Container, Logo } from './Styles';

export default function Footer() { 
  return (
    <Container>
      <Logo src={logoAcervo} alt="Logo Acervo" />
      <Contact>
        <h1>contato@nossahistória.com.br</h1>
        <h1>(31) 9 40028922</h1>
      </Contact>
    </Container>
  );
}
