/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.bordeaux};
  width: 100%;
  height: 100%;
`;
