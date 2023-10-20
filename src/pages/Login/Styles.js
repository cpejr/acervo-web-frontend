import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div``;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.fontHeader};
`;
export const ContainerIn = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.inputcolor};
`;
export const In = styled.button`
  background-color: ${(props) => props.theme.colors.fontDialog};
  font-size: 2rem;
  color: white;
`;
export const Forgot = styled.button``;
