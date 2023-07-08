import React, { useState } from 'react';

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSquare } from 'react-icons/bs';

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
  LogosandSocial,
  LastEvents,
  LastEventsLine,
  ProductLine,
  Products,
  Dialog,
  DialogItem,
  DocumentDialog,
  ColorOverlay,
  ArrowIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsAppIcon,
} from './Styles';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDocumentDialog = () => {
    setDocumentDialogOpen(true);
  };

  const closeDocumentDialog = () => {
    setDocumentDialogOpen(false);
  };
  return (
    <Container>
      <FirstSection>
        <BackgroundImage />
        <ColorOverlay />
        <Content>
          <Logo src="src/assets/Home/Logo.png" />
          <Title> Escrita, Imagem e Som</Title>
          <Text src="src/assets/Home/BomDespacho.png" />
        </Content>
      </FirstSection>
      <FilterSection>
        <SearchBar>
          <SearchonSite>
            <h1>Pesquisar no site...</h1>
          </SearchonSite>
          <FilterAndSearch>
            <Filter onClick={openDialog}>
              <h1>FILTROS</h1>
              <AiOutlineMenu size={34} />
            </Filter>
            <Dialog open={dialogOpen}>
              <button type="button" onClick={closeDialog}>
                <AiOutlineClose size={15} />
              </button>
              <DialogItem>Nome</DialogItem>
              <DialogItem>Data</DialogItem>
              <DialogItem>Lugar</DialogItem>
              <DialogItem>Evento</DialogItem>
              <DialogItem onClick={openDocumentDialog}>
                Documentos <ArrowIcon size={20} />
              </DialogItem>
              <DocumentDialog open={documentDialogOpen}>
                <button type="button" onClick={closeDocumentDialog}>
                  <AiOutlineClose size={15} />
                </button>
                <DialogItem>
                  <BsSquare size={18} /> Videos
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} /> Fotografias
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} /> Depoimentos
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} /> Documentos Escritos
                </DialogItem>
              </DocumentDialog>
            </Dialog>
            <Search>
              <h1>BUSCAR</h1>
              <AiOutlineSearch size={60} color="#030303" />
            </Search>
          </FilterAndSearch>
        </SearchBar>
        <LogosandSocial>
          <SocialMedia>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <WhatsAppIcon />
            <YoutubeIcon />
          </SocialMedia>
          <Logos>
            <img
              src="src/assets/Home/Cultura.png"
              alt="Incentivo Cultura Logo"
            />
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
        </LogosandSocial>
      </FilterSection>
      <LastEvents>
        <LastEventsLine>
          <h1>ÚLTIMOS EVENTOS</h1>
        </LastEventsLine>
      </LastEvents>
      <Products>
        <ProductLine>
          <h1>PRODUTOS</h1>
        </ProductLine>
      </Products>
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