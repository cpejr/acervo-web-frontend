import styled from 'styled-components';

import { arrowLeft, arrowRight } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 176.5rem;

  margin: 0 auto;

  .slick-list {
    position: relative;
    border-radius: 20px;

    display: block;
    overflow: hidden;

    width: 170rem;
    height: auto;

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
  }

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
