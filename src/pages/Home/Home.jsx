import {
  CarouselEvents,
  CarouselProducts,
  SearchFilter,
} from '../../components/features';
import { Container, CarouselTwo } from './Styles';

export default function Home() {
  return (
    <Container>
      <SearchFilter />

      <CarouselEvents />

      <CarouselTwo>
        <CarouselProducts />
      </CarouselTwo>
    </Container>
  );
}
