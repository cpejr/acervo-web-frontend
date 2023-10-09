/* eslint-disable import/prefer-default-export */

import styled, { keyframes } from 'styled-components';

const firstBreakPoint = '1140px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';
const thirdBreakPoint = '600px';
const fourthBreakPoint = '400px';
const fifthBreakPoint = '300px';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  overflow-y: hidden;
  @media (max-width: ${firstBreakPoint}) {
    overflow: auto;
  }
`;
export const Line = styled.div`
  display: flex;
  width: 60%;
  margin-left: 2rem;
  margin-top: 2rem;
  height: auto;
  justify-content: space-between;
  @media (max-width: ${firstBreakPoint}) {
    width: 75%;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 80%;
  }
  @media (max-width: ${thirdBreakPoint}) {
    width: 85%;
  }
  @media (max-width: ${fourthBreakPoint}) {
    width: 95%;
  }
`;
export const Header = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.fontDialog};
`;
export const Text = styled.h1`
  align-self: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  font-size: 9rem;
  font-family: ${(props) => props.theme.fonts.caramella};
  color: ${(props) => props.theme.colors.fontHeader};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 6.5rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 3.5rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 2.5rem;
  }
`;
export const Text2 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-top: 3rem;
  margin-bottom: 4rem;
  font-family: ${(props) => props.theme.fonts.caramella};
  color: ${(props) => props.theme.colors.fontHeader};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    margin-bottom: 3rem;
  }
`;

export const Image = styled.div`
  display: flex;
  height: 20rem;
  width: 25rem;
  @media (max-width: ${firstBreakPoint}) {
    height: 18rem;
    width: 22rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    height: 15rem;
    width: 17rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    height: 13rem;
    width: 14rem;
  }
  @media (max-width: ${fifthBreakPoint}) {
    height: 9rem;
    width: 11rem;
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
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    justify-content: start;
  }
`;

export const Square = styled.button`
  display: flex;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 5.2rem;
  font-size: 4rem;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 32.5rem;
  height: 25.4rem;
  cursor: pointer;
  border: none;
  transition: background-color 1s ease, color 1s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.strongOrange};
    color: ${(props) => props.theme.colors.fontHeader};
  }
  @media (max-width: ${firstBreakPoint}) {
    width: 25rem;
    height: 20rem;
    font-size: 3rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 20rem;
    height: 16rem;
    font-size: 2rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 17rem;
    height: 14rem;
    font-size: 1.8rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 16rem;
    height: 12rem;
    font-size: 1.5rem;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const TextTransition = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  animation: ${(props) => (props.visible ? fadeIn : fadeOut)} 0.9s ease-in-out;
`;
export const Lines = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 2.6rem;
  @media (max-width: ${secondBreakPoint}) {
    font-size: 2rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 1.5rem;
  }
`;

export const SquareText = styled.p`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.caramella};
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 3rem;
`;
