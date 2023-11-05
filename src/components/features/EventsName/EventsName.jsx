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
import { Bubble, Row, Control, Group, Text, Circle } from './Styles';

export default function EventsName() {
  return (
    <Bubble>
      <Row>
        <Control>
          <Group>
            <Circle />
            <img src={ARQUITETURA} alt="Imagem de Arquitetura" />
            <Text>ARQUITETURA</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={ARTESANATO} alt="Imagem de Artesanato" />
            <Text>ARTESANATO</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={ARTES} alt="Imagem de Artes Visuais" />
            <Text>ARTES VISUAIS</Text>
          </Group>
        </Control>
      </Row>
      <Row>
        <Control>
          <Group>
            <Circle />
            <img src={DANCA} alt="Imagem de Dança e Teatro" />
            <Text>DANÇA E TEATRO</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={ESPORTES} alt="Imagem de Esporte" />
            <Text>ESPORTE</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={FESTAS} alt="Imagem de Festas Populares" />
            <Text>FESTAS POPULARES</Text>
          </Group>
        </Control>
      </Row>
      <Row>
        <Control>
          <Group>
            <Circle />
            <img src={CELEBRACOES} alt="Imagem de Celebrações Religiosas" />
            <Text>CELEBRAÇÕES RELIGIOSAS</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={LITERATURA} alt="Imagem de Literatura e Memória" />
            <Text>LITERATURA E MEMÓRIA</Text>
          </Group>
        </Control>
        <Control>
          <Group>
            <Circle />
            <img src={MUSICA} alt="Imagem de Música" />
            <Text>MUSICA</Text>
          </Group>
        </Control>
      </Row>
      <Row>
        <Control>
          <Group>
            <Circle />
            <img src={GASTRONOMIA} alt="Imagem de Gastronomia" />
            <Text>GASTRONOMIA</Text>
          </Group>
        </Control>
      </Row>
    </Bubble>
  );
}
