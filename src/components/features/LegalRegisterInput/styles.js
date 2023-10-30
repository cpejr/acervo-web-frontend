import styled from 'styled-components';

const firstBreakPoint = '1140px';
const secondBreakPoint = '800px';
const miniBreakPoint = '440px';

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  color: ${(props) => props.theme.colors.fontHeader};
  font-size: 4rem;
  padding: 2%;
  margin-left: 10%;
  margin-top: 2%;
  width: 80%;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 3rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 2rem;
  }

  p1 {
    display: flex;
    background-color: white;
    border-radius: 10rem;
    color: ${(props) => props.theme.colors.primary};
    padding: 2%;
    margin-top: 2%;
    gap: 2rem;
  }
`;
export const Input = styled.input`
  color: ${(props) => props.theme.colors.primary};
  width: 50%;
  border-color: transparent;
  background-color: transparent;
  font-size: 4rem;
`;

export const Text2 = styled.h1`
  text-align: left;
  font-size: 4rem;
  margin-top: 3%;
  padding: 1%;
  margin-left: 10%;
  font-family: ${(props) => props.theme.fonts.caramella};
  color: ${(props) => props.theme.colors.fontHeader};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;
