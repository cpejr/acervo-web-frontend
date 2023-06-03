import { VscMenu } from 'react-icons/vsc';

import { Container, Text, Button } from './Syles';

export default function CarouselEvents() {
  return (
    <Container>
      <Text>FILTROS</Text>
      <Button>
        <VscMenu size={50} color="rgba(81, 81, 81, 1)" />
      </Button>
    </Container>
  );
}
