import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: auto;

  justify-content: center;
  align-items: center;

  .slick-list {
    border: 3rem solid white;
    border-bottom: 12.5rem solid white;
    position: relative;

    display: block;
    overflow: hidden;

    width: 80rem;
    height: auto;

    @media (max-width: 1200px) {
      width: 65rem;
      height: 55rem;
      border: 2.5rem solid white;
      border-bottom: 10rem solid white;
    }
    @media (max-width: 1000px) {
      height: 50rem;
      border: 2rem solid white;
      border-bottom: 8rem solid white;
    }
    @media (max-width: 950px) {
      width: 45rem;
      height: 40rem;
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
  height: 62.8rem;
  width: 100%;
  object-fit: cover;

  @media (max-width: 1200px) {
    height: 53rem;
  }
  @media (max-width: 1000px) {
    height: 50rem;
  }
  @media (max-width: 950px) {
    height: 30rem;
  }
`;
