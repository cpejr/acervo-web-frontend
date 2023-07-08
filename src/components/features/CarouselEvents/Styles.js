import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .slick-slider {
    border: 3rem solid white;
    border-bottom: 12.5rem solid white;
  }

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
    @media (max-width: 820px) {
      width: 40rem;
      height: 35rem;
    }
  }

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
    @media (max-width: 1000px) {
      left: -15rem;
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
    @media (max-width: 1000px) {
      right: -15rem;
    }
  }
`;

export const ImageCarousel = styled.img`
  width: 100%;

  height: 62.8rem;
  object-fit: cover;

  @media (max-width: 1200px) {
    height: 55rem;
  }
  @media (max-width: 1000px) {
    height: 50rem;
  }
  @media (max-width: 950px) {
    height: 40rem;
  }
`;
