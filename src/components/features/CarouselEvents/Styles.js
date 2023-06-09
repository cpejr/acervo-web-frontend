import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/Home';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: auto;

  justify-content: center;
  align-items: center;

  .slick-prev:before {
    display: flex;
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

  .slick-prev {
    display: flex;
    left: -31rem;
    width: fit-content;
    height: fit-content;

    @media (max-width: 1450px) {
      left: -20rem;
    }
    @media (max-width: 1200px) {
      left: -15rem;
    }
    @media (max-width: 1000px) {
      left: -15rem;
    }
    @media (max-width: 820px) {
      left: -12rem;
    }
  }

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
    @media (max-width: 1200px) {
      right: -15rem;
    }
    @media (max-width: 1000px) {
      right: -15rem;
    }
    @media (max-width: 820px) {
      right: -12rem;
    }
  }
`;

export const ImageCarousel = styled.img`
  display: flex;
  height: 62.8rem;
  width: 1rem;

  @media (max-width: 1200px) {
    height: 43rem;
  }
  @media (max-width: 1000px) {
    height: 50rem;
  }
  @media (max-width: 950px) {
    height: 30rem;
  }
`;
