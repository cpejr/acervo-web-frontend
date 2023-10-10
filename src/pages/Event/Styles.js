import styled from 'styled-components';

import { ImageEvents2 } from '../../assets/Events/Index';

export const Body = styled.div`
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Reception = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 15rem;
  align-items: center;
  text-align: center;
  flex-direction: column;

  text {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 4.5rem;
    width: 60%;
    position: relative;
    top: 1rem;
    a {
      font-weight: bold;
    }
    @media (max-width: 1670px) {
      font-size: 4rem;
      max-width: 60%;
    }
    @media (max-width: 1420px) {
      font-size: 3.5rem;
    }
    @media (max-width: 1148px) {
      max-width: 70%;
    }
    @media (max-width: 880px) {
      max-width: 100%;
    }

    @media (max-width: 730px) {
      font-size: 2.8rem;
      /* margin-right: 11%; */
    }
    @media (max-width: 570px) {
      margin-right: 14%;
      width: 70%;
    }
    @media (max-width: 460px) {
      margin-right: 25%;
      font-size: 2.4rem;
      width: 50%;
    }
    @media (max-width: 380px) {
      margin-right: 45%;
      width: 40%;
      font-size: 2rem;
    }
    @media (max-width: 300px) {
      margin-right: 59%;
    }
  }
`;

export const Carousel = styled.div`
  margin-top: 8rem;
`;
export const Programation = styled.div`
  display: flex;

  flex-direction: column;
  height: 80%; //sempre que eu aumento o height de progrmation a imagem fica cortada dos lados, porque isso ocorre?
  align-items: center;
  width: 100%;
  margin-top: 20rem;

  img {
  }
`;

export const Image = styled.div`
  background-image: url(${ImageEvents2});
  background-repeat: no-repeat;
  background-size: contain; /* Altere isso para "contain" */
  height: 100%; //sempre que eu aumento o height de progrmation a imagem fica cortada dos lados, porque isso ocorre?
  align-items: center;
  width: 100%;
`;
