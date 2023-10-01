import { Body, Carousel, Reception, Programation, Text } from './Styles';
import { CarouselEvents } from '../../components/features';
import { EventsName } from '../../components/features';

export default function Event() {
  return (
    <Body>
      <Reception>
        <Text>
          {' '}
          Conheça, frequente e valorize os Eventos Culturais e o Patrimônio
          Histórico de Bom Despacho!
        </Text>
      </Reception>
      <Carousel>
        <CarouselEvents />
      </Carousel>
      <Programation>
        <EventsName></EventsName>
      </Programation>
    </Body>
  );
}
