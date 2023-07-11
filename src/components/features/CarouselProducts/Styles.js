import styled from 'styled-components';

import { arrowLeft, arrowRight } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 176.5rem;
  height: auto;

  justify-self: center;
  align-self: center;
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: 100%;

  justify-content: center;
  align-items: center;

  .slick-track {
    display: flex;
  }

  .slick-slider {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
  }

  .slick-arrow.slick-prev,
  .slick-arrow.slick-next {
    border: none;
    background: none;

    cursor: pointer;
    color: transparent;
  }

  .slick-list {
    position: relative;
    border-radius: 20px;

    display: block;
    overflow: hidden;

    width: 170rem;
    height: 68rem;

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

  .slick-prev:before,
  .slick-next:before {
    display: flex;
    content: ' ';

    background-size: 100% 100%;

    width: 8rem;
    height: 8rem;

    @media (max-width: 1000px) {
      width: 6rem;
      height: 6rem;
    }
  }

  .slick-prev:before {
    background-image: url(${arrowLeft});
  }

  .slick-next:before {
    background-image: url(${arrowRight});
  }

  .slick-prev,
  .slick-next {
    position: relative;
    z-index: 10;

    width: fit-content;
    height: fit-content;
  }

  .slick-prev {
    left: 17rem;
  }

  .slick-next {
    right: 17rem;
  }
`;

export const ImageCarousel = styled.img`
  height: 62.8rem;
  width: 100%;
  object-fit: cover;

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
