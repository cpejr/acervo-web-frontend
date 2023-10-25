/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { pageBackground } from '../../assets/ecommerce';

const firstBreakPoint = '1130px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 7rem;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 2%;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 6rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 5rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 4rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 3rem;
  }
`;
export const ContainerText = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.strongOrange};
  overflow: hidden;
  font-family: ${(props) => props.theme.fonts.primary};
  align-items: center;
`;
export const Text2 = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 7rem;
  background-color: ${(props) => props.theme.colors.strongOrange};
  padding: 2%;
  text-align: center;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 6rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 5rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 4rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  font-family: ${(props) => props.theme.fonts.primary};
  align-items: center;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 350rem;
  background-image: url(${pageBackground});
  background-size: 100% 100%;
  background-position: center;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.fontHeader};
  font-family: ${(props) => props.theme.fonts.caramella};

  @media (max-width: ${firstBreakPoint}) {
    height: 200rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    height: 150rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    height: 100rem;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  @media (max-width: ${firstBreakPoint}) {
    //flex-direction: column;
    gap: 2rem;
    //margin-bottom: 2rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    justify-content: start;
  }
`;

export const Lines = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: center;
`;

export const Square = styled.button`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 15rem;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 50%;
  height: 100%;
  opacity: 0.8;
  cursor: pointer;
  border: none;
  margin-top: 10%;
  padding: 15%;
  @media (max-width: ${firstBreakPoint}) {
    width: 50%;
    height: 100%;
    padding: 20%;
    font-size: 3rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 70%;
    height: 100%;
    padding: 15%;
    font-size: 2rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 70%;
    height: 100%;
    padding: 20%;
    font-size: 1.8rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 70%;
    height: 100%;
    padding: 25%;
    font-size: 1.5rem;
  }
`;

export const ProductImage = styled.div`
  background-color: transparent;
  width: 20rem;
  height: 24rem;
  background-image: url(${(props) => props.imageUrl});
  background-size: 100% 100%;
  background-position: center;
  margin: 10%;
  @media (max-width: ${firstBreakPoint}) {
    width: 17.5rem;
    height: 21rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 15rem;
    height: 18rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 12.5rem;
    height: 15rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 10rem;
    height: 12rem;
  }
`;
