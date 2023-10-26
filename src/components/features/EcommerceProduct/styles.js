/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

const firstBreakPoint = '1130px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';

export const Square = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 19.8rem;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 39.6rem;
  height: 57.9rem;
  opacity: 0.7;
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

export const Image = styled.img``;
