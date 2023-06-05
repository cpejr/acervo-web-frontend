import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 1rem;

  max-height: 20.3rem;
  width: 100%;
  height: 100%;
`;

export const Contact = styled.div`
  padding: 1rem;
  h1 {
    font-size: 3.7rem;
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.family.cabin};
    color: ${(props) => props.theme.fonts.color.bordeaux};
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.bordeaux};
  max-width: 25rem;
  width: 100%;
  height: 100%;
  gap: 0.3rem;
`;

export const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: fill;
  width: auto;
  height: auto;
  max-height: 17rem;
`;
