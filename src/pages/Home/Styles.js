import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 100%;

  background: black;
`;

export const CarouselTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 176.5rem;
  height: auto;

  justify-self: center;
  align-self: center;

  .slick-list {
    position: relative;
    border-radius: 20px;

    display: block;
    overflow: hidden;

    width: 170rem;
    height: auto;

    @media (max-width: 1400px) {
      width: 100rem;
    }
    @media (max-width: 1000px) {
      height: 50rem;
      width: 80rem;
    }
    @media (max-width: 800px) {
      width: 65rem;
    }
  }
`;
