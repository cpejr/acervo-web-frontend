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

const fadeInDocument = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1.5rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  font-family: ${(props) => props.theme.fonts.primary};
`;

export const DivFilter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 2.2rem;

  align-items: center;
  justify-content: baseline;
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

export const DivDropdown = styled.div`
  display: flex;
  flex-direction: row;

  align-items: end;
  justify-content: baseline;
  margin-left: 5rem;

  width: auto;
  height: auto;
  gap: 2rem;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
  z-index: 10;

  width: 20rem;

  margin-top: 2rem;
  padding-left: 3rem;

  background: rgba(255, 255, 255, 1);
  border-radius: 21px;

  overflow: hidden;
  transition: height 1s ease-out;
  animation: ${fadeIn} 300ms ease-out;

  height: ${(props) => (props.show ? '18rem' : '0')};
`;

export const DocumentDropdown = styled.div`
  position: absolute;
  left: 26rem;
  top: 16rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  width: 28rem;
  padding-left: 2rem;

  background: rgba(255, 255, 255, 1);
  border-radius: 21px;

  overflow: hidden;
  transition: height 1s ease-out;
  animation: ${fadeInDocument} 300ms ease-out;

  height: ${(props) => (props.show ? '15rem' : '0')};
`;

export const DropdownRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  gap: 1rem;
`;

export const TextDropdown = styled.p`
  font-size: 2.2rem;
  color: rgba(30, 30, 30, 0.74);
`;
