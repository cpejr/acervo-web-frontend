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
  padding: 10%;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
  @media (max-width: ${firstBreakPoint}) {
    width: 50%;
    height: 100%;
    //padding: 20%;
    font-size: 3rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 70%;
    height: 100%;
    //padding: 15%;
    font-size: 2rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 70%;
    height: 100%;
    //padding: 20%;
    font-size: 1.8rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 70%;
    height: 100%;
    //padding: 25%;
    font-size: 1.5rem;
  }
`;

export const Image = styled.img`
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
