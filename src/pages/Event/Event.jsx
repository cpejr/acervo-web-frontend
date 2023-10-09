import { Body, Carousel, Reception, Programation, Text, Image } from './Styles';
import { CarouselEvents } from '../../components/features';
import { EventsName } from '../../components/features';
import { ImageEvents, ImageEvents2 } from '../../assets/Events/Index';

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
        <Image>
          <EventsName></EventsName>
        </Image>
      </Programation>
    </Body>
  );
}
