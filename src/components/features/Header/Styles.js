import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.header};
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
  font-family: ${(props) => props.theme.fonts.primary.family};
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const Dialog = styled.dialog`
  position: absolute;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border: none;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.dialogBG};
`;

export const DialogItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.fontDialog};
  font-family: ${(props) => props.theme.fonts.primary.family};
  font-size: 1.8rem;
`;
