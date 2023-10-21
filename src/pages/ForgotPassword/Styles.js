import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 560px) {
    padding-right: 15rem;
  }
  @media (max-width: 400px) {
    padding-right: 28rem;
  }
  @media (max-width: 320px) {
    padding-right: 32rem;
  }
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  @media (max-width: 1290px) {
    font-size: 4rem;
  }
  @media (max-width: 760px) {
    font-size: 3rem;
  }
  @media (max-width: 560px) {
    text-align: center;
    max-width: 70%;
  }
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
export const Container = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 70%;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  text-align: center;
  justify-content: center;
  font-size: 8rem;
  @media (max-width: 1290px) {
    font-size: 6rem;
  }
  @media (max-width: 760px) {
    font-size: 4rem;
    width: 45%;
    height: 55%;
  }
  @media (max-width: 560px) {
    height: 45%;
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    height: 30%;
    font-size: 2rem;
  }
`;
