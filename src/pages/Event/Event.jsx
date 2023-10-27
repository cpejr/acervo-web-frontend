import { CarouselEvents, EventsName } from '../../components/features';
import { Body, Carousel, Reception, Programation, Image } from './Styles';

export default function Event() {
  return (
    <Body>
      <Reception>
        <text>
          Conheça, frequente e <strong>valorize</strong> os{' '}
          <strong>Eventos Culturais</strong> e o{' '}
          <strong>Patrimônio Histórico</strong> de Bom Despacho!
        </text>
      </Reception>
      <Carousel>
        <CarouselEvents />
      </Carousel>
      <Programation>
        <Image>
          <EventsName />
        </Image>
      </Programation>
    </Body>
  );
}
