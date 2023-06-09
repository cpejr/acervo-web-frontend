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
    content: url(${arrowRightCarousel});
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
  }

  .slick-next:before {
    display: flex;
    content: url(${arrowLeftCarousel});
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
  }
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 62.8rem;

  @media (max-width: 1000px) {
    height: 50rem;
  }
`;
