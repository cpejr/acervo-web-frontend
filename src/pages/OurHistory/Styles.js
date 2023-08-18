/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import acervo from '../../img/acervo.jpg';

const mobileBreakPoint = '820px';
const deskBreakPoint = '1950px';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
`;

export const Apresentation = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  text-align: center;
  text-decoration: underline #ffd599;
  border-radius: 5rem;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;

  @media (max-width: 1375px) {
    font-size: 6rem;
  }

  @media (max-width: 1275px) {
    font-size: 5.5rem;
  }

  @media (max-width: 720px) {
  }
  @media (max-width: 650px) {
    font-size: 4.5rem;
  }
  @media (max-width: 510px) {
    font-size: 4.5rem;
  }

  @media (max-width: 490px) {
    font-size: 4rem;
  }
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 1590px) {
    width: 90%;
  }
  @media (max-width: 1410px) {
    width: 100%;
  }

  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }

  @media (max-width: 570px) {
    //ajuste de posição
    position: relative;
    right: 5rem;
  }
  @media (max-width: 490px) {
    //ajuste de posição
    position: relative;
    right: 7rem;
  }

  @media (max-width: 490px) {
    gap: 2rem;
  }

  @media (max-width: 360px) {
    gap: 1rem;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
  }
`;
export const Text = styled.text`
  margin-left: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;

  @media (max-width: 1375px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1275px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1175px) {
    font-size: 2.1rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
  }
  @media (max-width: 720px) {
    // começar a diminuir
    max-width: 60%;
    margin-left: 10rem;
  }
  @media (max-width: 650px) {
    max-width: 50%;
    margin-left: 12rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }

  @media (max-width: 490px) {
    max-width: 40%;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
    max-width: 30%;
  }
`;

export const Text2 = styled.text`
  margin-right: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;

  @media (max-width: 1375px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1275px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1175px) {
    font-size: 2.1rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
  }
  @media (max-width: 720px) {
    // começar a diminuir
    max-width: 60%;
    margin-left: 10rem;
  }
  @media (max-width: 650px) {
    max-width: 50%;
    margin-left: 12rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }

  @media (max-width: 490px) {
    max-width: 40%;
  }
  @media (max-width: 360px) {
    font-size: 1.2rem;
    max-width: 30%;
  }
`;

export const Image = styled.div`
  margin-left: 3rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;

    @media (max-width: 1275px) {
      width: 90%;
    }

    @media (max-width: 1175px) {
      width: 85%;
    }
    @media (max-width: ${mobileBreakPoint}) {
      display: none;
    }
  }
`;

export const Image2 = styled.div`
  margin-right: 3rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;

    @media (max-width: 1275px) {
      width: 90%;
    }
    @media (max-width: 1175px) {
      width: 85%;
    }
  }
  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
  height: 100%;
  gap: 2rem;

  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
  }
`;

export const Image3 = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  background-image: url(${acervo});
  background-size: 100% 100%;
  background-position: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  p {
    font-size: 4rem;
    @media (max-width: 1375px) {
      font-size: 2.6rem;
    }

    @media (max-width: 1275px) {
      font-size: 2.4rem;
    }
    @media (max-width: 1175px) {
      font-size: 2.1rem;
    }
    @media (max-width: ${mobileBreakPoint}) {
      margin: auto;
    }
    @media (max-width: 720px) {
      // começar a diminuir
      max-width: 60%;
      margin-left: 10rem;
    }
    @media (max-width: 650px) {
      max-width: 50%;
      margin-left: 12rem;
    }
    @media (max-width: 510px) {
      font-size: 1.7rem;
    }

    @media (max-width: 570px) {
      //ajuste de posição
      position: relative;
      right: 5rem;
    }
    @media (max-width: 490px) {
      //ajuste de posição
      position: relative;
      right: 7rem;
      max-width: 40%;
    }
    @media (max-width: 360px) {
      font-size: 1.2rem;
      max-width: 30%;
    }
  }
`;
export const Whole2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;

  @media (max-width: 570px) {
    //ajuste de posição
    width: 100%;
    position: relative;
    right: 5rem;
  }
  @media (max-width: 490px) {
    //ajuste de posição
    width: 100%;
    position: relative;
    right: 7rem;
  }
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  height: 100%;
  gap: 2rem;
  position: relative;
  z-index: 2;
  @media (max-width: 1730px) {
    width: 55%;
  }
  @media (max-width: 1640px) {
    width: 60%;
    bottom: 7rem;
  }
  @media (max-width: 670px) {
    width: 55%;
  }
`;
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 60%;
  height: 100%;
  gap: 2rem;
  position: relative;
  z-index: 1;
  @media (max-width: 1730px) {
    width: 45%;
  }
  @media (max-width: 1640px) {
    width: 40%;
  }
  @media (max-width: 670px) {
    width: 50%;
    right: 5rem;
  }
  @media (max-width: 510px) {
    right: 1rem;
  }
  @media (max-width: 475px) {
    right: 10rem;
  }
`;
export const Text3 = styled.text`
  width: 100%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
  position: relative;
  top: 10rem;
  z-index: 10;
  @media (max-width: 1375px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1275px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1175px) {
    font-size: 2.1rem;
  }

  @media (max-width: 720px) {
    // começar a diminuir
    margin-left: 10rem;
  }
  @media (max-width: 650px) {
    margin-left: 12rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }

  @media (max-width: 490px) {
    max-width: 70%;
  }

  @media (max-width: 490px) {
    max-width: 60%;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
    max-width: 50%;
  }
`;
export const Image4 = styled.div`
  margin-right: 3rem;
  > img {
    position: relative;
    @media (max-width: 1375px) {
      width: 85%;
    }
    @media (max-width: 570px) {
      //ajuste de posição
      position: relative;
      right: 5rem;
    }
    @media (max-width: 490px) {
      //ajuste de posição
      position: relative;
      right: 7rem;
    }
  }
`;
export const Who = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  text-align: center;
  text-decoration: underline #ffd599;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
  @media (max-width: 1375px) {
    font-size: 6rem;
  }

  @media (max-width: 1275px) {
    font-size: 5.5rem;
  }

  @media (max-width: 720px) {
  }
  @media (max-width: 650px) {
    font-size: 4.5rem;
  }
  @media (max-width: 510px) {
    font-size: 4.5rem;
  }

  @media (max-width: 490px) {
    font-size: 4rem;
  }
`;
export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Text4 = styled.text`
  width: 80%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
  @media (max-width: 1375px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1275px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1175px) {
    font-size: 2.1rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    position: relative;
    right: 5rem;
  }
  @media (max-width: 720px) {
    position: relative;
    left: 3rem;
  }
  @media (max-width: 650px) {
    max-width: 50%;
    margin-left: 12rem;
    left: 0rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }

  @media (max-width: 490px) {
    max-width: 40%;
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
    max-width: 30%;
  }
`;

export const Image5 = styled.div`
  margin-right: 3rem;

  > img {
    position: relative;
    @media (max-width: 1375px) {
      width: 85%;
    }
    @media (max-width: 570px) {
      //ajuste de posição
      position: relative;
      right: 5rem;
    }
    @media (max-width: 490px) {
      //ajuste de posição
      position: relative;
      right: 7rem;
    }
  }
`;

export const Whole3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  height: auto;
  margin-left: 3rem;

  @media (max-width: 1590px) {
    width: 90%;
  }
  @media (max-width: 1410px) {
    width: 100%;
  }

  @media (max-width: ${mobileBreakPoint}) {
  }

  @media (max-width: 570px) {
    //ajuste de posição
    position: relative;
    right: 5rem;
  }
  @media (max-width: 490px) {
    //ajuste de posição
    position: relative;
    right: 7rem;
  }

  @media (max-width: 490px) {
  }

  @media (max-width: 360px) {
    width: 70%;
  }
`;
export const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  gap: 4rem;
`;
export const Column6 = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
  gap: 2rem;
  position: relative;
  z-index: 1;
  @media (max-width: 1730px) {
    width: 45%;
  }
  @media (max-width: 1640px) {
    width: 40%;
  }
  @media (max-width: 670px) {
    width: 50%;
    right: 5rem;
  }
  @media (max-width: 510px) {
    right: 1rem;
  }
  @media (max-width: 475px) {
    //right: 10rem;
  }
`;

export const Name = styled.div`
  margin-top: 3rem;

  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
`;
export const Text5 = styled.text`
  width: 100%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  position: relative;
  top: 11rem;
  margin-left: 3rem;
  @media (max-width: 1375px) {
    font-size: 2.6rem;
  }

  @media (max-width: 1275px) {
    font-size: 2.4rem;
  }
  @media (max-width: 1175px) {
    font-size: 2.1rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    top: 5rem;
  }
  @media (max-width: 720px) {
    position: relative;
    left: 3rem;
    top: 2rem;
  }
  @media (max-width: 650px) {
    left: 0rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }

  @media (max-width: 490px) {
  }

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;
export const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Image6 = styled.div`
  display: flex;
  width: 100%;
  height: 41rem;
  background-image: url(${acervo});
  background-size: 100% 100%;
  background-position: center;
  font-size: 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  p {
    font-size: 4rem;
    @media (max-width: 1375px) {
      font-size: 2.6rem;
    }

    @media (max-width: 1275px) {
      font-size: 2.4rem;
    }
    @media (max-width: 1175px) {
      font-size: 2.1rem;
    }
    @media (max-width: ${mobileBreakPoint}) {
      margin: auto;
    }
    @media (max-width: 720px) {
      // começar a diminuir
      max-width: 60%;
      margin-left: 10rem;
    }
    @media (max-width: 650px) {
      max-width: 50%;
      margin-left: 12rem;
    }
    @media (max-width: 510px) {
      font-size: 1.7rem;
    }

    @media (max-width: 570px) {
      //ajuste de posição
      position: relative;
      right: 0rem;
    }
    @media (max-width: 490px) {
      //ajuste de posição
      position: relative;
      max-width: 40%;
    }
    @media (max-width: 360px) {
      font-size: 1.2rem;
      max-width: 30%;
    }
  }
`;
export const Conditional = styled.div`
  @media (max-width: ${deskBreakPoint}) {
    display: none;
  }
  @media (max-width: ${mobileBreakPoint}) {
    display: block;
    display: flex;
    flex-direction: row;
    gap: 0rem;
    margin-left: 3.5rem;
  }
  @media (max-width: 720px) {
    width: 90%;
  }

  @media (max-width: 720px) {
    width: 70%;
    margin-right: 8rem;
  }
  @media (max-width: 650px) {
    max-width: 55%;
    margin-left: 0rem;
  }

  @media (max-width: 510px) {
    max-width: 55%;
    margin-left: 0rem;
  }

  @media (max-width: 490px) {
    max-width: 45%;
    margin-right: 18rem;
  }

  @media (max-width: 360px) {
    max-width: 35%;
    margin-right: 25rem;
  }
`;

export const Image7 = styled.div`
  margin-right: 3rem;

  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;

    @media (max-width: ${deskBreakPoint}) {
      display: none;
    }
    @media (max-width: ${mobileBreakPoint}) {
      display: block;
      width: 85%;
    }
    @media (max-width: 720px) {
      width: 90%;
    }
    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;

export const Image8 = styled.div`
  margin-right: 3rem;

  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;

    @media (max-width: ${deskBreakPoint}) {
      display: none;
    }
    @media (max-width: ${mobileBreakPoint}) {
      display: block;
      width: 85%;
    }
    @media (max-width: 720px) {
      width: 90%;
    }
    @media (max-width: 650px) {
      width: 100%;
    }
  }
`;
