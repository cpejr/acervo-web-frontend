import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: baseline;
  justify-content: baseline;

  width: 100%;
  height: auto;
  gap: 100px;
  padding-top: 50px;
  padding-bottom: 50px;

  background-color: beige;
`;

export const CarouselOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

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
