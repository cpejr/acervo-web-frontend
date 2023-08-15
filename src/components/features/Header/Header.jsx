import { useState } from 'react';

import {
  Container,
  Menu,
  MenuItem,
  Dialog,
  DialogItem,
  DialogProfile,
  DivideLine,
  FirstSection,
  Content,
  Logo,
  Title,
  ColorOverlay,
} from './Styles';

export default function Header() {
  const [dialogs, setDialogs] = useState({
    history: false,
    acervo: false,
    school: false,
    profile: false,
  });

  const openDialog = (dialogName) => {
    setDialogs((prevState) => ({
      ...prevState,
      [dialogName]: true,
    }));
    document.getElementById(dialogName).focus();
  };

  const closeDialog = (dialogName) => {
    setDialogs((prevState) => ({
      ...prevState,
      [dialogName]: false,
    }));
  };

  return (
    <Container>
      <Menu>
        <MenuItem>E-commerce</MenuItem>
        <MenuItem>Acervo</MenuItem>
        <MenuItem>Eventos Culturais</MenuItem>
        <MenuItem>Área Escolar</MenuItem>
        <MenuItem onClick={() => openDialog('info')}>
          Sobre o projeto
          <Dialog
            id="info"
            open={dialogs.info}
            onBlur={() => closeDialog('info')}
          >
            <DialogItem to="/">Informações</DialogItem>
            <DivideLine />
            <DialogItem to="/">Conheça o Blog</DialogItem>
            <DivideLine />
            <DialogItem to="/">Seja apoiador</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem onClick={() => openDialog('profile')}>
          PERFIL
          <DialogProfile
            id="profile"
            open={dialogs.profile}
            onBlur={() => closeDialog('profile')}
          >
            <DialogItem to="/">Login</DialogItem>
            <DivideLine />
            <DialogItem to="/">Cadastrar</DialogItem>
          </DialogProfile>
        </MenuItem>
      </Menu>
      <FirstSection>
        <ColorOverlay />
        <Content>
          <Logo src="src/assets/logos/logoBranca.png" />
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
