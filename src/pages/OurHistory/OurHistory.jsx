import {
  bomDespacho,
  herbertonImage,
  priestsImage,
  villageImage,
} from '../../assets/ourHistory/index';
import {
  Apresentation,
  Column,
  Column2,
  Column3,
  Column4,
  Column5,
  Column6,
  Column7,
  Column8,
  Container,
  Image,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Name,
  Name2,
  Text,
  Text2,
  Text3,
  Text4,
  Text5,
  Who,
  Whole,
  Whole2,
  Whole3,
} from './Styles';

export default function OurHistory() {
  return (
    <Container>
      <Apresentation> &ensp; Apresentação</Apresentation>
      <Whole>
        <Column>
          <Text>
            O site Nossa História – Escrita, Imagem e som é um depositário do
            acervo de vídeos, fotografias, áudios e escritos que compõem a
            memória do povo de <strong>Bom Despacho</strong>, sejam eles
            documentos públicos ou privados.
          </Text>
          <Image>
            <img src={priestsImage} alt="Padres" />
          </Image>
        </Column>
        <Column2>
          <Image2>
            <img src={villageImage} alt="Vila" />
          </Image2>
          <Text2>
            Aqui, o acervo estará preservado e também poderá ser facilmente
            acessado por você e por todas as pessoas, de onde estiverem. Você
            pode buscar por nomes, datas, locais, eventos ou livremente navegar
            pelo site.
          </Text2>
        </Column2>
      </Whole>
      <Image3>
        <p>
          O importante é que você, que de alguma forma é parte de Bom Despacho,
          se encontre e se identifique como personagem da nossa história!
        </p>
      </Image3>
      <Whole2>
        <Column3>
          <Text3>
            Por aqui, você encontra também a narrativa da formação de Bom
            Despacho, registrando desde os povos originários que habitavam a
            região, até a atualidade.
          </Text3>

          <Text3>
            O Nossa História se propõe a ser sempre uma produção coletiva,
            portanto construído de forma interativa e colaborativa, tendo como
            único objetivo, manter viva as nossas memórias.
          </Text3>
        </Column3>
        <Column4>
          <Image4>
            <img src={bomDespacho} alt="bomDespacho" />
          </Image4>
        </Column4>
      </Whole2>
      <Who>&ensp; Quem Somos?</Who>
      <Column5>
        <Text4>
          O Site Nossa História – Escrita, Imagem e Som é a parte de uma rede de
          mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ.
        </Text4>
        <Text4>
          A CASA TUÉ-TIMBUÁ é uma Organização Não Governamental (ONG), portanto
          sem fins lucrativos, criada para atuar na cidade de Bom Despacho no
          desenvolvimento de projetos nas áreas da educação, cultura, ensino e
          meio-ambiente, a qual tem como Coordenador Herberton Sabino – Pinta.
        </Text4>
      </Column5>
      <Name>Herberton Pinta</Name>
      <Whole3>
        <Column6>
          <Name2>Herberton Pinta</Name2>

          <Image5>
            <img src={herbertonImage} alt="Herberton" />
          </Image5>
        </Column6>
        <Column7>
          <Text5>
            Como muitos nascidos em Bom Despacho, sou mais conhecido por um
            apelido, que é Pinta. Sou filho de José Raimundo Sabino, o “Major”
            Sabino e de Martha Maria Sabino, a “Martinha do Sabino”. Nasci na
            Vila Militar, assim como meus outros 8 irmãos, cresci no Arraial,
            hoje bairro São José e depois, com o falecimento de meu pai, me
            mudei para a Praça da Matriz. Sou Professor de História, mestre em
            Educação e Gestão Social, atuo como consultor na área de educação,
            ensino e gestão e coordeno a ONG Casa Tué-Timbuá.
          </Text5>
        </Column7>
      </Whole3>
      <Column8>
        <Text4>
          O site é parte de uma Rede, que inclui o twitter, Instagram e
          facebook, criada para o compartilhamento da memória e história de Bom
          Despacho e para a divulgação dos eventos culturais de nossa cidade.
        </Text4>
        <Text4>
          Porém, esse site só existe por ser concebido como uma plataforma
          interativa e colaborativa, somente existe a partir da contribuição da
          comunidade de Bom Despacho.
        </Text4>
      </Column8>
      <Image6>
        <p>
          Por ser assim, todos, de todas as classes sociais, credos, cores e
          amores que de alguma forma se sintam pertencentes à Bom Despacho e que
          contribuam com fotografias, vídeos, escritas ou que apoiem,
          compartilhem ou divulguem nossa memória histórica são parte desse
          projeto, portanto, parte do quem somos.
        </p>
      </Image6>
    </Container>
  );
}
