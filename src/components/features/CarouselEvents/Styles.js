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
    border: 3rem solid white;
    border-bottom: 12.5rem solid white;
    position: relative;

    margin-left: 10rem;
    margin-right: 10rem;

    display: block;
    overflow: hidden;

    width: 80rem;
    height: 60rem;

    @media (max-width: 1200px) {
      width: 65rem;
      height: 55rem;
      margin-left: 7rem;
      margin-right: 7rem;
      border: 2.5rem solid white;
      border-bottom: 10rem solid white;
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
  }

  .slick-prev:before,
  .slick-next:before {
    display: flex;
    content: ' ';

    background-size: 100% 100%;

    width: 13.1rem;
    height: 19.7rem;

    @media (max-width: 1000px) {
      width: 10rem;
      height: 15rem;
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
