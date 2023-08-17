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
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
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
    width: 60%;
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
      font-size: 3.6rem;
    }

    @media (max-width: 1275px) {
      font-size: 3.4rem;
    }
    @media (max-width: 1175px) {
      font-size: 3.1rem;
    }
    @media (max-width: 975px) {
      font-size: 2.4rem;
      width: 80%;
    }
  }
`;
export const Whole2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
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
  }
  @media (max-width: 670px) {
    width: 50%;
  }
  @media (max-width: 510px) {
    width: 40%;
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
    right: 10rem;
  }
  @media (max-width: 510px) {
    right: 13rem;
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
  @media (max-width: 1640px) {
    top: 7rem;
  }
  @media (max-width: 990px) {
    top: 3rem;
    font-size: 1.7rem;
  }
`;
export const Image4 = styled.div`
  margin-right: 3rem;
  > img {
    position: relative;
    @media (max-width: 1375px) {
      width: 85%;
    }
    @media (max-width: 1544px) {
    }
    @media (max-width: 1275px) {
    }
    @media (max-width: 1175px) {
    }
    @media (max-width: 415px) {
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
`;
export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Text4 = styled.text`
  width: 100%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
`;
export const Whole3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;
export const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 35%;
  height: 100%;
  gap: 2rem;
`;
export const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 65%;
  height: 100%;
  gap: 2rem;
`;
export const Image5 = styled.div`
  margin-left: 5rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
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
  width: 90%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
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
      width: 70%;
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
      width: 70%;
    }
  }
`;
