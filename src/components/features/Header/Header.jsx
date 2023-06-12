import { useState } from 'react';

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
        <MenuItem onClick={() => openDialog('history')}>
          NOSSA HISTÓRIA
          <Dialog
            id="history"
            open={dialogs.history}
            onBlur={() => closeDialog('history')}
          >
            <DialogItem to="/">Apresentação</DialogItem>
            <DialogItem to="/">Quem Somos</DialogItem>
            <DialogItem to="/">Politica e privacidade</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem onClick={() => openDialog('acervo')}>
          Acervo
          <Dialog
            id="acervo"
            open={dialogs.acervo}
            onBlur={() => closeDialog('acervo')}
          >
            <DialogItem to="/">Videos</DialogItem>
            <DialogItem to="/">Fotografias</DialogItem>
            <DialogItem to="/">Depoimentos</DialogItem>
            <DialogItem to="/">Documentos Escritos</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem>Patrimônio e Eventos Culturais</MenuItem>
        <MenuItem onClick={() => openDialog('school')}>
          Área escolar
          <Dialog
            id="school"
            open={dialogs.school}
            onBlur={() => closeDialog('school')}
          >
            <DialogItem>Acesso do estudante</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem>E-commerce</MenuItem>
        <MenuItem>Seja Apoiador</MenuItem>
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
    </Container>
  );
}
