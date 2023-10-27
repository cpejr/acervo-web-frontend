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
  background-color: ${(props) => props.theme.colors.primary};
  overflow: hidden;
  font-family: ${(props) => props.theme.fonts.primary};
  align-items: center;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 25rem;
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
    gap: 0rem;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  @media (max-width: ${firstBreakPoint}) {
    gap: 2rem;
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
