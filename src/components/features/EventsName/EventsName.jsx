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
          <a>ARQUITETURA</a>
        </Control>
        <Control>
          <img src={ARTESANATO} />
          <a>ARTESANATO</a>
        </Control>
        <Control>
          <img src={ARTES} />
          <a>ARTES VISUAIS</a>
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={DANCA} />
          <a>DANÇA E TEATRO</a>
        </Control>
        <Control>
          <img src={ESPORTES} />
          <a>ESPORTE</a>
        </Control>
        <Control>
          <img src={FESTAS} />
          <a>FESTAS POPULARES</a>
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={CELEBRACOES} />
          <a>CELEBRAÇÕES RELIGIOSAS</a>
        </Control>
        <Control>
          <img src={LITERATURA} />
          <a>LITERATURA E MEMÓRIA</a>
        </Control>
        <Control>
          <img src={MUSICA} />
          <a>MUSICA</a>
        </Control>
      </Row>
      <Row>
        <p>
          <Control>
            <img src={GASTRONOMIA} />
            <a>GASTRONOMIA</a>
          </Control>
        </p>
      </Row>
    </Bubble>
  );
}
