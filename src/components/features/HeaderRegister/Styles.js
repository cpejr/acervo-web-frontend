import styled from 'styled-components';

const firstBreakPoint = '1140px';
const secondBreakPoint = '800px';
const miniBreakPoint = '440px';
const thirdBreakPoint = '600px';
const fourthBreakPoint = '400px';
const fifthBreakPoint = '300px';

export const Container = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.fontDialog};
`;

export const Line = styled.div`
  display: flex;
  width: 85%;
  margin-left: 2rem;
  margin-top: 2rem;
  height: auto;
  justify-content: space-between;

  @media (max-width: ${firstBreakPoint}) {
    width: 75%;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 80%;
  }
  @media (max-width: ${thirdBreakPoint}) {
    width: 85%;
  }
  @media (max-width: ${fourthBreakPoint}) {
    width: 95%;
  }
`;
export const Image = styled.div`
  display: flex;
  height: 20rem;
  width: 25rem;

  cursor: pointer;

  @media (max-width: ${firstBreakPoint}) {
    height: 18rem;
    width: 22rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    height: 15rem;
    width: 17rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    height: 13rem;
    width: 14rem;
  }
  @media (max-width: ${fifthBreakPoint}) {
    height: 9rem;
    width: 11rem;
  }
`;
export const Text = styled.h1`
  align-self: center;
  text-align: center;
  width: 100%;
  font-weight: 100;
  justify-content: center;
  font-size: 9rem;
  font-family: ${(props) => props.theme.fonts.caramella};
  color: ${(props) => props.theme.colors.fontHeader};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 6.5rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 3.5rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    font-size: 2.5rem;
  }
`;
