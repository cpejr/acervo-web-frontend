import styled from 'styled-components';

import { ArrowRightCarousel, ArrowLeftCarousel } from '../../../assets/Home';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: auto;

  justify-content: center;
  align-items: center;

  .slick-prev:before {
    content: url(${ArrowRightCarousel});
  }

  .slick-prev {
    left: -31rem;
  }

  .slick-next:before {
    content: url(${ArrowLeftCarousel});
  }

  .slick-next {
    right: -22rem;
  }
`;

export const ImageCarousel = styled.img`
  width: 100%;
  height: 62.8rem;
  border: 3rem solid white;
  border-bottom: 12.5rem solid white;

  @media (max-width: 700px) {
    width: auto;
    height: 30rem;

    border: 1.5rem solid white;
    border-bottom: 6.5rem solid white;
  }
`;
