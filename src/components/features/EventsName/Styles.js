import styled from 'styled-components';

export const Bubble = styled.div`
  align-items: center;
  position: relative;
  z-index: 1;
  margin-top: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;
export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  display: flex;
  position: relative;
  bottom: 170px;
  @media (max-width: 740px) {
    gap: 0rem;
    bottom: 200px;
  }
`;

export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  color: ${(props) => props.theme.colors.fontHeader};
  align-items: center;
  justify-content: center;
  font-size: 3rem;

  @media (max-width: 1670px) {
    font-size: 2.5rem;
    max-width: 60%;
  }
  @media (max-width: 1420px) {
    font-size: 2rem;
  }
  @media (max-width: 1150px) {
    max-width: 80%;
  }
  @media (max-width: 900px) {
    max-width: 80%;
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const Control = styled.div`
  width: 30rem;
  opacity: 1;
  height: 55rem;
  border-radius: 10rem;
  background-size: contain;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 25rem;

    @media (max-width: 1120px) {
      width: 180px;
      height: 20rem;
    }
    @media (max-width: 900px) {
      width: 140px;
      height: 15rem;
    }
    @media (max-width: 600px) {
      width: 70px;
      height: 10rem;
    }

    @media (max-width: 400px) {
      width: 50px;
      height: 5rem;
    }
  }
`;
export const Circle = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 340px;
  opacity: 1;
  border-radius: 15rem;
  opacity: 0.7;
  height: 40rem;
  display: flex;
  position: absolute;
  z-index: -1;

  @media (max-width: 1345px) {
    width: 300px;
  }
  @media (max-width: 1120px) {
    width: 280px;
    height: 35rem;
  }
  @media (max-width: 900px) {
    width: 200px;
    height: 25rem;
  }
  @media (max-width: 740px) {
    width: 180px;
    height: 22rem;
  }
  @media (max-width: 600px) {
    width: 120px;
    height: 15rem;
  }
  @media (max-width: 400px) {
    width: 90px;
    height: 10rem;
  }
  @media (max-width: 300px) {
    width: 80px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20rem;
  margin-top: 5rem;
  @media (max-width: 1790px) {
    gap: 15rem;
  }
  @media (max-width: 1440px) {
    gap: 15rem;
  }
  @media (max-width: 1170px) {
    gap: 12rem;
  }

  @media (max-width: 920px) {
    margin-top: 0rem;
  }
  @media (max-width: 900px) {
    max-height: 30rem;
  }
  @media (max-width: 800px) {
    gap: 6rem;
    margin-top: 6rem;
  }
  @media (max-width: 600px) {
    max-width: 30rem;
    max-height: 20rem;
  }
  @media (max-width: 400px) {
    gap: 1rem;
    max-height: 8rem;
  }
`;
