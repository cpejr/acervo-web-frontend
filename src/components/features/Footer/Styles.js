import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;

  padding: 1rem;

  width: 100%;
  height: 100%;
  max-height: 20.3rem;
`;

export const Contact = styled.div`
  padding: 1rem;

  h1 {
    font-size: 3.7rem;
    font-weight: 500;
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.primary};

    @media (max-width: 1100px) {
      font-size: 3rem;
    }

    @media (max-width: 930px) {
      font-size: 2.2rem;
    }
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  max-width: 25rem;
  width: 100%;
  height: 100%;
  gap: 0.3rem;
  font-size: 5rem;

  @media (max-width: 1100px) {
    font-size: 4rem;
  }

  @media (max-width: 930px) {
    font-size: 3rem;
  }
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  max-height: 17rem;

  @media (max-width: 1100px) {
    max-height: 13.6rem;
  }

  @media (max-width: 930px) {
    font-size: 10.2rem;
  }
`;
