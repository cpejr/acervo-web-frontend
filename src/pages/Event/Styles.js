import styled from 'styled-components';

import { ImageEvents2 } from '../../assets/Events/index';

export const Body = styled.div`
  align-items: center;
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Reception = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.yellow};
  height: fit-content;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 5rem 0rem 5rem 0rem;

  @media (max-width: 1000px) {
    padding: 3rem 0rem 4rem 0rem;
  }

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
    }
    @media (max-width: 1420px) {
      font-size: 3.5rem;
    }

    @media (max-width: 880px) {
      font-size: 3rem;
    }

    @media (max-width: 730px) {
      font-size: 2.8rem;
    }

    @media (max-width: 460px) {
      font-size: 2.4rem;
    }
    @media (max-width: 380px) {
      font-size: 2rem;
    }
  }
`;

export const Carousel = styled.div`
  margin-top: 8rem;

  @media (max-width: 640px) {
    max-height: 20rem;
  }
  @media (max-width: 445px) {
    max-height: 2rem;
  }
`;
export const Programation = styled.div`
  display: flex;

  flex-direction: column;
  height: 80%;
  align-items: center;
  width: 100%;
  margin-top: 20rem;

  img {
  }
`;

export const Image = styled.div`
  background-image: url(${ImageEvents2});
  background-size: contain;
  height: 100%;
  align-items: center;
  width: 100%;
`;
