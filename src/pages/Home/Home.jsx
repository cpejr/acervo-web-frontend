import {
  CarouselEvents,
  CarouselProducts,
  SearchFilter,
} from '../../components/features';
import { Container, CarouselOne, CarouselTwo } from './Styles';

export default function Home() {
  return (
    <Container>
      <SearchFilter />

      <CarouselOne>
        <CarouselEvents />
      </CarouselOne>

      <CarouselTwo>
        <CarouselProducts />
      </CarouselTwo>
    </Container>
  );
}
