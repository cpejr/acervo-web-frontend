import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 2rem 5%;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.primary};
  color: orange;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    cursor: pointer;
  }
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
  background-color: ${(props) => props.theme.colors.dialogBG};
  overflow-y: hidden;
  padding: ${(props) => (props.open ? '0.5rem 1rem' : '0rem')};
  max-height: ${(props) => (props.open ? 'auto' : '0rem')};
`;

export const DialogItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.fontDialog};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.8rem;
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
  background-color: rgba(255, 255, 255, 0.9);
  overflow-y: hidden;
  padding: ${(props) => (props.open ? '1rem 1rem' : '0rem')};
  max-height: ${(props) => (props.open ? 'auto' : '0rem')};
  align-items: center;
`;

export const DivideLine = styled.div`
  border: 0.1rem solid black;
  width: 100%;
`;
