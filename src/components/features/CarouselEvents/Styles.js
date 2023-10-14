import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/Home';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  //height: auto;

  justify-content: center;
  align-items: center;
`;

export const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  //height: 100%;

  justify-content: center;
  align-items: start;

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
    position: relative;
    border: 2rem solid blue;
    //padding: 5rem;
    margin-left: 7rem;
    margin-right: 7rem;

    display: block;
    overflow: hidden;

    width: 90rem;
    //height: 100rem;

    @media (max-width: 1300px) {
      width: 65rem;
      height: 55rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }

    @media (max-width: 950px) {
      width: 60rem;
      height: 55rem;
    }
    @media (max-width: 700px) {
      width: 50rem;
      height: 35rem;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    display: flex;
    content: ' ';

    background-size: 100% 100%;

    width: 11rem;
    height: 17rem;

    @media (max-width: 1350px) {
      width: 9rem;
      height: 14rem;
    }

    @media (max-width: 1100px) {
      width: 6rem;
      height: 10rem;
    }
    @media (max-width: 700px) {
      width: 0;
      height: 0;
    }
  }

  .slick-prev:before {
    background-image: url(${arrowLeftCarousel});
  }

  .slick-next:before {
    background-image: url(${arrowRightCarousel});
  }
`;

export const ImageCarousel = styled.img`
  height: 60rem;
  //padding: 3rem 3rem 7rem 3rem;

  object-fit: fill;
`;

export const BordaBranca = styled.div`
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 90rem;
  height: 62rem;
  z-index: 30;
  @media (max-width: 1300px) {
    width: 64rem;
    height: 61rem;
  }
  @media (max-width: 1000px) {
    //height: 50rem;
  }
  @media (max-width: 950px) {
    width: 58rem;
    height: 56rem;
  }
  @media (max-width: 700px) {
    width: 50rem;
    height: 35rem;
  }
`;
