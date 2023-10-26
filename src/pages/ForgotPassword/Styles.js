import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`;

export const Title = styled.div`
  font-family: ${(props) => props.theme.fonts.Title};
  font-size: 5rem;
  color: white;
  text-align: center;
  @media (max-width: 1290px) {
    font-size: 4rem;
  }
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;
export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 400px;
  background-color: ${(props) => props.theme.colors.fontHeader};
  border-radius: 3rem;
  text-align: center;
  font-size: 8rem;
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
