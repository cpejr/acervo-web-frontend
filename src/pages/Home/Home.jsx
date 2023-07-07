import {
  CarouselEvents,
  CarouselProducts,
  SearchFilter,
} from '../../components/features';
import { Container } from './Styles';

export default function Home() {
  return (
    <Container>
      <SearchFilter />

      <CarouselEvents />

      <CarouselProducts />
    </Container>
  );
}
