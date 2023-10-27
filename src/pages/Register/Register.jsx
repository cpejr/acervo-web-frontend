import React, { useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router';

import {
  Container,
  Text2,
  Text3,
  Row,
  Square,
  TextTransition,
  Lines,
} from './Styles';

export default function Register() {
  const navigate = useNavigate();
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
          <Square
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={() => {
              navigate('/cadastro-aluno');
            }}
          >
            <TextTransition visible={showOriginalText}>
              Cadastro de aluno na área escolar
            </TextTransition>
            <TextTransition visible={!showOriginalText}>
              Quero estudar a História de Bom Despacho!
            </TextTransition>
          </Square>
          <Square
            onMouseEnter={handleHover2}
            onMouseLeave={handleMouseLeave2}
            onClick={() => {
              navigate('/cadastro-pessoa-fisica');
            }}
          >
            <TextTransition visible={showOriginalText2}>
              Cadastro de pessoa física
            </TextTransition>
            <TextTransition visible={!showOriginalText2}>
              Quero ser parceiro/apoiador do projeto!
            </TextTransition>
          </Square>
          <Square
            onMouseEnter={handleHover3}
            onMouseLeave={handleMouseLeave3}
            onClick={() => {
              navigate('/cadastro-pessoa-juridica');
            }}
          >
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
