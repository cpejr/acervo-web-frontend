import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const SelectButton = styled.button`
  box-sizing: border-box;

  width: 2rem;
  height: 2rem;

  border: 0.3rem solid #515151;
  background-color: ${(props) => (props.active ? '#515151' : 'transparent')};
  cursor: pointer;
`;
