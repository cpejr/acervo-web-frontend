/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const firstBreakPoint = '1130px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  overflow-y: hidden;
  @media (max-width: ${mobileBreakPoint}) {
    overflow-y: auto;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 14.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 9.6rem;
  font-family: 'Cabin Condensed';
  background-color: ${(props) => props.theme.colors.fontDialog};
  color: white;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 8rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 7rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 5rem;
  }
`;
export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
`;
export const Collumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  > img {
    margin-top: 5rem;
    width: 50%;
    height: 60%;
    color: white;
  }
  @media (max-width: ${firstBreakPoint}) {
    width: 60%;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    justify-content: center;
  }
`;
export const Collumn2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: end;
  @media (max-width: ${firstBreakPoint}) {
    width: 40%;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    justify-content: center;
  }
`;
export const Text = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20rem;
  font-family: 'Cabin Condensed';
  font-size: 9.6rem;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 7rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 6.5rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    align-self: center;
    text-align: center;
    width: 70%;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 5rem;
  }
`;
