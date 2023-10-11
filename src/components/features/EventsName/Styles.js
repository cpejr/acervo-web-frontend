import styled from 'styled-components';

import { Image } from '../../../assets/Events/index';

export const Bubble = styled.div`
  align-items: center;
  margin-left: 12%;
  margin-right: 12%;
  position: relative;
  z-index: 1;
  margin-top: 15rem;
  @media (max-width: 910px) {
    margin-top: 12rem;
  }
  @media (max-width: 890px) {
    margin-top: 0rem;
    top: 6rem;
  }
  @media (max-width: 810px) {
    top: 0rem;
    margin-top: 8rem;
  }
  @media (max-width: 700px) {
    margin-top: 5rem;
  }

  @media (max-width: 670px) {
    max-height: 75rem;
  }

  @media (max-width: 350px) {
    margin-left: 3%;
    margin-right: 4%;
  }
`;

export const Control = styled.div`
  width: 45rem;
  opacity: 1;
  height: 50rem;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: contain;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.opacity {
    opacity: 0.1;
  }

  @media (max-width: 1170px) {
    width: 40rem;
    height: 50rem;
  }
  @media (max-width: 1540px) {
    width: 40rem;
    height: 40rem;
  }
  @media (max-width: 1400px) {
    width: 40rem;
    height: 35rem;
  }

  @media (max-width: 1300px) {
    width: 30rem;
    height: 45rem;
  }
  @media (max-width: 880px) {
    width: 25rem;
    height: 35rem;
  }
  @media (max-width: 780px) {
    width: 15rem;
    height: 25rem;
  }
  @media (max-width: 720px) {
    width: 12rem;
    height: 20rem;
  }
  @media (max-width: 460px) {
    width: 10rem;
    height: 16rem;
  }
  @media (max-width: 380px) {
    width: 7rem;
    height: 12rem;
  }

  img {
    align-items: center;
    width: 60%;
    height: 40%;
    margin-top: 15%;
    @media (max-width: 1300px) {
      width: 50%;
      height: 30%;
    }
    @media (max-width: 1130px) {
      width: 50%;
      height: 20%;
    }

    @media (max-width: 880px) {
      width: 40%;
      height: 25%;
    }
  }
  a {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.fontHeader};
    position: relative;
    align-items: center;
    font-size: 3rem;
    max-width: 50%;

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
    @media (max-width: 880px) {
      max-width: 100%;
      font-size: 1.8rem;
    }

    @media (max-width: 720px) {
      font-size: 1.4rem;
    }
    @media (max-width: 380px) {
      font-size: 0.9rem;
    }
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20rem;
  @media (max-width: 1790px) {
    gap: 15rem;
    max-height: 45rem;
  }
  @media (max-width: 1440px) {
    gap: 15rem;
    max-height: 45rem;
  }

  @media (max-width: 1345px) {
    max-height: 30rem;
  }
  @media (max-width: 1170px) {
    gap: 8rem;
    max-height: 25rem;
  }
  @media (max-width: 1170px) {
    gap: 12rem;
    max-height: 25rem;
  }
  @media (max-width: 920px) {
    gap: 8rem;
  }
  @media (max-width: 820px) {
    max-height: 20rem;
  }
  @media (max-width: 650px) {
    max-height: 15rem;
  }
  @media (max-width: 570px) {
    gap: 3rem;
  }

  @media (max-width: 415px) {
    gap: 1rem;
  }
  @media (max-width: 380px) {
    gap: 2rem;
  }
  @media (max-width: 300px) {
    gap: 1rem;
  }
  p {
    display: flex;
    gap: 5rem;
    flex-direction: row;
    margin-left: 35%;
  }
`;
