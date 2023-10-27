import { useState } from 'react';

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
      [dialogName]: true,
    }));
  };

  const closeDialog = (dialogName) => {
    setDialogs((prevState) => ({
      ...prevState,
      [dialogName]: false,
    }));
  };

  function isDialogOpen(dialogId) {
    return dialogs[dialogId];
  }

  function handleMenuClick(dialogName) {
    if (isDialogOpen(dialogName)) {
      closeDialog(dialogName);
    } else {
      openDialog(dialogName);
    }
  }

  return (
    <Container>
      <Menu>
        <MenuItem
          onClick={() => {
            navigate('/e-commerce');
          }}
        >
          E-commerce
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('acervo')}>
          Acervo
          {dialogs.acervo && (
            <Dialog id="acervo" open={dialogs.acervo}>
              <DialogItem to="/">Videos</DialogItem>
              <DialogItem to="/">Fotografias</DialogItem>
              <DialogItem to="/">Depoimentos</DialogItem>
              <DialogItem to="/">Documentos Escritos</DialogItem>
            </Dialog>
          )}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/eventos');
          }}
        >
          Eventos Culturais
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('school')}>
          Área escolar
          {dialogs.school && (
            <Dialog id="school" open={dialogs.school}>
              <DialogItem
                onClick={() => {
                  navigate('/area-escolar');
                }}
              >
                Acesso do estudante
              </DialogItem>
            </Dialog>
          )}
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate('/nossa-historia');
          }}
        >
          Sobre o projeto
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('profile')}>
          PERFIL
          {dialogs.profile && (
            <DialogProfile id="profile" open={dialogs.profile}>
              <DialogItem>Login</DialogItem>
              <DivideLine />
              <DialogItem
                onClick={() => {
                  navigate('/cadastro');
                }}
              >
                Cadastrar
              </DialogItem>
            </DialogProfile>
          )}
        </MenuItem>
      </Menu>
    </Container>
  );
}
