import {
  Container,
  Image3,
  Data,
  Historic,
  ProfileImage,
  Info,
  ChangeButton,
  DeleteButton,
  ButtonDiv,
  ProductDiv,
  ProductImage1,
  ProductImage2,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <Image3>
        <ProfileImage />
        <p>
          Ricardo Li
          <p1>
            <br /> Também faz parte
            <br /> da Nossa história!
          </p1>
        </p>
      </Image3>
      <Data> Dados Pessoais</Data>
      <Info>
        <p1>
          Nome:<p> __________________________________________________</p>
        </p1>
        <p1>
          E-mail:<p>__________________________________________________</p>
        </p1>
        <p1>
          Telefone:<p>________________________________________________</p>
        </p1>
        <p1>
          CEP:<p> ___________________________________________________</p>
        </p1>
        <p1>
          Endereço:<p>_______________________________________________</p>
        </p1>
      </Info>
      <Historic> Histórico de compras</Historic>
      <ProductDiv>
        <ProductImage2 />
        <ProductImage1 />
      </ProductDiv>
      <ButtonDiv>
        <ChangeButton>Alterar Dados</ChangeButton>
        <DeleteButton>Excluir minha conta</DeleteButton>
      </ButtonDiv>
    </Container>
  );
}
