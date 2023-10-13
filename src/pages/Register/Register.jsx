import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { LogoDespacho } from '../../assets/home';
import {
  Image,
  Container,
  Header,
  Text,
  Text2,
  Text3,
  Row,
  Square,
  TextTransition,
  Line,
  Lines,
} from './Styles';

export default function Register() {
  //   const navigate = useNavigate();
  const [showOriginalText, setShowOriginalText] = useState(true);
  const [showOriginalText2, setShowOriginalText2] = useState(true);
  const [showOriginalText3, setShowOriginalText3] = useState(true);

  const handleHover = () => {
    setShowOriginalText(false);
  };

  const handleMouseLeave = () => {
    setShowOriginalText(true);
  };
  const handleHover2 = () => {
    setShowOriginalText2(false);
  };

  const handleMouseLeave2 = () => {
    setShowOriginalText2(true);
  };
  const handleHover3 = () => {
    setShowOriginalText3(false);
  };

  const handleMouseLeave3 = () => {
    setShowOriginalText3(true);
  };
  const isSmallScreen = useMediaQuery({ maxWidth: 1140 });

  return (
    <Container>
      <Header>
        <Line>
          <Image>
            <img src={LogoDespacho} alt="logo branca" />
          </Image>
          <Text>Cadastre-se</Text>
        </Line>
      </Header>
      {isSmallScreen ? (
        <>
          <Text2>Qual o meu tipo de cadastro?</Text2>
          <Row>
            <Lines>
              <Square>Cadastro de aluno na área escolar</Square>
              <Text3>Quero estudar a História de Bom Despacho!</Text3>
            </Lines>
            <Lines>
              <Square>Cadastro de pessoa física</Square>
              <Text3>Quero ser parceiro/apoiador do projeto!</Text3>
            </Lines>
            <Lines>
              <Square>Cadastro de pessoa jurídica</Square>
              <Text3>Quero ser parceiro/apoiador do projeto!</Text3>
            </Lines>
          </Row>
        </>
      ) : (
        <Row>
          <Square onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <TextTransition visible={showOriginalText}>
              Cadastro de aluno na área escolar
            </TextTransition>
            <TextTransition visible={!showOriginalText}>
              Quero estudar a História de Bom Despacho!
            </TextTransition>
          </Square>
          <Square onMouseEnter={handleHover2} onMouseLeave={handleMouseLeave2}>
            <TextTransition visible={showOriginalText2}>
              Cadastro de pessoa física
            </TextTransition>
            <TextTransition visible={!showOriginalText2}>
              Quero ser parceiro/apoiador do projeto!
            </TextTransition>
          </Square>
          <Square onMouseEnter={handleHover3} onMouseLeave={handleMouseLeave3}>
            <TextTransition visible={showOriginalText3}>
              Cadastro de pessoa jurídica
            </TextTransition>
            <TextTransition visible={!showOriginalText3}>
              Quero ser parceiro/apoiador do projeto!
            </TextTransition>
          </Square>
        </Row>
      )}
    </Container>
  );
}
