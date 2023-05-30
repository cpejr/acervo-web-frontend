import { CarouselEvents, CarouselProducts } from '../../components/features';
import { Container, CarouselOne, CarouselTwo } from './Styles';

export default function Home() {
  return (
    <Container>
      <CarouselOne>
        <CarouselEvents />
      </CarouselOne>

      <CarouselTwo>
        <CarouselProducts />
      </CarouselTwo>
    </Container>
  );
}
