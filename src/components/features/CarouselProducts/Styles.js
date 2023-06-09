import styled from 'styled-components';

import { arrowLeft, arrowRight } from '../../../assets/Home';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: 100%;

  justify-content: center;
  align-items: center;

  .slick-prev:before {
    display: flex;
    content: ' ';

    background-image: url(${arrowLeft});
    background-size: 100% 100%;

    width: 8rem;
    height: 8rem;

    @media (max-width: 1000px) {
      width: 6rem;
      height: 6rem;
    }
  }

  .slick-prev {
    left: 4rem;
    z-index: 10;
    width: fit-content;
    height: fit-content;
  }

  .slick-next:before {
    display: flex;
    content: ' ';

    background-image: url(${arrowRight});
    background-size: 100% 100%;

    width: 8rem;
    height: 8rem;

    @media (max-width: 1000px) {
      width: 6rem;
      height: 6rem;
    }
  }

  .slick-next {
    right: 4rem;
    width: fit-content;
    height: fit-content;
  }
`;

export const ImageCarousel = styled.img`
  height: 62.8rem;

  @media (max-width: 1400px) {
    width: 100rem;
  }
  @media (max-width: 1000px) {
    height: 50rem;
    width: 80rem;
  }
  @media (max-width: 800px) {
    width: 65rem;
  }
`;
