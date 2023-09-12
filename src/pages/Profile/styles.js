/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import ProductOne from '../../assets/Profile/product1.png';
import ProductTwo from '../../assets/Profile/product2.png';
import ProfileBack from '../../assets/Profile/profile_back.jpg';
import ProfileImg from '../../assets/Profile/profile_img.png';

export const ProfileImage = styled.div`
  background-color: white;
  width: 30rem;
  height: 36rem;
  background-image: url(${ProfileImg});
  background-size: 100% 100%;
  background-position: center;
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

export const Image3 = styled.div`
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
    line-height: 3rem;
    margin-bottom: 10%;
  }

  p1 {
    font-size: 4rem;
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

  p1 {
    display: flex;
    color: #ffffff;
    margin-top: 2%;
  }
  p {
    color: #f19709;
  }
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
`;

export const ProductDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 3%;
  align-items: center;
  justify-content: center;
`;

export const ProductImage1 = styled.div`
  background-color: white;
  width: 40rem;
  height: 48rem;
  background-image: url(${ProductOne});
  background-size: 90% 90%;
  background-position: center;
  margin: 3%;
  border-radius: 3rem;
`;

export const ProductImage2 = styled.div`
  background-color: white;
  width: 40rem;
  height: 48rem;
  background-image: url(${ProductTwo});
  background-size: 90% 90%;
  background-position: center;
  margin: 3%;
  border-radius: 3rem;
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
