import styled from 'styled-components';

import { arrowRightCarousel, arrowLeftCarousel } from '../../../assets/Home';

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

    margin-left: 17rem;
    margin-right: 17rem;

    width: 130rem;
    height: 50rem;

    @media (max-width: 1600px) {
      width: 115rem;
    }

    @media (max-width: 1500px) {
      width: 100rem;
    }

    @media (max-width: 1350px) {
      margin-left: 15rem;
      margin-right: 15rem;
    }

    @media (max-width: 1200px) {
      height: 45rem;
      width: 80rem;
    }
    @media (max-width: 800px) {
      width: 65rem;
    }
    @media (max-width: 700px) {
      width: 50rem;
      height: 40rem;
    }
    @media (max-width: 500px) {
      width: 38rem;
      height: 35rem;
    }
    @media (max-width: 400px) {
      width: 30rem;
      height: 30rem;
    }
    @media (max-width: 280px) {
      width: 25rem;
      height: 25rem;
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

    @media (max-width: 960px) {
      width: 0rem;
      height: 0rem;
    }
  }

  .slick-prev:before {
    background-image: url(${arrowLeftCarousel});
  }

  .slick-next:before {
    background-image: url(${arrowRightCarousel});
  }

  .slick-prev,
  .slick-next {
    position: relative;
    z-index: 10;

    width: fit-content;
    height: fit-content;
  }

  .slick-prev {
    left: 13rem;
  }

  .slick-next {
    right: 13rem;
  }
`;

export const ImageCarousel = styled.img`
  height: 50rem;
  object-fit: fill;

  @media (max-width: 1200px) {
    height: 45rem;
  }
  @media (max-width: 700px) {
    height: 40rem;
  }
  @media (max-width: 500px) {
    height: 35rem;
  }
  @media (max-width: 400px) {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 280px) {
    width: 25rem;
    height: 25rem;
  }
`;
