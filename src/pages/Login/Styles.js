import { AiOutlineEye } from 'react-icons/ai';
import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 70%;
  gap: 5rem;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  padding-top: 5rem;
  position: relative;
  z-index: -1;
`;

export const Containerp = styled.div`
  gap: 6rem;
  display: flex;
  width: 100%;
  height: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;
export const Input = styled.input`
  border-radius: 3rem;
  width: 90%;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.fontDialog};
  height: 50%;
  background-color: ${(props) => props.theme.colors.inputcolor};
  border: none;
  &::placeholder {
    /* Estilos para o placeholder */
    color: #888; /* Cor de exemplo */
  }
`;
export const ContainerIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
`;
export const In = styled.button`
  background-color: ${(props) => props.theme.colors.fontDialog};
  font-size: 2rem;
  color: white;
  border-radius: 3rem;
  width: 25%;
  height: 100%;
  font-family: ${(props) => props.theme.fonts.primary};
  border: none;
`;
export const Forgot = styled.button`
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  width: 60%;
  height: 7%;
  font-family: ${(props) => props.theme.fonts.primary};
  border: none;
  font-size: 2rem;
`;

export const MyConst = styled(AiOutlineEye)`
  margin-right: 5px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  right: 8rem;
`;
