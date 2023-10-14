import React, { useState } from 'react';

// eslint-disable-next-line no-unused-vars
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsSquare } from 'react-icons/bs';
// import { CarouselEvents } from 'src/components/features/CarouselEvents/CarouselEvents.jsx';

import { CarouselProducts, CarouselEvents } from '../../components/features';
import {
  Container,
  FilterSection,
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
  ArrowIcon,
  StyledSearchIcon,
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
      {/* <FilterSection>
        <h2>
          O que você quer descobrir sobre <b>Bom Despacho</b> hoje?
        </h2>
        <SearchBar>
          <SearchonSite>
            <h1>Buscar no acervo</h1>
          </SearchonSite>
          <FilterAndSearch>
            <Filter onClick={toggleDialog}>
              <AiOutlineMenu size={45} />
            </Filter>

            <Dialog open={dialogOpen}>
              <p>&nbsp;&nbsp;Buscar por </p>
              <DialogItem className={dialogOpen ? 'dialogOpen' : ''} index={0}>
                &nbsp;&nbsp;Nome
              </DialogItem>
              <DialogItem className={dialogOpen ? 'dialogOpen' : ''} index={1}>
                &nbsp;&nbsp;Data
              </DialogItem>
              <DialogItem className={dialogOpen ? 'dialogOpen' : ''} index={2}>
                &nbsp;&nbsp;Lugar
              </DialogItem>
              <DialogItem className={dialogOpen ? 'dialogOpen' : ''} index={3}>
                &nbsp;&nbsp;Evento
              </DialogItem>
              <DialogItem
                className={dialogOpen ? 'dialogOpen' : ''}
                index={4}
                onClick={openDocumentDialog}
              >
                &nbsp;&nbsp;Documentos <ArrowIcon size={20} />
              </DialogItem>
              <DialogItem className={dialogOpen ? 'dialogOpen' : ''} index={5}>
                &nbsp;&nbsp;Temas
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
              <StyledSearchIcon />
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
              src="src/assets/Home/ministerio.png"
              alt="SecretariaMinisterio"
            />
            <img src="src/assets/Home/Governo.png" alt="Brasil" />
          </Logos>
        </LogosandSocial>
      </FilterSection> */}
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
      {/* <Support>
        <SupportLine>
          <h1>Você pode nos apoiar! </h1>
        </SupportLine>
        <SupportText>
          <p>
            A principal forma de nos apoiar é participando do projeto, ajudando
            na pesquisa histórica, enviando vídeos, fotografias, documentos que
            contam a nossa história. Contribua, compartilhe, divulgue.
          </p>

          <p>
            Contribua também para o Nossa História adquirindo nossos produtos,
            lembre-se que você estará comprando uma ideia.
          </p>
          <p>
            Você pode ajudar a manter vivo esse trabalho de preservação da
            memória de Bom Despacho fazendo uma contribuição avulsa ou pode se
            tornar membro oficial do Nossa História aderindo à contribuição
            mensal, seja por Pix ou cartão.
          </p>
          <p>
            Como membro oficial do projeto você será reconhecido como um Cuete
            Avura e terá direito a descontos nos produtos, preferência na compra
            de ingressos e convites especiais para eventos.
          </p>
          <h3>Seja um Cuete Avura, veja como:</h3>
        </SupportText>
        <SupportButtom>
          <h1>APOIAR</h1>
        </SupportButtom>
      </Support> */}
    </Container>
  );
}
