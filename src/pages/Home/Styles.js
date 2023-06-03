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
    position: relative;

    display: block;
    overflow: hidden;

    width: 80rem;
    height: auto;

    @media (max-width: 700px) {
      width: 30rem;
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

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
    width: 170rem;
    height: auto;

    @media (max-width: 700px) {
      width: 30rem;
    }
  }
`;
