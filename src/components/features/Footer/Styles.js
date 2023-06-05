import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 1rem;
  width: 100%;
`;

export const Contact = styled.div`
  padding: 1rem;
  h1 {
    font-size: 5.1rem;
    color: ${(props) => props.theme.fonts.color.bordeaux};
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.bordeaux};
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.color.bordeaux};
`;
