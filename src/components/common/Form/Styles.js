import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-direction: column;
  background-color: #7f260f;
  padding-bottom: 7rem;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 20px;
  width: 200px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  pointer-events: none;
  color: #999;
  transition: all 0.2s ease;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -10px;
    left: 10px;
    background-color: white;
    padding: 0 5px;
    font-size: 12px;
    color: #333;
  }
`;
