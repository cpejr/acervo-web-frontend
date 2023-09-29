import styled from 'styled-components';

import acervo from '../../assets/ourHistory/acervo.jpg';

const mobileBreakPoint = '820px';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
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
  font-size: 6rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 5rem;
  }
  @media (max-width: 430px) {
    font-size: 3.7rem;
  }
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  height: auto;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  position: relative;
  left: 17rem;
  @media (max-width: 1616px) {
    left: 7rem;
  }
  @media (max-width: 1410px) {
    left: 0rem;
  }
  @media (max-width: 1590px) {
    width: 90%;
  }
  @media (max-width: 1410px) {
    width: 95%;
  }
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
  @media (max-width: 570px) {
    right: 5rem;
  }
  @media (max-width: 490px) {
    gap: 2rem;
    right: 50rem;
  }
  @media (max-width: 370px) {
    gap: 1rem;
    bottom: 3rem;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
  align-items: center;
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
  }
`;

// first text first column first section
export const Text = styled.text`
  margin-left: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;

  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    font-size: 2rem;
  }
`;

// second text first column first section
export const Text2 = styled.text`
  margin-left: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;

  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    font-size: 2rem;
  }
`;

export const Image = styled.div`
  margin-left: 3rem;
  align-items: center;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
    @media (max-width: 1275px) {
      width: 90%;
      margin-left: 3rem;
    }
    @media (max-width: 1175px) {
      width: 85%;
    }
    @media (max-width: 820px) {
      max-width: 53.5rem;
    }
    @media (max-width: 610px) {
      margin-left: 2rem;
      background-color: yellow;
    }
    @media (max-width: 500px) {
      margin-left: 1rem;
    }
    @media (max-width: 360px) {
      margin-left: 0rem;
    }
  }
`;

export const Image2 = styled.div`
  margin-left: 3rem;
  align-items: center;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
    @media (max-width: 1275px) {
      width: 90%;
      margin-left: 3rem;
    }
    @media (max-width: 1175px) {
      width: 85%;
    }
    @media (max-width: 610px) {
      margin-left: 2rem;
    }
    @media (max-width: 500px) {
      margin-left: 1rem;
    }
    @media (max-width: 360px) {
      margin-left: 0rem;
    }
  }
`;
export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
  align-items: center;
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
    max-width: 80%;
    margin-right: 10rem;
    font-size: 3rem;
    @media (max-width: 1580px) {
      font-size: 2.6rem;
      margin-right: 0rem;
    }
    @media (max-width: 1375px) {
      font-size: 2.6rem;
    }

    @media (max-width: ${mobileBreakPoint}) {
      margin: auto;
      font-size: 2rem;
    }
  }
`;
export const Whole2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  position: relative;
  left: 17rem;
  margin-left: 1.8rem;
  height: 60rem;

  @media (max-width: 1616px) {
    left: 7rem;
  }

  @media (max-width: 1410px) {
    left: 0rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin-left: 4rem;
    max-height: 35rem;
    padding-bottom: 10rem;
  }
  @media (max-width: 700px) {
    padding-right: 6.5rem;
    flex-direction: column;
    right: 0rem;
  }

  @media (max-width: 570px) {
    width: 100%;
    right: 5rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 490px) {
    position: relative;
    right: 5rem;
    padding-bottom: 15rem;
  }

  @media (max-width: 330px) {
    right: 6.5rem;
    margin-bottom: 10rem;
  }
  @media (max-width: 300px) {
    width: 100%;
    margin-bottom: 40rem;
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
  @media (max-width: 1640px) {
    top: 5rem;
  }
  @media (max-width: 1730px) {
    width: 55%;
  }
  @media (max-width: 1410px) {
    top: 0rem;
  }
  @media (max-width: 1640px) {
    width: 60%;
    bottom: 7rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    top: 0rem;
    bottom: 30rem;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 60%;
  height: 60%;
  gap: 2rem;
  position: relative;
  z-index: -1;
  @media (max-width: 1730px) {
    width: 45%;
  }
  @media (max-width: 1640px) {
    width: 40%;
  }
`;
export const Text3 = styled.text`
  width: 100%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;
  margin-left: 3rem;
  position: relative;
  top: 10rem;
  z-index: 10;

  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    font-size: 2rem;
  }
`;
export const Image4 = styled.div`
  > img {
    display: flex;
    position: relative;
    right: 29%;
    max-height: 85%;
    z-index: -1;

    @media (max-width: 1590px) {
      right: 0rem;
    }
    @media (max-width: 1375px) {
      /* margin-left: 5rem; */
    }
    @media (max-width: 1410px) {
      width: 90%;
      height: 90%;
      /* top: 7rem; */
    }
    @media (max-width: 1310px) {
      top: 7rem;
    }
    @media (max-width: 930px) {
      top: 10rem;
    }
    @media (max-width: 700px) {
      margin-right: 0rem;
      left: 5rem;
      width: 0%;
      display: none;
    }
    @media (max-width: 570px) {
      margin-right: 0rem;
      left: 3rem;
      padding-top: 4rem;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 415px) {
      left: 5rem;
      right: 20rem;
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
  font-size: 6rem;
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 5rem;
  }
  @media (max-width: 430px) {
    font-size: 3.7rem;
  }
`;
export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
  @media (max-width: 370px) {
    position: relative;
    bottom: 3rem;
  }
`;
export const Text4 = styled.text`
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;
  margin-left: 3rem;
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    font-size: 2rem;
  }

  @media (max-width: 720px) {
    position: relative;
  }
  @media (max-width: 650px) {
    margin-left: 13.5rem;
    max-width: 90%;
    right: 10rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }
  @media (max-width: 490px) {
    max-width: 87%;
  }

  @media (max-width: 370px) {
    margin-left: 12.5rem;
  }
`;
export const Whole3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  right: 12%;
  margin-bottom: 5%;
  gap: 3rem;
  height: auto;
  margin-left: 3rem;
  @media (max-width: 1190px) {
    flex-direction: column;
  }
  @media (max-width: 1616px) {
    left: 1rem;
  }
  @media (max-width: 1590px) {
    width: 90%;
  }
  @media (max-width: 1410px) {
    width: 100%;
  }
  @media (max-width: 1190px) {
    margin-left: 0rem;
    left: 0rem;
  }
  @media (max-width: 570px) {
    right: 5rem;
  }
  @media (max-width: 490px) {
    gap: 2rem;
    right: 50rem;
  }
  @media (max-width: 360px) {
    gap: 1rem;
    bottom: 1rem;
  }
`;
export const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  display: flex;
  align-items: end;
  width: 60%;
  height: 100%;
  gap: 2rem;
  position: relative;
  z-index: 1;
  @media (max-width: 1730px) {
    width: 45%;
    left: 12rem;
  }
  @media (max-width: 1640px) {
    width: 45%;
    right: 1rem;
  }
  @media (max-width: 1616px) {
    left: 1rem;
    top: 8rem;
  }
  @media (max-width: 1375px) {
    left: 0rem;
    top: 0rem;
  }

  @media (max-width: 1190px) {
    width: 100%;
    align-items: center;
  }
  @media (max-width: 670px) {
    width: 50%;
    left: 0rem;
    margin-left: 0rem;
    right: 0rem;
  }

  @media (max-width: 440px) {
    margin-right: 10rem;
  }
`;
export const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Image5 = styled.div`
  margin-right: 3rem;
  > img {
    position: relative;
    z-index: 1;
    @media (max-width: 1780px) {
      left: 5rem;
    }
    @media (max-width: 1640px) {
      width: 98%;
      bottom: 4rem;
    }

    @media (max-width: 1375px) {
      width: 85%;
      margin-bottom: 10rem;
      bottom: 0rem;
      top: 5rem;
    }
    @media (max-width: 1190px) {
      width: 100%;
      margin-right: 0rem;
      position: initial;
      margin-bottom: 0;
    }
    @media (max-width: 820px) {
      left: 1.5rem;
    }
    @media (max-width: 670px) {
      left: 19rem;
      position: relative;
    }
    @media (max-width: 650px) {
      left: 17rem;
      top: 0;
    }
    @media (max-width: 490px) {
      left: 13rem;
    }
    @media (max-width: 440px) {
      left: 13rem;
    }
    @media (max-width: 330px) {
      left: 10rem;
    }
  }
`;
export const Name = styled.div`
  margin-top: 3rem;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  font-size: 6rem;
  @media (max-width: 1190px) {
    display: none;
  }
  @media (max-width: 1617px) {
    margin-left: 40rem;
  }
  @media (max-width: 1375px) {
    font-size: 6rem;
  }
  @media (max-width: 1275px) {
    font-size: 5.5rem;
    margin-right: 2.5rem;
  }

  @media (max-width: 1190px) {
    font-size: 5.5rem;
    margin-left: 0rem;
  }
  @media (max-width: 820px) {
    margin-left: 3rem;
  }
  @media (max-width: 650px) {
    font-size: 4rem;
  }
  @media (max-width: 560px) {
    position: relative;
    left: 1.5rem;
  }

  @media (max-width: 490px) {
    font-size: 2.5rem;
    left: 0rem;
    margin-left: 0rem;
    right: 10rem;
  }
  @media (max-width: 290px) {
  }
`;

export const Name2 = styled.div`
  margin-top: 3rem;
  text-align: center;
  justify-content: center;
  color: #ffffff;
  font-size: 7rem;
  display: none;
  @media (max-width: 1190px) {
    display: flex;
  }
  @media (max-width: 1617px) {
    margin-left: 40rem;
  }
  @media (max-width: 1375px) {
    font-size: 6rem;
  }
  @media (max-width: 1275px) {
    font-size: 5.5rem;
    margin-right: 2.5rem;
  }

  @media (max-width: 1190px) {
    font-size: 5.5rem;
    margin-left: 0rem;
  }

  @media (max-width: 670px) {
    font-size: 4rem;
    margin-left: 39rem;
  }
  @media (max-width: 650px) {
    font-size: 4rem;
    margin-left: 34rem;
  }
  @media (max-width: 560px) {
    position: relative;
    left: 1.5rem;
    margin-left: 30rem;
  }

  @media (max-width: 490px) {
    font-size: 2.5rem;
    left: 0rem;
    margin-right: 8rem;
    right: 10rem;
    margin-left: 27rem;
  }
  @media (max-width: 490px) {
    left: 2rem;
  }
  @media (max-width: 330px) {
    margin-left: 22rem;
  }
`;
export const Text5 = styled.text`
  width: 100%;
  position: relative;
  top: 12%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;
  margin-left: 3rem;
  @media (max-width: 1730px) {
    max-width: 90%;
    left: 11rem;
  }
  @media (max-width: 1617px) {
    max-width: 80%;
    left: 0rem;
  }
  @media (max-width: 1590px) {
    max-width: 90%;
  }
  @media (max-width: ${mobileBreakPoint}) {
    margin: auto;
    font-size: 2rem;
  }
  @media (max-width: 1410px) {
    max-width: 75%;
  }

  @media (max-width: 1620) {
    left: 0rem;
    right: 0rem;
  }
  @media (max-width: 1190px) {
    max-width: 90%;
    color: #ffffff;
    text-align: justify;
    margin-left: 3rem;
  }
  @media (max-width: 820px) {
    left: 1rem;
  }
  @media (max-width: 720px) {
    left: 0.5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 650px) {
    max-width: 90%;
    right: 10rem;
  }
  @media (max-width: 510px) {
    font-size: 1.7rem;
  }
  @media (max-width: 490px) {
    max-width: 87%;
  }

  @media (max-width: 370px) {
    left: 2.5rem;
    margin-left: 0rem;
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
    max-width: 80%;
    margin-right: 10rem;
    font-size: 3rem;
    @media (max-width: 1580px) {
      font-size: 2.6rem;
      margin-right: 0rem;
    }
    @media (max-width: 1375px) {
      font-size: 2.6rem;
    }

    @media (max-width: ${mobileBreakPoint}) {
      margin: auto;
      font-size: 2rem;
    }
  }
`;
