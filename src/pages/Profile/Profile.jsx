import { product1, product2 } from '../../assets/Profile/index';
import {
  Container,
  BackgroundDiv,
  Data,
  Historic,
  ProfileImage,
  Info,
  Button,
  ButtonDiv,
  ProductDiv,
  ProductImage,
  ProductContainer,
  ProductButton,
  InfoText,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <BackgroundDiv>
        <ProfileImage />
        <p>
          Ricardo Li
          <br />
          <p1>
            <br /> Também faz parte
            <br /> da Nossa história!
          </p1>
        </p>
      </BackgroundDiv>
      <Data> Dados Pessoais</Data>
      <Info>
        <p1>
          Nome: <InfoText>Ricardo</InfoText>
        </p1>
        <p1>
          Email: <InfoText>ricardo@email.com</InfoText>
        </p1>
        <p1>
          Telefone: <InfoText>123456789</InfoText>
        </p1>
        <p1>
          CEP: <InfoText>123456798</InfoText>
        </p1>
        <p1>
          Endereço: <InfoText>Rua Fulano de tal</InfoText>
        </p1>
      </Info>
      <Historic> Histórico de compras</Historic>
      <ProductDiv>
        <ProductContainer>
          <ProductImage imageUrl={product1} />
          <ProductButton>Comprar novamente </ProductButton>
        </ProductContainer>
        <ProductContainer>
          <ProductImage imageUrl={product2} />
          <ProductButton>Comprar novamente </ProductButton>
        </ProductContainer>
      </ProductDiv>
      <ButtonDiv>
        <Button>Alterar Dados</Button>
        <Button>Excluir minha conta</Button>
      </ButtonDiv>
    </Container>
  );
}
