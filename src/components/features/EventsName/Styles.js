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
  img {
    align-items: center;
    width: 60%;
    height: 60%;
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
    margin-left: 26%;
  }
`;
