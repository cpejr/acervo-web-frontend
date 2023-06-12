import {
  TwitterOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  YoutubeFilled,
} from '@ant-design/icons';

import logoAcervo from '../../../assets/logos/acervoLogo1.png';
import { Contact, Container, Logo, SocialMedias } from './Styles';

export default function Footer() {
  return (
    <Container>
      <Contact>
        <h1>contato@nossahistória.com.br</h1>
        <h1>(31) 9 40028922</h1>
      </Contact>
      <SocialMedias>
        <InstagramOutlined />
        <FacebookFilled />
        <TwitterOutlined />
        <WhatsAppOutlined />
        <YoutubeFilled />
      </SocialMedias>
      <Logo src={logoAcervo} alt="Logo Acervo" />
    </Container>
  );
}
