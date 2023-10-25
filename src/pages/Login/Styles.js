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
  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  @media (max-width: 520px) {
    margin-right: 10rem;
  }
  @media (max-width: 440px) {
    margin-right: 10rem;
    font-size: 3rem;
    margin-right: 15rem;
  }
  @media (max-width: 370px) {
    margin-right: 25rem;
  }
  @media (max-width: 290px) {
    margin-right: 28rem;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 70%;
  gap: 5rem;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (max-width: 520px) {
    margin-right: 10rem;
  }
  @media (max-width: 440px) {
    width: 40%;
    height: 60%;
    margin-right: 15rem;
  }
  @media (max-width: 370px) {
    margin-right: 25rem;
  }
  @media (max-width: 290px) {
    width: 30%;
    height: 50%;
    margin-right: 28rem;
    gap: 2rem;
  }
`;

export const Input = styled.input`
  border-radius: 3rem;
  width: 90%;
  max-height: 50%;
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
  @media (max-width: 290px) {
    width: 90%;
    height: 100%;
  }
`;
export const Control = styled.div`
  width: 100%;
  gap: 6rem;
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const ContainerIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
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
  @media (max-width: 290px) {
    width: 50%;
  }
`;
export const Forgot = styled.button`
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  width: 50%;
  height: 7%;
  font-family: ${(props) => props.theme.fonts.primary};
  border: none;
  font-size: 2rem;
  @media (max-width: 520px) {
    margin-right: 10rem;
  }
  @media (max-width: 440px) {
    margin-right: 15rem;
    width: 40%;
  }
  @media (max-width: 370px) {
    margin-right: 25rem;
  }
  @media (max-width: 290px) {
    width: 30%;
    margin-right: 28rem;
    font-size: 1.5rem;
  }
`;

export const MyConst = styled(AiOutlineEye)`
  margin-right: 5px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 5rem; /* Aumente o valor para mover mais para a direita */
  font-size: 3rem;
  @media (max-width: 520px) {
    left: 22rem;
  }
  @media (max-width: 440px) {
    left: 17rem;
  }

  @media (max-width: 290px) {
    left: 12rem;
  }
`;
