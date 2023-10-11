import React from 'react'; // Importe o React, se ainda não o fez
import { Bubble, Row, Control } from './Styles';
import { ARQUITETURA } from '../../../assets/Events/index';
import { ARTES } from '../../../assets/Events/index';
import { ARTESANATO } from '../../../assets/Events/index';
import { CELEBRACOES } from '../../../assets/Events/index';
import { DANCA } from '../../../assets/Events/index';
import { ESPORTES } from '../../../assets/Events/index';
import { FESTAS } from '../../../assets/Events/index';
import { GASTRONOMIA } from '../../../assets/Events/index';
import { LITERATURA } from '../../../assets/Events/index';
import { MUSICA } from '../../../assets/Events/index';

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
        <Control className="opacity" />{' '}
        <Control>
          <img src={GASTRONOMIA} />
          <a>GASTRONOMIA</a>
        </Control>
        <Control className="opacity" />{' '}
      </Row>
    </Bubble>
  );
}
