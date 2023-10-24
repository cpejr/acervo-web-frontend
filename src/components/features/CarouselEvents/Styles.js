import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: auto;

  justify-content: center;
  align-items: center;

  .slick-track {
    display: flex;
  }

  .slick-slider.slick-initialized {
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
    // distancia das setas
    border: 2rem solid white;
    border-bottom: 9rem solid white;
    position: relative;

    margin-left: 10rem;
    margin-right: 10rem;

    display: block;
    overflow: hidden;

    width: 100rem;
    height: 60rem;

    @media (max-width: 1470px) {
      //controla tamanho doc carousel
      width: 65rem;
      height: 55rem;
      margin-left: 7rem;
      margin-right: 7rem;
      border: 2.5rem solid white;
      border-bottom: 12rem solid white;
    }
    @media (max-width: 1000px) {
      height: 50rem;
      margin-left: 5rem;
      margin-right: 5rem;
      border: 2rem solid white;
      border-bottom: 8rem solid white;
    }
    @media (max-width: 950px) {
      width: 45rem;
      height: 40rem;
    }
    @media (max-width: 770px) {
      width: 35rem;
      height: 30rem;
      margin-left: 2rem;
      margin-right: 2rem;
    }

    @media (max-width: 520px) {
      width: 25rem;
      height: 30rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    @media (max-width: 445px) {
      width: 20rem;
      height: 20rem;
    }
    @media (max-width: 400px) {
      width: 15rem;
      height: 15rem;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    //setas carousel
    display: flex;
    content: ' ';

    background-size: 100% 100%;

    width: 13.1rem;
    height: 19.7rem;

    @media (max-width: 1000px) {
      width: 10rem;
      height: 15rem;
    }
    @media (max-width: 670px) {
      width: 5rem;
      height: 10rem;
    }
    @media (max-width: 570px) {
      width: 5rem;
      height: 7rem;
    }
  }

  .slick-prev:before {
    background-image: url(${arrowRightCarousel});
    background-size: 100% 100%;
  }

  .slick-next:before {
    background-image: url(${arrowLeftCarousel});
  }
`;

export const ImageCarousel = styled.img`
  height: 50rem;
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
  @media (max-width: 730px) {
    width: 20rem;
  }
`;
