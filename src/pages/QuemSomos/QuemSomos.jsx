import React from 'react';
import {
  Content,
  Title,
  LineTitle,
  TextArea1,
  Area2,
  TextArea2,
  Area3,
  TextArea3,
  TextArea4,
  TextArea5,
  TextArea6,
  SubTitle,
  ImageArea1,
  Image1,
  Image2,
  ImageBox,
  ImageBox2,
} from './Styles';

export default function QuemSomos() {
  return (
    <Content>
      <Title>Quem somos</Title>
      <LineTitle />
      <TextArea1>
        O Site Nossa História – Escrita, Imagem e Som é a parte de uma rede de
        mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ. A CASA TUÉ-TIMBUÁ é uma
        Organização Não Governamental (ONG), portanto sem fins lucrativos,
        criada para atuar na cidade de Bom Despacho no desenvolvimento de
        projetos nas áreas da educação, cultura, ensino e meio-ambiente, a qual
        tem como Coordenador Herberton Sabino – Pinta.
      </TextArea1>
      <Area2>
        <ImageArea1>
          <SubTitle>Herberton Pinta</SubTitle>
          <ImageBox>
            <Image1 src="" alt="HerbertonImage" />
          </ImageBox>
        </ImageArea1>
        <TextArea2>
          Como muitos nascidos em Bom Despacho, sou mais conhecido por um
          apelido, que é Pinta. Sou filho de José Raimundo Sabino, o “Major”
          Sabino e de Martha Maria Sabino, a “Martinha do Sabino”. Nasci na Vila
          Militar, assim como meus outros 8 irmãos, cresci no Arraial, hoje
          bairro São José e depois, com o falecimento de meu pai, me mudei para
          a Praça da Matriz. Sou Professor de História, mestre em Educação e
          Gestão Social, atuo como consultor na área de educação, ensino e
          gestão e coordeno a ONG Casa Tué-Timbuá.
        </TextArea2>
      </Area2>
      <Area3>
        <TextArea6>
          <TextArea3>
            O site é parte de uma Rede, que inclui o X, Instagram e Facebook,
            criada para o compartilhamento da memória e história de Bom Despacho
            e para a divulgação dos eventos culturais de nossa cidade.
          </TextArea3>
          <TextArea4>
            Porém, esse site só existe por ser concebido como uma plataforma
            interativa e colaborativa, somente existe a partir da contribuição
            da comunidade de Bom Despacho.
          </TextArea4>
        </TextArea6>
        <ImageBox2>
          <Image2 src="" alt="BomDespachoImage" />
        </ImageBox2>
      </Area3>
      <TextArea5>
        Por ser assim, todos, de todas as classes sociais, credos, cores e
        amores que de alguma forma se sintam pertencentes à Bom Despacho e que
        contribuam com fotografias, vídeos, escritas ou que apoiem, compartilhem
        ou divulguem nossa memória histórica são parte desse projeto, portanto,
        parte do quem somos.
      </TextArea5>
    </Content>
  );
}
