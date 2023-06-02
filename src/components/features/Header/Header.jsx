import { useState } from 'react';

import { Container, Menu, MenuItem, Dialog, DialogItem } from './Styles';

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
        <MenuItem
          onClick={() => {
            openDialog('history');
          }}
        >
          NOSSA HISTÓRIA
          <Dialog open={dialogs.history} onBlur={() => closeDialog('history')}>
            <DialogItem>Apresentação</DialogItem>
            <DialogItem>Quem Somos</DialogItem>
            <DialogItem>Politica e privacidade</DialogItem>
          </Dialog>
        </MenuItem>
        <MenuItem>Acervo</MenuItem>
        <MenuItem>Patrimônio e Eventos Culturais</MenuItem>
        <MenuItem>Área escolar</MenuItem>
        <MenuItem>E-commerce</MenuItem>
        <MenuItem>Seja Apoiador</MenuItem>
        <MenuItem>PERFIL</MenuItem>
      </Menu>
    </Container>
  );
}
