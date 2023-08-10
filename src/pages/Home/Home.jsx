import React, { useState } from 'react';

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSquare } from 'react-icons/bs';

import { CarouselEvents, CarouselProducts } from '../../components/features';
import {
  Container,
  FirstSection,
  FilterSection,
  Content,
  Logo,
  Text,
  BackgroundImage,
  Title,
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
} from './Styles';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);

  const toggleDialog = () => {
    if (dialogOpen) {
      setDialogOpen(false);
      setDocumentDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
  };

  const openDocumentDialog = () => {
    if (documentDialogOpen) {
      setDocumentDialogOpen(false);
    } else {
      setDocumentDialogOpen(true);
    }
  };

  return (
    <Container>
      <FirstSection>
        <BackgroundImage />
        <ColorOverlay />
        <Content>
          <Logo src="src/assets/Home/Logo.png" />
          <Title> 
            <h1>BOM</h1>
            <h1>DESPACHO</h1>
          </Title>

        </Content>
      </FirstSection>
      <FilterSection>
        <SearchBar>
          <SearchonSite>
            <h1>Pesquisar no site...</h1>
          </SearchonSite>
          <FilterAndSearch>
            <Filter onClick={toggleDialog}>
              <h1>FILTROS</h1>
              <AiOutlineMenu size={34} />
            </Filter>

            <Dialog open={dialogOpen}>
              <DialogItem>Nome</DialogItem>
              <DialogItem>Data</DialogItem>
              <DialogItem>Lugar</DialogItem>
              <DialogItem>Evento</DialogItem>
              <DialogItem onClick={openDocumentDialog}>
                Documentos <ArrowIcon size={20} />
              </DialogItem>

              <DocumentDialog open={documentDialogOpen}>
                <DialogItem>
                  <BsSquare size={18} strokeWidth={3} /> Videos
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} strokeWidth={3} /> Fotografias
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} strokeWidth={3} /> Depoimentos
                </DialogItem>
                <DialogItem>
                  <BsSquare size={18} strokeWidth={3} /> Documentos escritos
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
        <CarouselEvents />
      </LastEvents>
      <Products>
        <ProductLine>
          <h1>PRODUTOS</h1>
        </ProductLine>
        <CarouselProducts />
      </Products>
      <Support>
        <SupportLine>
          <h1>Você pode nos apoiar! </h1>
        </SupportLine>
        <SupportText>
          <p>
          A principal forma de nos apoiar é participando do projeto, ajudando na pesquisa histórica, enviando vídeos, fotografias, documentos que contam a nossa história. Contribua, compartilhe, divulgue.
          </p>
          
          <p>
          Contribua também para o Nossa História adquirindo nossos produtos, lembre-se que você estará comprando uma ideia.
          </p>
          <p>
          Você pode ajudar a manter vivo esse trabalho de preservação da memória de Bom Despacho fazendo uma contribuição avulsa ou pode se tornar membro oficial do Nossa História aderindo à contribuição mensal, seja por Pix ou cartão.
          </p>
          <p>
          Como membro oficial do projeto você será reconhecido como um Cuete Avura e terá direito a descontos nos produtos, preferência na compra de ingressos e convites especiais para eventos.
          </p>
          <h3>
          Seja um Cuete Avura, veja como:
          </h3>
          
        </SupportText>
        <SupportButtom>
          <h1>APOIAR</h1>
        </SupportButtom>
      </Support>
    </Container>
  );
}
