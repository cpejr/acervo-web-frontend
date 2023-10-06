import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Menu,
  MenuItem,
  Dialog,
  DialogItem,
  DialogProfile,
  DivideLine,
} from './Styles';

export default function Header() {
  const navigate = useNavigate();

  const [dialogs, setDialogs] = useState({
    acervo: false,
    school: false,
    profile: false,
  });

  const openDialog = (dialogName) => {
    setDialogs((prevState) => ({
      ...prevState,
      [dialogName]: !prevState[dialogName], // Inverte o estado do diálogo
    }));
  };

  // const closeDialog = (dialogName) => {
  //   setDialogs((prevState) => ({
  //     ...prevState,
  //     [dialogName]: false,
  //   }));
  // };

  return (
    <Container>
      <Menu>
        <MenuItem
          onClick={() => {
            navigate('/perfil');
          }}
        >
          E-commerce
        </MenuItem>
        <MenuItem
          onClick={() => {
            openDialog('acervo');
            navigate('/perfil');
          }}
        >
          Acervo
          <Dialog id="acervo" open={dialogs.acervo}>
            <DialogItem to="/">Videos</DialogItem>
            <DialogItem to="/">Fotografias</DialogItem>
            <DialogItem to="/">Depoimentos</DialogItem>
            <DialogItem to="/">Documentos Escritos</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/perfil');
          }}
        >
          Eventos Culturais
        </MenuItem>
        <MenuItem
          onClick={() => {
            openDialog('school');
            navigate('/perfil');
          }}
        >
          Área escolar
          <Dialog id="school" open={dialogs.school}>
            <DialogItem>Acesso do estudante</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/perfil');
          }}
        >
          Sobre o projeto
        </MenuItem>
        <MenuItem
          onClick={() => {
            openDialog('profile');
            navigate('/perfil');
          }}
        >
          PERFIL
          <DialogProfile id="profile" open={dialogs.profile}>
            <DialogItem to="/">Login</DialogItem>
            <DivideLine />
            <DialogItem to="/">Cadastrar</DialogItem>
          </DialogProfile>
        </MenuItem>
      </Menu>
    </Container>
  );
}
