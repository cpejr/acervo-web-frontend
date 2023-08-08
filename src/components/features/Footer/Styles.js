import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: black;

  padding: 1rem;

  width: 100%;
  height: 100%;
  max-height: 20.3rem;
`;

export const Contact = styled.div`
  padding: 1rem;
  margin-right: 10rem;

  h1 {
    font-size: 3.7rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.primary};
    color: white;

    @media (max-width: 1100px) {
      font-size: 3rem;
    }

    @media (max-width: 930px) {
      font-size: 2.2rem;
    }
  }
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  max-height: 17rem;
  color: white;

  @media (max-width: 1100px) {
    max-height: 13.6rem;
  }

  @media (max-width: 930px) {
    font-size: 10.2rem;
  }
`;
