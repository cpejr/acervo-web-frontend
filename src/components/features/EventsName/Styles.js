import styled from 'styled-components';

import { Image } from '.';

export const Bubble = styled.div``;

export const Control = styled.div`
  width: 35rem;
  opacity: 0.6;
  height: 50rem;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: contain; // Use 'contain' para evitar cortes na imagem
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    align-items: center;
    width: 60%;
    height: 40%;
    margin-top: 15%;
  }
  a {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.fontHeader};
    position: relative;
    align-items: center;
    font-size: 3.5rem;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 5rem;

  p {
    display: flex;
    gap: 5rem;
    flex-direction: row;
    margin-left: 35%;
  }
`;
