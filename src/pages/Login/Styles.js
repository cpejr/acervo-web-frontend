import { AiOutlineEye } from 'react-icons/ai';
import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 10%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  @media (max-width: 610px) {
    font-size: 4rem;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 70%;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 610px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  border-radius: 3rem;
  width: 90%;
  max-height: 50%;
  height: 50%;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.fontDialog};
  background-color: ${(props) => props.theme.colors.inputcolor};
  border: none;
  @media (max-width: 290px) {
    width: 90%;
    height: 100%;
  }
`;
export const Control = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ContainerIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;
`;
export const In = styled.button`
  background-color: ${(props) => props.theme.colors.fontDialog};
  font-size: 2rem;
  color: white;
  border-radius: 3rem;
  width: 25%;
  height: 90%;
  font-family: ${(props) => props.theme.fonts.primary};
  border: none;
  @media (max-width: 610px) {
    width: 50%;
    height: 90%;
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
  @media (max-width: 610px) {
    width: 60%;
    font-size: 1.5rem;
  }
`;

export const MyConst = styled(AiOutlineEye)`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 7rem;
  font-size: 3rem;
  @media (max-width: 1350px) {
    right: 4rem;
  }
  @media (max-width: 600px) {
    right: 3rem;
  }
  @media (max-width: 360px) {
    right: 2rem;
  }
`;
