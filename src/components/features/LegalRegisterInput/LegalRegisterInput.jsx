import { Info, Input, Text2 } from './styles';

export default function LegalRegisterInput() {
  return (
    <Info>
      <Info>
        <p1>
          Razão Social:
          <Input />
        </p1>
        <p1>
          Nome Fantasia: <Input />
        </p1>
        <p1>
          Ramo de atividade: <Input />
        </p1>
        <p1>
          CNPJ: <Input />
        </p1>
        <p1>
          Inscrição Municipal: <Input />
        </p1>
        <p1>
          Inscrição Estadual: <Input />
        </p1>
      </Info>
      <Text2>Contato:</Text2>
      <Info>
        <p1>
          Nome: <Input />
        </p1>
        <p1>
          Data de Nascimento: <Input />
        </p1>
        <p1>
          Função: <Input />
        </p1>
        <p1>
          CEP da empresa: <Input />
        </p1>
        <p1>
          Estado: <Input />
        </p1>
        <p1>
          Bairro: <Input />
        </p1>
        <p1>
          Cidade: <Input />
        </p1>
        <p1>
          Rua: <Input />
        </p1>
        <p1>
          Número: <Input />
        </p1>
        <p1>
          Complemento: <Input />
        </p1>
        <p1>
          Telefone comercial: <Input />
        </p1>
        <p1>
          Celular: <Input />
        </p1>
        <p1>
          Email: <Input />
        </p1>
      </Info>
    </Info>
  );
}
