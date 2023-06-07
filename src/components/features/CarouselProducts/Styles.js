import styled from 'styled-components';

import { arrowLeft, arrowRight } from '../../../assets/home';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: auto;
  height: 100%;

  justify-content: center;
  align-items: center;

  .slick-prev:before {
    content: url(${arrowLeft});
  }

  .slick-prev {
    left: 4rem;
    z-index: 10;
    width: fit-content;
    height: fit-content;
  }

  .slick-next:before {
    content: url(${arrowRight});
  }

  .slick-next {
    right: 4rem;
    width: fit-content;
    height: fit-content;
  }
`;

export const ImageCarousel = styled.img`
  height: 62.8rem;
  border-radius: 20px;

  @media (max-width: 700px) {
    width: auto;
    height: 30rem;
  }
`;
