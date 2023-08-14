import {
  Apresentation,
  Body,
  Containerone,
  Containerthree,
  Containertwo,
  History,
  Image,
  Image2,
  Imagetwo,
  Info,
  Line,
  Logo,
  Who,
  Text,
  Text2,
  Text3,
  Title,
  Picture,
  WhoSubTitle,
  Container,
  Biography,
  Line2,
  Whoare,
} from './Styles';

import acervo from '/src/img/acervo.jpg';
import Vector from '/src/img/Vector.jpg';
import Despacho from '/src/img/Despacho.jpg';
import Bom from '/src/img/Bom.jpg';
import vila from '/src/img/vila.jpg';
import Padres from '/src/img/Padres.jpg';
import Herberton from '/src/img/Herberton.jpg';

export default function OurHistory() {
  return (
    <Body>
      <Title>Apresentação</Title>
      <Apresentation>
        <Line />

        <Info>
          <Containerone>
            <Text>
              O site {``}
              <i>
                Nossa História – Escrita, Imagem e som
                <br />
              </i>
              é um depositário do acervo de vídeos , <br /> fotografias, áudios
              e escritos que compõem a <br /> memória do povo de {``}
              <strong>Bom Despacho</strong>, sejam <br /> eles documentos
              públicos ou privados.
            </Text>
            <Image>
              <img src={Padres} alt="Padres" />
            </Image>
          </Containerone>
          <Containertwo>
            <Image>
              <img src={vila} alt="vila" />
            </Image>

            <Text3>
              Aqui, o acervo estará preservado <br /> e também poderá ser
              facilmente acessado <br />
              por você e por todas as pessoas, de onde <br />
              estiverem. Você pode buscar por nomes, <br /> datas, locais,
              eventos ou livremente <br />
              navegar pelo site.{' '}
            </Text3>
          </Containertwo>
        </Info>
      </Apresentation>
      <Imagetwo>
        <img
          style={{ width: '100%', height: '20vh' }}
          src={acervo}
          alt="acervoimage"
        />{' '}
        <div className="image-overlay">
          <Text2>
            <br /> O importante é que você, que de alguma forma é <br />
            parte de Bom Despacho, se encontre e se identifique como personagem
            da nossa história!
          </Text2>
        </div>
      </Imagetwo>

      <Containerthree>
        <History>
          <Text>
            Por aqui, você encontra também a narrativa
            <br /> da formação de Bom Despacho, registrando
            <br /> desde os povos originários que habitavam a<br />
            região, até a atualidade.
          </Text>
          <Text>
            O Nossa História se propõe a ser sempre uma
            <br /> produção coletiva, portanto construído de
            <br /> forma interativa e colaborativa, tendo como
            <br />
            único objetivo, manter viva as nossas
            <br /> memórias.
          </Text>
        </History>

        <Logo>
          <Image2>
            <img
              style={{ width: '95%', height: '95%' }}
              src={Vector}
              alt="MapaBomdespacho"
            />
            <div className="image-overlay">
              <img
                style={{ width: '40%', height: '12%' }}
                src={Bom}
                alt="Bom"
              />
              <img
                style={{ width: '70%', height: '16%' }}
                src={Despacho}
                alt="Despacho"
              />
            </div>
          </Image2>
        </Logo>
      </Containerthree>
      <Who>
        <Title>Quem somos</Title>
        <Line2 />
        <Whoare>
          <Text>
            O Site <i>Nossa História – Escrita, Imagem e Som </i>é a parte de
            uma rede
            <br />
            de mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ.
          </Text>
          <br />
          <Text>
            A CASA TUÉ-TIMBUÁ é uma Organização Não Governamental (ONG), <br />
            portanto sem fins lucrativos, criada para atuar na cidade de Bom
            Despacho no <br />
            desenvolvimento de projetos nas áreas da educação, cultura, ensino e
            meio- <br />
            ambiente, a qual tem como Coordenador Herberton Sabino – Pinta.
          </Text>
          <Container>
            <Picture src={Herberton} />
            <Biography>
              <WhoSubTitle> Herberton Pinta </WhoSubTitle>
              <Text>
                Como muitos nascidos em Bom Despacho, sou mais
                <br /> conhecido por um apelido, que é Pinta. Sou filho de José
                <br />
                Raimundo Sabino, o “Major” Sabino e de Martha Maria <br />
                Sabino, a “Martinha do Sabino”. Nasci na Vila Militar, assim
                <br />
                como meus outros 8 irmãos, cresci no Arraial, hoje bairro <br />
                São José e depois, com o falecimento de meu pai, me <br />
                mudei para a Praça da Matriz. Sou Professor de História,
                <br /> mestre em Educação e Gestão Social, atuo como
                <br /> consultor na área de educação, ensino e gestão e<br />{' '}
                coordeno a ONG Casa Tué-Timbuá.
              </Text>
            </Biography>
          </Container>
          <Text>
            <p>
              O site é parte de uma Rede, que inclui o twitter, Instagram e
              facebook, criada <br />
              para o compartilhamento da memória e história de Bom Despacho e
              para a<br /> divulgação dos eventos culturais de nossa cidade.
            </p>
          </Text>
          <Text>
            <p>
              Porém, esse site só existe por ser concebido como uma plataforma
              interativa <br />e colaborativa, somente existe a partir da
              contribuição da comunidade de
              <br /> Bom Despacho.
            </p>
          </Text>
        </Whoare>
        <Imagetwo>
          <img
            style={{ width: '100%', height: '20vh' }}
            src={acervo}
            alt="acervoimage"
          />{' '}
          <div className="image-overlay">
            <Text2>
              <br />
              Por ser assim, todos, de todas as classes sociais, credos, cores e
              amores que de alguma forma se sintam pertencentes à Bom Despacho e
              que contribuam com fotografias, vídeos, escritas ou que apoiem,
              compartilhem ou divulguem nossa memória histórica são parte desse
              projeto, portanto, parte do quem somos.
            </Text2>
          </div>
        </Imagetwo>
      </Who>
    </Body>
  );
}
