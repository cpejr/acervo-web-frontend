import styled from 'styled-components';

export const Body = styled.div``;
export const Apresentation = styled.div`
  width: 100%;
  margin-top: 15rem;
`;
export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.title};
  color: #ffff;
  font-size: 10.5rem;
  margin-left: 5rem;
  position: absolute;
  z-index: 10;

  @media (max-width: 1900px) {
    font-size: 10.3rem;
  }
  @media (max-width: 1790px) {
    font-size: 10rem;
  }
  @media (max-width: 1680px) {
    font-size: 9.7rem;
  }
  @media (max-width: 1580px) {
    font-size: 9.3rem;
  }

  @media (max-width: 1342px) {
    font-size: 8.7rem;
  }
`;
export const Info = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 7rem;
`;
export const Containerone = styled.div`
  width: 50%;
  height: 70rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  margin-left: 10rem;
  gap: 3rem;

  @media (max-width: 1560px) {
    bottom: 10rem;
  }
`;
export const Containertwo = styled.div`
  width: 50%;
  height: 70rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  margin-left: 10rem;
  gap: 3rem;
  right: 16rem;

  @media (max-width: 1900px) {
    right: 20rem;
  }

  @media (max-width: 1400px) {
    right: 22rem;
  }
`;

export const Containerthree = styled.div`
  width: 80%;
  height: 80rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  align-items: center;
  margin-left: 10rem;
  margin-bottom: 5rem;
  gap: 3rem;
`;
export const Image = styled.div`
  color: ${(props) => props.theme.colors.fontDialog};
  width: 60rem;
  //height: 70rem;
  max-height: 45rem;
  background-color: black;
  align-items: center;
  margin-right: 35rem;
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    width: 90%;
    height: 85%;
    margin-bottom: 3rem;
    max-width: 100%;
    max-height: 100%;

    @media (max-width: 1900px) {
      width: 85%;
      height: 80%;
    }
  }
  @media (max-width: 1600px) {
    width: 50rem;
    max-height: 35rem;
  }
  @media (max-width: 1400px) {
    width: 45rem;
    max-height: 25em;
  }
  @media (max-width: 1250px) {
    width: 40rem;
    max-height: 25rem;
  }
  @media (max-width: 1150px) {
    width: 40rem;
    max-height: 20sem;
  }
`;
export const Imagetwo = styled.div`
  position: relative;
  height: auto;

  img {
    width: 100%;
    height: auto;
  }

  .image-overlay {
    position: absolute;
    top: 50%; /* Posição vertical no centro */
    left: 50%; /* Posição horizontal no centro */
    transform: translate(-50%, -50%); /* Centraliza o conteúdo */
    color: white;
    padding: 10px;
  }
`;

export const Text = styled.div`
  font-family: 'cabin';
  color: #ffff;
  font-size: 4rem;
  width: 100%;
  height: 100%;
  z-index: 5;

  p {
    max-width: 200rem;
  }

  @media (max-width: 1900px) {
    font-size: 3.7rem;

    height: 60rem;
  }
  @media (max-width: 1790px) {
    font-size: 3.3rem;
    height: 20rem;
  }
  @media (max-width: 1680px) {
    font-size: 3rem;
  }
  @media (max-width: 1580px) {
    font-size: 2.7rem;
  }

  @media (max-width: 1342px) {
    font-size: 2.3rem;
  }
`;

export const Text3 = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  color: #ffff;
  font-size: 4rem;
  text-align: justify-all;
  width: 100%;
  position: relative;
  right: 20rem;
  z-index: 4;

  @media (max-width: 1900px) {
    font-size: 3.7rem;
  }
  @media (max-width: 1790px) {
    font-size: 3.3rem;
  }
  @media (max-width: 1680px) {
    font-size: 3rem;
  }
  @media (max-width: 1580px) {
    font-size: 2.7rem;
  }
  @media (max-width: 1480px) {
    font-size: 2.3rem;
  }
  @media (max-width: 1342px) {
    font-size: 2rem;
  }
`;

export const Text2 = styled.div`
  font-family: 'cabin';
  color: #ffff;
  font-size: 3rem;
  text-align: center;
  width: 100%;
  margin-bottom: 5rem;

  /* Estilização para o texto em itálico */
  i {
    font-style: italic;
  }
  strong {
    font-weight: bold;
  }
  p {
    position: relative;
    top: 2rem;
  }
`;

export const History = styled.div`
  width: 60%;
  height: 60rem;
  display: grid; /* Usar display grid */
  gap: 3rem; /* Espaçamento entre as divs filhas */
  z-index: 2;
`;
export const Logo = styled.div`
  width: 50%;
  height: 100%;
  text-align: left;
  background-color: #7f260f;
`;

export const Image2 = styled.div`
  color: ${(props) => props.theme.colors.fontDialog};
  width: 60%;
  height: 60rem;
  align-items: center;
  margin-right: 30rem;

  position: relative; /* Certifique-se de que o contêiner seja posicionado */
  top: 7%; /* Posição vertical no centro */
  right: 15rem;
  width: 100%;
  height: auto; /* Para garantir que a altura da imagem seja ajustada automaticamente */

  img {
    width: 100%;
    height: auto;
  }

  .image-overlay {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: white;
    padding: 10px;
  }
`;
export const Line = styled.div`
  width: 41%;
  height: 0.2rem;
  background-color: #ffd599;
  border-radius: 26%;
  margin-bottom: 2rem;
  position: absolute;
  top: 17rem;
`;

export const WhoTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  color: #ffff;
  font-size: 10.5rem;
  margin-left: 5rem;
  position: absolute;
  z-index: 10;
`;

export const Who = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  color: white;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 100;
  font-size: 2.75rem;
  line-height: 3.4rem;

  margin-bottom: 2%;
  margin-right: 5%;
  width: 100%;
  gap: 3rem;
`;

export const Whoare = styled.div`
  margin-top: 15rem;
  margin-left: 10rem;
  height: 100%;
  margin-top: 15rem;
  margin-left: 10rem;
  height: 100%;
  line-height: 5rem;
`;

export const WhoSubTitle = styled.h1`
  color: white;
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 500;
  font-style: normal;
  font-size: 6rem;
  margin-bottom: 3%;
  width: fit-content;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46.6rem;
  height: auto;
  left: 83.4rem;
  top: 4.5rem;
  max-width: 100%;
  object-fit: scale-down;
  margin-left: 3%;
  width: max-content;
`;

export const Background = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46.6rem;
  height: auto;
  left: 83.4rem;
  top: 4.5rem;
  max-width: 100%;
  object-fit: scale-down;
  width: 100%;
  height: fit-content;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-top: 5rem;

  margin-bottom: 3%;
`;

export const Biography = styled.div`
  margin-right: 3%;
`;

export const Line2 = styled.div`
  width: 41%;
  height: 0.2rem;
  background-color: #ffd599;
  border-radius: 26%;
  margin-bottom: 2rem;
  position: absolute;
  top: 209rem;
  z-index: 1;

  @media (max-width: 1500px) {
    top: 100rem;
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46.6rem;
  height: auto;
  left: 83.4rem;
  top: 4.5rem;
  max-width: 100%;
  object-fit: scale-down;
  margin-left: 5%;
`;
