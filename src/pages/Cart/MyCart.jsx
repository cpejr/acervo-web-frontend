/* eslint-disable react/destructuring-assignment */

import ProductCartItem from '../../components/features/ProductCartItem/ProductCartItem';
import items from './Items';
import {
  Container,
  FirstSection,
  DivCart,
  TextSection,
  ComponentSection,
  PriceSection,
  Profile,
  StyledCartIcon,
  StyledProfileIcon,
} from './Styles';

function CreateCard(item) {
  return (
    <ProductCartItem
      product={{
        image: item.image,
        title: item.title,
        description: item.description,
      }}
    />
  );
}

export default function MyCart() {
  return (
    <Container>
      <FirstSection>
        <DivCart>
          <StyledCartIcon />
          <p>Meu Carrinho</p>
        </DivCart>
        <Profile>
          <StyledProfileIcon />
          <p>Perfil</p>
        </Profile>
      </FirstSection>
      <TextSection>
        <p>
          Acima de X produtos, o <b>FRETE É GRATIS!</b>
        </p>
      </TextSection>
      <ComponentSection>
        {items.map((item) => (
          <CreateCard key={item.title} {...item} />
        ))}
      </ComponentSection>
      <PriceSection>
        <p>R$00,00</p>
        <button type="button">FINALIZAR</button>
      </PriceSection>
    </Container>
  );
}
