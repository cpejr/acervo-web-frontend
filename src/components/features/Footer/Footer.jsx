import {
  TwitterOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  FacebookFilled,
  YoutubeFilled,
} from '@ant-design/icons';

import LogoAcervo from '../../../assets/AcervoLogo.png';
import { Contact, Container, Logo, SocialMedias } from './Styles';

export default function Footer() {
  return (
    <Container>
      <Contact>
        <h1>contato@nossahistória.com.br</h1>
        <h1>(31) 9 40028922</h1>
      </Contact>
      <SocialMedias>
        <InstagramOutlined style={{ fontSize: '5rem' }} />
        <FacebookFilled style={{ fontSize: '5rem' }} />
        <TwitterOutlined style={{ fontSize: '5rem' }} />
        <WhatsAppOutlined style={{ fontSize: '5rem' }} />
        <YoutubeFilled style={{ fontSize: '5rem' }} />
      </SocialMedias>
      <Logo src={LogoAcervo} alt="Logo Acervo" />
    </Container>
  );
}
