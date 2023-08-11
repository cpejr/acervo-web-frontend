import styled from 'styled-components';

export const Body = styled.div``;
export const Apresentation = styled.div`
  margin-top: 15rem;
`;
export const Title = styled.div`
  font-family: 'caramella';
  color: #ffff;
  font-size: 10.5rem;
  margin-left: 5rem;
  position: absolute;
  z-index: 10;
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
  width: 80%;
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
`;
export const Containertwo = styled.div`
  width: 80%;
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
  gap: 3rem;
`;
export const Image = styled.div`
  color: ${(props) => props.theme.colors.fontDialog};
  width: 60%;
  height: 70rem;
  background-color: black;
  align-items: center;
  margin-right: 35rem;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const Imagetwo = styled.div`
  position: relative;
  width: 100%;
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
  z-index: 5;

  p {
    max-width: 200rem;
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

export const Text3 = styled.div`
  font-family: 'cabin';
  color: #ffff;
  font-size: 4rem;
  text-align: justify-all;
  width: 100%;
  position: relative;
  right: 20rem;
  z-index: 4;
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
  position: absolute; /* Definir a posição como absoluta */
  top: 17rem; /* Ajustar a distância a partir do topo */
`;

// estilização who

export const WhoTitle = styled.h1`
  color: white;
  font-family: ${(props) => props.theme.fonts.aboutus};
  //font-family: 'Montserrat, sans-serif;';
  font-weight: 300;
  font-style: normal;
  font-size: 6rem;
  margin-bottom: 3%;
  margin-left: 5%;
  width: 100%;
  border-bottom: solid;
  border-color: white; //alterar linha
  border-width: 0.25rem;
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

export const WhoSubTitle = styled.h1`
  color: white;
  font-family: ${(props) => props.theme.fonts.aboutus};
  font-weight: 500;
  font-style: normal;
  font-size: 4rem;
  margin-bottom: 3%;
  margin-left: 5%;
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
  top: 204rem;
  z-index: 1;
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

  @media (max-width: 1100px) {
    margin-top: 3%;
  }
`;

export const Whoare = styled.div`
  margin-top: 15rem;
`;
