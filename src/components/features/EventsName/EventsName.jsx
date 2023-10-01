import React from 'react'; // Importe o React, se ainda não o fez
import { Image } from './'; // Importe a imagem do módulo "index.js"
import { Bubble, Row, Control } from './Styles';
import { ARQUITETURA } from './';
import { ARTES } from './';
import { ARTESANATO } from './';
import { CELEBRACOES } from './';
import { DANCA } from './';
import { ESPORTES } from './';
import { FESTAS } from './';
import { GASTRONOMIA } from './';
import { LITERATURA } from './';
import { MUSICA } from './';

export default function EventsName() {
  return (
    <Bubble>
      <Row>
        <Control>
          <img src={ARQUITETURA} />
        </Control>
        <Control>
          <img src={ARTES} />
        </Control>
        <Control>
          <img src={ARTESANATO} />
        </Control>
        <Control>
          <img src={CELEBRACOES} />
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={DANCA} />
        </Control>
        <Control>
          <img src={ESPORTES} />
        </Control>
        <Control>
          <img src={FESTAS} />
        </Control>
        <Control>
          <img src={GASTRONOMIA} />
        </Control>
      </Row>
      <Row>
        <p>
          <Control>
            <img src={LITERATURA} />
          </Control>
          <Control>
            <img src={MUSICA} />
          </Control>
        </p>
      </Row>
    </Bubble>
  );
}
