import styled from 'styled-components';

export const Container = styled.div`
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
  font-family: ${(props) => props.theme.fonts.cabin};
  font-style: normal;
  font-weight: 400;
  font-size: 35px;

  color: rgba(30, 30, 30, 0.74);
`;

export const Button = styled.button`
  width: auto;
  height: auto;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;
