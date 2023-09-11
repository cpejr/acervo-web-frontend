import { LogoBranca } from '../../assets/home/index';
import { Container, Header, Collumn, Collumn2, Row, Text } from './Styles';

export default function Home() {
  return (
    <Container>
      <Header>404</Header>
      <Row>
        <Collumn>
          <img src={LogoBranca} alt="Logo" />
        </Collumn>
        <Collumn2>
          <Text>Essa página não pode ser encontrada</Text>
        </Collumn2>
      </Row>
    </Container>
  );
}
