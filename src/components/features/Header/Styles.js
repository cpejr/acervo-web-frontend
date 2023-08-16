import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const dialogItemAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: black;
  padding: 4rem 5%;
`;

export const FirstSection = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7707457983193278) 61%,
      rgba(134, 134, 134, 0) 100%
    ),
    url('src/assets/Header/headerBackground.png');
  background-size: cover;
  background-position: top left;
  background-repeat: repeat-x;
  filter: blur(5px);
  transform: scale(1.1);
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 15rem;
  margin-left: 17rem;
`;
export const Logo = styled.img`
  width: 30rem;
  height: auto;
`;
export const Title = styled.h1`
  font-family: 'Caramella';
  font-style: normal;
  font-weight: 100;
  font-size: 5rem;
  text-align: start;
  line-height: 0.8;

  color: white;

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 100;
  }
  p {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.orangeButton};
  }
`;

export const Text = styled.img`
  width: 60rem;
  height: auto;
`;

export const MenuItem = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.primary};
  color: #f19709;
  font-size: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Dialog = styled.dialog`
  position: absolute;
  z-index: 10;
  width: 18rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border: none;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: white;
  overflow-y: hidden;
  align-items: center;
  padding: ${(props) => (props.open ? '0.5rem 1rem' : '0rem')};
  max-height: ${(props) => (props.open ? 'auto' : '0rem')};
  &.dialogOpen {
    opacity: 1;
  }
`;

export const DialogItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.fontDialog};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2rem;
  padding: 0.5rem 0;
  cursor: pointer;

  &.dialogOpen {
    animation: ${dialogItemAppear} 0.3s ease-in-out forwards;
    animation-delay: ${(props) => props.index * 0.1}s;
  }
`;

export const DialogProfile = styled.dialog`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border: none;
  border-radius: 1rem;
  margin-top: 3rem;
  background-color: white;
  overflow-y: hidden;
  padding: ${(props) => (props.open ? '1rem 1rem' : '0rem')};
  max-height: ${(props) => (props.open ? 'auto' : '0rem')};
  align-items: center;
  width: 9rem;
  overflow-x: hidden;

  &.dialogOpen {
    animation: ${dialogItemAppear} 0.3s ease-in-out forwards;
  }
`;

export const DivideLine = styled.div`
  border: 0.1rem solid #f19709;
  width: 100%;
`;
