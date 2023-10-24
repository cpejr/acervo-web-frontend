/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { background } from '../../assets/ecommerce/background.png';

const firstBreakPoint = '1130px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';

export const Text = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 7rem;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 2%;
  @media (max-width: ${firstBreakPoint}) {
    border-radius: 4rem;
    font-size: 8rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    border-radius: 5rem;
    font-size: 7rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    border-radius: 6rem;
    font-size: 6rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    border-radius: 7rem;
    font-size: 5rem;
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
  @media (max-width: ${firstBreakPoint}) {
    border-radius: 4rem;
    font-size: 8rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    border-radius: 5rem;
    font-size: 7rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    border-radius: 6rem;
    font-size: 6rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    border-radius: 7rem;
    font-size: 5rem;
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
  width: 100%;
  height: 50rem;
  background-image: url(${background});
  background-size: 100% 100%;
  background-position: center;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.fontHeader};
  font-family: ${(props) => props.theme.fonts.caramella};

  p {
    margin-left: 3%;
    font-size: 8rem;
    line-height: 2.5rem;
    margin-bottom: 4%;

    @media (max-width: ${firstBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
    @media (max-width: ${secondBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
    @media (max-width: ${miniBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
  }

  p1 {
    font-size: 4rem;

    @media (max-width: ${firstBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
    @media (max-width: ${secondBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
    @media (max-width: ${miniBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
  }
`;
