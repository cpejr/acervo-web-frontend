import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: 800px) {
    margin-top: 5rem;
  }
  @media (max-width: 600px) {
    margin-top: 0rem;
    gap: 4rem;
  }
`;
export const Control = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  text-align: center;
  @media (max-width: 1290px) {
    font-size: 4rem;
  }
  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;
export const Container = styled.button`
  display: flex;
  font-family: ${(props) => props.theme.fonts.primary};
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 400px;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  text-align: center;
  cursor: pointer;
  font-size: 6rem;
  border: none;
  transition: background-color 1s ease, color 1s ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.strongOrange};
    color: ${(props) => props.theme.colors.fontHeader};
  }
  @media (max-width: 1290px) {
    font-size: 6rem;
  }
  @media (max-width: 760px) {
    width: 40rem;
    height: 350px;
    font-size: 4rem;
  }
  @media (max-width: 560px) {
    width: 35rem;
    height: 300px;
  }
  @media (max-width: 400px) {
    width: 25rem;
    height: 200px;
  }
`;
export const Button = styled.button`
  display: flex;
  width: fit-content;
  height: fit-content;
  text-align: center;
  border: none;
  border-radius: 10rem;
  align-items: center;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 3rem;
  background-color: ${(props) => props.theme.colors.fontDialog};
  margin-left: 2%;
  margin-top: 3%;
  padding: 2%;
  cursor: pointer;
`;
