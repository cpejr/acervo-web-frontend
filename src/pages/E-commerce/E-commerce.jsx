import { useMediaQuery } from 'react-responsive';

import {
  shirts,
  mugs,
  books,
  ticket,
  localProducts,
} from '../../assets/ecommerce';
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

export default function Ecommerce() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1140 });
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
          <>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Camisas
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={mugs} />
                  Canecas
                </Square>
              </Lines>
            </Row>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={books} />
                  Livros
                </Square>
              </Lines>

              <Lines>
                <Square>
                  <ProductImage imageUrl={ticket} />
                  Ingressos
                </Square>
              </Lines>
            </Row>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={localProducts} />
                  Produtos Locais
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Produto
                </Square>
              </Lines>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Camisas
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={mugs} />
                  Canecas
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={books} />
                  Livros
                </Square>
              </Lines>
            </Row>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={ticket} />
                  Ingressos
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={localProducts} />
                  Produtos Locais
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Produto
                </Square>
              </Lines>
            </Row>
            <Row>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Produto
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Produto
                </Square>
              </Lines>
              <Lines>
                <Square>
                  <ProductImage imageUrl={shirts} />
                  Produto
                </Square>
              </Lines>
            </Row>
          </>
        )}
      </BackgroundDiv>
    </Container>
  );
}
