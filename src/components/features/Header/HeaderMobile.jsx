import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiFillCaretDown } from 'react-icons/ai';
import { FullPageDialog, DialogContent, DialogItem, Top, Itens, Logo, Container, FirstSection, ColorOverlay, Content, Title} from './Stylesm';

export default function HeaderMobile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const [dropdowns, setDropdowns] = useState({
    instanceof: false,
    site: false,
    support: false,
    login: false,
    registe: false,
    
  });
  

  return (
    <Container>
        <AiOutlineMenu onClick={openDialog} color= '#F19709' size= '5rem'  />
        {isDialogOpen && (
        <FullPageDialog >
            <Top>
                
                <AiOutlineMenu onClick={closeDialog} color= '#F19709' size= '5rem'/>
            </Top>
            <Itens>
                <DialogItem>E-commerce</DialogItem>
                <DialogItem>Acervo</DialogItem>
                <DialogItem>Eventos Culturais</DialogItem>
                <DialogItem>Área Escolar</DialogItem>
                <DialogItem>Sobre o projeto
                    <AiFillCaretDown />
                </DialogItem>
                <DialogItem>Perfil
                    <AiFillCaretDown/>
                </DialogItem>
            </Itens>

          
        </FullPageDialog>
      )}
      <FirstSection>
        <ColorOverlay />
        <Content>
          
          <Title>
            <h1>BOM</h1>
            <h1>DESPACHO</h1>
            <p>em escrita, imagem e som.</p>
          </Title>
        </Content>
      </FirstSection>
    </Container>
      
  );
}
