import {
  CarouselEvents,
  CarouselProducts,
  SearchFilter,
} from '../../components/features';
import { Container } from './Styles';

export default function FormTest() {
  return (
    <Container>
      <SearchFilter />
      <CarouselEvents />
      <CarouselProducts />
    </Container>
  );
}
