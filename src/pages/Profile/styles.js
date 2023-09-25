/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import ProductOne from '../../assets/Profile/product1.png';
import ProductTwo from '../../assets/Profile/product2.png';
import ProfileBack from '../../assets/Profile/profile_back.jpg';
import ProfileImg from '../../assets/Profile/profile_img.png';

const firstBreakPoint = '1130px';
const secondBreakPoint = '800px';
const mobileBreakPoint = '700px';
const miniBreakPoint = '440px';

export const ProfileImage = styled.div`
  background-color: white;
  width: 30rem;
  height: 36rem;
  background-image: url(${ProfileImg});
  background-size: 100% 100%;
  background-position: center;
  margin: 5%;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
  background-color: #7f260f;
  overflow: hidden;
`;

export const BackgroundDiv = styled.div`
  display: flex;
  width: 100%;
  height: 50rem;
  background-image: url(${ProfileBack});
  background-size: 100% 100%;
  background-position: center;
  text-align: left;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: camila;

  p {
    margin-left: 3%;
    font-size: 8rem;
    line-height: 2.5rem;
    margin-bottom: 4%;

    @media (max-width: ${firstBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
    @media (max-width: ${secondBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
    @media (max-width: ${miniBreakPoint}) {
      margin-right: 3%;
      font-size: 7rem;
      line-height: 5rem;
      margin-bottom: 1%;
    }
  }

  p1 {
    font-size: 4rem;

    @media (max-width: ${firstBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
    @media (max-width: ${secondBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
    @media (max-width: ${miniBreakPoint}) {
      margin-right: 3%;
      font-size: 4rem;
      line-height: 3rem;
    }
  }
`;

export const Data = styled.div`
  display: flex;
  width: fit-content;
  height: 10rem;
  text-align: center;
  border-radius: 3rem;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
  background-color: #f19709;
  padding: 2%;
  margin-left: 3%;
  margin-top: 2%;
  @media (max-width: ${firstBreakPoint}) {
    border-radius: 4rem;
    font-size: 8rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    border-radius: 5rem;
    font-size: 7rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    border-radius: 6rem;
    font-size: 6rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    border-radius: 7rem;
    font-size: 5rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  color: #ffffff;
  font-size: 4rem;
  padding: 2%;
  margin-left: 3%;
  margin-top: 2%;
  width: 90%;

  p1 {
    display: flex;
    color: #ffffff;
    margin-top: 2%;
    gap: 1rem;
  }
`;

export const InfoText = styled.div`
  border-bottom: solid;

  border-color: #f19709;
  width: 100%;
`;

export const Historic = styled.div`
  display: flex;
  width: fit-content;
  height: 10rem;
  text-align: center;
  border-radius: 3rem;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
  background-color: #f19709;
  padding: 2%;
  margin-left: 3%;
  margin-top: 2%;
  @media (max-width: ${firstBreakPoint}) {
    border-radius: 4rem;
    font-size: 8rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    border-radius: 5rem;
    font-size: 7rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    border-radius: 6rem;
    font-size: 6rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    border-radius: 7rem;
    font-size: 5rem;
  }
`;

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-right: 3%;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  margin: 3%;
  border-radius: 3rem;
`;

export const ProductButton = styled.button`
  background-color: white;
  color: #7f260f;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 3rem;
  border-radius: 3rem;
`;

export const ProductImage1 = styled.div`
  background-color: white;
  width: 40rem;
  height: 48rem;
  background-image: url(${ProductOne});
  background-size: 100% 100%;
  background-position: center;
  margin: 3%;
  border-radius: 3rem;
  @media (max-width: ${firstBreakPoint}) {
    width: 30rem;
    height: 36rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 20rem;
    height: 24rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 15rem;
    height: 18rem;
  }
`;

export const ProductImage2 = styled.div`
  background-color: white;
  width: 40rem;
  height: 48rem;
  background-image: url(${ProductTwo});
  background-size: 100% 100%;
  background-position: center;
  margin: 3%;
  border-radius: 3rem;
  @media (max-width: ${firstBreakPoint}) {
    width: 30rem;
    height: 36rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 25rem;
    height: 30rem;
  }
  @media (max-width: ${mobileBreakPoint}) {
    width: 20rem;
    height: 24rem;
  }
  @media (max-width: ${miniBreakPoint}) {
    width: 15rem;
    height: 18rem;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  margin-left: 3%;
  margin-bottom: 3%;
  margin-top: 2%;
`;

export const ChangeButton = styled.button`
  display: flex;
  width: fit-content;
  height: 5rem;
  text-align: center;
  border-radius: 6rem;
  align-items: center;
  color: #ffffff;
  font-size: 3rem;
  background-color: black;
  margin-left: 2%;
  padding: 2%;
`;

export const DeleteButton = styled.button`
  display: flex;
  width: fit-content;
  height: 5rem;
  text-align: center;
  border-radius: 6rem;
  align-items: center;
  color: #ffffff;
  font-size: 3rem;
  background-color: black;
  margin-left: 2%;
  padding: 2%;
`;
