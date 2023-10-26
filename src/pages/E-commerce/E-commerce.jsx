/* eslint-disable no-unused-vars */
import { useMediaQuery } from 'react-responsive';

import {
  shirts,
  mugs,
  books,
  ticket,
  localProducts,
} from '../../assets/ecommerce';
import { EcommerceProduct } from '../../components/features';
import {
  Container,
  Text,
  Text2,
  ContainerText,
  BackgroundDiv,
  Row,
  Lines,
  Square,
  ProductImage,
} from './styles';

const data = [
  {
    name: 'Camisas',
    image: shirts,
  },
  {
    name: 'Canecas',
    image: mugs,
  },
  {
    name: 'Livros',
    image: books,
  },
  {
    name: 'Ingressos',
    image: ticket,
  },
  {
    name: 'Produtos Locais',
    image: localProducts,
  },
  {
    name: 'Produtos Locais',
    image: localProducts,
  },
];

export default function Ecommerce() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1140 });
  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }
  return (
    <Container>
      <Text>
        Tenha. Use. Dê de presente algo de Bom Despacho. <br />
        <b>Compre essa ideia.</b>
      </Text>
      <ContainerText>
        <Text2>Acima de X produtos, o FRETE É GRÁTIS!</Text2>
      </ContainerText>
      <BackgroundDiv>
        {isSmallScreen ? (
          <Row>
            <Lines>
              {data?.map((content) => {
                return <EcommerceProduct key={data.name} data={content} />;
              })}
            </Lines>
          </Row>
        ) : (
          groupedData.map((group) => (
            <Row key={group.name}>
              {group.map((content) => (
                <Lines key={content}>
                  <EcommerceProduct key={content.name} data={content} />
                </Lines>
              ))}
            </Row>
          ))
        )}
      </BackgroundDiv>
    </Container>
  );
}
