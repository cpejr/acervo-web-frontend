import React from 'react';

import {
  AiOutlineInstagram,
  AiOutlineSearch,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineMenu,
  AiFillYoutube,
} from 'react-icons/ai';

import {
  Container,
  FirstSection,
  FilterSection,
  Content,
  Logo,
  Text,
  BackgroundImage,
  Title,
  SocialMedia,
  Search,
  SearchBar,
  SearchonSite,
  Filter,
  FilterAndSearch,
  Support,
  SupportLine,
  SupportButtom,
  SupportText,
  Logos,
} from './Styles';

export default function Home() {
  return (
    <Container>
      <FirstSection>
        <BackgroundImage />
        <Content>
          <Logo src="src/assets/Home/Logo.png" />
          <Title> Escrita, Imagem e Som</Title>
          <Text src="src/assets/Home/LogoBomDespacho.png" />
        </Content>
      </FirstSection>
      <FilterSection>
        <SearchBar>
          <SearchonSite>
            <h1>Pesquisar no site...</h1>
          </SearchonSite>
          <FilterAndSearch>
            <Filter>
              <h1>FILTROS</h1>
              <AiOutlineMenu size={36} />
            </Filter>
            <Search>
              <h1>BUSCAR</h1>
              <AiOutlineSearch size={60} color="#7F260F" />
            </Search>
          </FilterAndSearch>
        </SearchBar>
        <SocialMedia>
          <AiOutlineInstagram size={60} color="#7F260F" />
          <AiFillFacebook size={60} color="#7F260F" />
          <AiOutlineTwitter size={60} color="#7F260F" />
          <AiOutlineWhatsApp size={60} color="#7F260F" />
          <AiFillYoutube size={60} color="#7F260F" />
        </SocialMedia>
        <Logos>
          <img src="src/assets/Home/Cultura.png" alt="Incentivo Cultura Logo" />
          <img
            src="src/assets/Home/LogoBomDespacho.png"
            alt="Logo Bom Despacho"
          />
          <img
            src="src/assets/Home/Secretaria.png"
            alt="SecretariaMinisterio"
          />
          <img src="src/assets/Home/Brasil.png" alt="Brasil" />
        </Logos>
      </FilterSection>
      <Support>
        <SupportLine>
          <h1>Você pode nos apoiar! </h1>
        </SupportLine>
        <SupportText>
          <p>
            O projeto Nossa História Bom Despacho conta com várias formas de
            agregar na nossa comunidade, desde uma lojinha dos produtos locais
            até uma área escolar digital para auxiliar os estudante, não só de
            Bom Despacho mas todos que precisarem e tiverem interesse. Por isso,
            quando você apoia o projeto você está ajudando toda a comunidade
            mineira.{' '}
          </p>
          <h2>Como posso fazer isso? </h2>
          <p>
            De forma avulsa ou mensal, por meio de boleto ou pix, você pode
            contribuir com a gente. Clique no botão abaixo para saber mais.
          </p>
        </SupportText>
        <SupportButtom>
          <h1>APOIAR-NOS</h1>
        </SupportButtom>
      </Support>
    </Container>
  );
}
