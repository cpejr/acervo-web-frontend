/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

const firstBreakPoint = '1140px';
const secondBreakPoint = '800px';
const miniBreakPoint = '440px';
const thirdBreakPoint = '600px';
const fourthBreakPoint = '400px';
const fifthBreakPoint = '300px';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.theme.colors.primary};
  overflow-y: hidden;
  @media (max-width: ${firstBreakPoint}) {
    overflow: auto;
  }
`;
export const Button = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;
  text-align: center;
  border: none;
  border-radius: 10rem;
  align-items: center;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 3rem;
  background-color: ${(props) => props.theme.colors.fontDialog};
  margin-left: 2%;
  margin-top: 3%;
  padding: 2%;
  cursor: pointer;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 4rem;
  padding: 2%;
  margin-left: 10%;
  margin-top: 2%;
  width: 80%;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 3rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 2rem;
  }

  p1 {
    display: flex;
    background-color: white;
    border-radius: 10rem;
    color: ${(props) => props.theme.colors.primary};
    padding: 2%;
    margin-top: 2%;
    gap: 2rem;
  }
`;
export const Input = styled.input`
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  border-color: transparent;
  background-color: transparent;
  font-size: 4rem;
`;
export const SendButton = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;
  text-align: center;
  border-radius: 10rem;
  align-items: center;
  color: ${(props) => props.theme.colors.sendButtonFont};
  font-size: 5rem;
  border-color: ${(props) => props.theme.colors.fontHeader};
  background-color: ${(props) => props.theme.colors.sendButton};
  margin-right: 12%;
  margin-top: 1%;
  padding: 2%;
  cursor: pointer;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 4rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 2rem;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  align-items: end;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10%;
`;
export const Line = styled.div`
  display: flex;
  width: 85%;
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
  font-weight: 100;
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
