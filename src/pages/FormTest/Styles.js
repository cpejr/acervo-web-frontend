import styled from 'styled-components';

import { Form } from '../../components/common';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  height: 100vh;
`;
StyledForm.Field = styled(Form.Field)`
  display: flex;
  gap: 1rem;
`;
StyledForm.Label = styled(Form.Label)`
  color: blue;
`;
StyledForm.Input = styled(Form.Input)`
  width: 20rem;
  padding: 0.5rem;
`;
StyledForm.ErrorMessage = styled(Form.ErrorMessage)`
  color: orange;
`;

export const Button = styled.button`
  color: white;
  background-color: blue;
  padding: 1rem;

  cursor: pointer;

  font-size: 2rem;
  transition: opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    opacity: 0.8;
  }
`;
