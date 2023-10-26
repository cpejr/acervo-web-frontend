import { AiOutlineEye } from 'react-icons/ai';
import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  @media (max-width: 740px) {
    font-size: rem;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100rem;
  height: 500px;
  gap: 2rem;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  padding-top: 5rem;
  padding-bottom: 2rem;

  @media (max-width: 1050px) {
    width: 70rem;
  }
  @media (max-width: 740px) {
    width: 45rem;
  }
  @media (max-width: 500px) {
    width: 30rem;
    height: 400px;
  }
  @media (max-width: 330px) {
    width: 20rem;
    height: 300px;
  }
`;

export const Input = styled.input`
  border-radius: 3rem;
  width: 90rem;
  max-height: 50rem;
  height: 60px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2rem;
  color: ${(props) => props.theme.colors.fontDialog};
  background-color: ${(props) => props.theme.colors.inputcolor};
  border: none;

  @media (max-width: 1050px) {
    width: 60rem;
  }
  @media (max-width: 740px) {
    width: 35rem;
  }
  @media (max-width: 500px) {
    width: 25rem;
  }
  @media (max-width: 330px) {
    width: 15rem;
  }
`;
export const Control = styled.div`
  width: 100rem;
  height: 100px;
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
  width: 100rem;
  height: 50px;
  margin-top: 4rem;
  @media (max-width: 330px) {
    margin-top: 0rem;
  }
`;
export const In = styled.button`
  background-color: ${(props) => props.theme.colors.fontDialog};
  font-size: 2rem;
  color: white;
  border-radius: 3rem;
  width: 25rem;
  height: 80px;
  font-family: ${(props) => props.theme.fonts.primary};
  @media (max-width: 1050px) {
    width: 20rem;
  }
  @media (max-width: 330px) {
    width: 10rem;
  }
`;
export const Forgot = styled.button`
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  width: 100rem;
  height: 50px;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1050px) {
    width: 70rem;
  }
  @media (max-width: 740px) {
    width: 45rem;
  }
  @media (max-width: 500px) {
    width: 30rem;
  }
  @media (max-width: 330px) {
    width: 20rem;
  }
`;

export const MyConst = styled(AiOutlineEye)`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 3;
  right: 7rem;
  font-size: 3rem;
  @media (max-width: 1050px) {
    right: 23rem;
  }
  @media (max-width: 740px) {
    right: 35rem;
  }
  @media (max-width: 500px) {
    right: 40rem;
  }
  @media (max-width: 330px) {
    right: 45rem;
  }
`;
