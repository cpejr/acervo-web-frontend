import { Body, Carousel, Reception, Programation, Image } from './Styles';
import { CarouselEvents } from '../../components/features';
import { EventsName } from '../../components/features';

export default function Event() {
  return (
    <Body>
      <Reception>
        <text>
          {' '}
          Conheça, frequente e <a>valorize</a> os <a>Eventos Culturais </a> e o
          <a>Patrimônio Histórico </a>de Bom Despacho!
        </text>
      </Reception>
      <Carousel>
        <CarouselEvents />
      </Carousel>
      <Programation>
        <Image>
          <EventsName></EventsName>
        </Image>
      </Programation>
    </Body>
  );
}
