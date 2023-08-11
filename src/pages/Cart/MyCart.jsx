/* eslint-disable react/destructuring-assignment */

import ProductCartItem from '../../components/features/ProductCartItem/ProductCartItem';
import items from './Items';
import {
  Container,
  FirstSection,
  TextSection,
  ComponentSection,
  PriceSection,
  Profile,
  StyledCartIcon,
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
        <div className="cartSymbol">
          <StyledCartIcon />
          <p>Meu Carrinho</p>
        </div>
        <Profile>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
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
