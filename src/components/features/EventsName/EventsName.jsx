import {
  ARQUITETURA,
  ARTES,
  ARTESANATO,
  CELEBRACOES,
  DANCA,
  ESPORTES,
  FESTAS,
  GASTRONOMIA,
  LITERATURA,
  MUSICA,
} from '../../../assets/Events/index';
import { Bubble, Row, Control } from './Styles';

export default function EventsName() {
  return (
    <Bubble>
      <Row>
        <Control>
          <img src={ARQUITETURA} alt="Imagem de Arquitetura" />
          <p>ARQUITETURA</p>
        </Control>
        <Control>
          <img src={ARTESANATO} alt="Imagem de Artesanato" />
          <p>ARTESANATO</p>
        </Control>
        <Control>
          <img src={ARTES} alt="Imagem de Artes Visuais" />
          <p>ARTES VISUAIS</p>
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={DANCA} alt="Imagem de Dança e Teatro" />
          <p>DANÇA E TEATRO</p>
        </Control>
        <Control>
          <img src={ESPORTES} alt="Imagem de Esporte" />
          <p>ESPORTE</p>
        </Control>
        <Control>
          <img src={FESTAS} alt="Imagem de Festas Populares" />
          <p>FESTAS POPULARES</p>
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={CELEBRACOES} alt="Imagem de Celebrações Religiosas" />
          <p>CELEBRAÇÕES RELIGIOSAS</p>
        </Control>
        <Control>
          <img src={LITERATURA} alt="Imagem de Literatura e Memória" />
          <p>LITERATURA E MEMÓRIA</p>
        </Control>
        <Control>
          <img src={MUSICA} alt="Imagem de Música" />
          <p>MUSICA</p>
        </Control>
      </Row>
      <Row>
        <Control>
          <img src={GASTRONOMIA} alt="Imagem de Gastronomia" />
          <p>GASTRONOMIA</p>
        </Control>
      </Row>
    </Bubble>
  );
}
