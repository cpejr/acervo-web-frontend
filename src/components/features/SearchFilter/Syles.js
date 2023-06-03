import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-1.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-1.5rem);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: auto;
  height: auto;

  align-items: end;

  font-family: ${(props) => props.theme.fonts.cabin};
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  width: 25.3rem;
  height: 7.1rem;
  gap: 2.2rem;

  align-items: center;
  justify-content: center;

  background: rgba(217, 217, 217, 0.35);
  border-radius: 16px;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  color: rgba(30, 30, 30, 0.74);
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: auto;
  height: auto;
  gap: 1rem;

  color: rgba(30, 30, 30, 0.74);
  background-color: transparent;
  border: none;

  font-size: 2.2rem;

  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: baseline;

  width: 20rem;
  height: 0;
  padding-left: 3rem;
  gap: 1.3rem;

  background: rgba(255, 255, 255, 0.95);
  border-radius: 21px;
  overflow: hidden;
  transition: height 2s ease-out;
  animation: ${fadeIn} 1s ease-out;

  &.show {
    height: 22.6rem;
  }

  &.hide {
    animation: ${fadeOut} 1s ease-out;
  }
`;
