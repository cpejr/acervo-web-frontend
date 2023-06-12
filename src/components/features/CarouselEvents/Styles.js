import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/home';

const carouselBorder = '3rem';
const carouselBottomBorder = '12.5rem';
const maxHeight = '50rem';

export const Container = styled.div`
  margin: 0 auto;

  width: 100%;
  max-width: 133rem;
  max-height: calc(${maxHeight} + ${carouselBottomBorder} + ${carouselBorder});

  .slick-slider {
    border: ${carouselBorder} solid white;
    border-bottom: ${carouselBottomBorder} solid white;

    max-height: calc(
      ${maxHeight} + ${carouselBottomBorder} + ${carouselBorder}
    );

    width: auto;

    position: relative;
  }

  /* display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  aspect-ratio: 16 / 9;

  .slick-slider {
    border: 3rem solid white;
    border-bottom: 12.5rem solid white;
  }

  .slick-list {
    width: 100%;
    height: 100%;

    max-height: 62.8rem;
    max-width: 117.9rem;
  } */

  /* 
  .slick-list {
    width: 100rem;

    @media (max-width: 1200px) {
      width: 65rem;
      height: 55rem;
    }
    @media (max-width: 1000px) {
      height: 50rem;
    }
    @media (max-width: 950px) {
      width: 45rem;
      height: 40rem;
    }
  } */

  .slick-prev {
    position: absolute;

    top: 50%;
    left: -20rem;
    width: 13.1rem;
    height: 19.7rem;
    /* display: flex;
    left: -31rem;
    width: fit-content;
    height: fit-content;

    @media (max-width: 1450px) {
      left: -20rem;
    }
    @media (max-width: 1000px) {
      left: -15rem;
    }
    @media (max-width: 820px) {
      left: -12rem;
    } */
  }

  .slick-prev:before {
    display: block;
    content: ' ';

    background-image: url(${arrowRightCarousel});
    background-size: 100% 100%;

    width: 13.1rem;
    height: 19.7rem;

    @media (max-width: 1000px) {
      width: 10rem;
      height: 15rem;
    }
  }

  /*
  .slick-next:before {
    display: flex;
    content: ' ';

    background-image: url(${arrowLeftCarousel});
    background-size: 100% 100%;

    width: 13.1rem;
    height: 19.7rem;

    @media (max-width: 1000px) {
      width: 10rem;
      height: 15rem;
    }
  }

  .slick-next {
    display: flex;
    right: -31rem;
    width: fit-content;
    height: fit-content;

    @media (max-width: 1450px) {
      right: -20rem;
    }
    @media (max-width: 1000px) {
      right: -15rem;
    }
    @media (max-width: 820px) {
      right: -12rem;
    }
  } */
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 100%;
  max-height: ${maxHeight};

  object-fit: cover;
`;
