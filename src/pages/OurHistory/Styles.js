/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import acervo from '../../img/acervo.jpg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 2rem;
`;
export const Apresentation = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  text-align: center;
  text-decoration: underline #ffd599;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
`;
export const Whole = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;
export const Text = styled.text`
  margin-left: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;
  text-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 1);
`;
export const Image = styled.div`
  margin-left: 3rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
  }
`;
export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;
export const Image2 = styled.div`
  margin-right: 3rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
  }
`;
export const Text2 = styled.text`
  margin-right: 3rem;
  width: 90%;
  color: #ffffff;
  font-size: 3rem;
  text-align: justify;
`;
export const Image3 = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
  background-image: url(${acervo});
  background-size: 100% 100%;
  background-position: center;
  font-size: 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
export const Whole2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;
export const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;
export const Text3 = styled.text`
  width: 100%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
`;
export const Image4 = styled.div`
  margin-right: 3rem;
  > img {
  }
`;
export const Who = styled.div`
  display: flex;
  width: 100%;
  height: 15rem;
  text-align: center;
  text-decoration: underline #ffd599;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
`;
export const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Text4 = styled.text`
  width: 95%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
`;
export const Whole3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
`;
export const Column6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 35%;
  height: 100%;
  gap: 2rem;
`;
export const Column7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 65%;
  height: 100%;
  gap: 2rem;
`;
export const Image5 = styled.div`
  margin-left: 5rem;
  > img {
    border: 2rem solid black;
    border-bottom: 4rem solid black;
  }
`;
export const Name = styled.div`
  margin-top: 3rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 7rem;
`;
export const Text5 = styled.text`
  width: 90%;
  color: #ffffff;
  font-size: 4rem;
  text-align: justify;
  margin-left: 3rem;
`;
export const Column8 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 4rem;
`;
export const Image6 = styled.div`
  display: flex;
  width: 100%;
  height: 41rem;
  background-image: url(${acervo});
  background-size: 100% 100%;
  background-position: center;
  font-size: 4rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;
