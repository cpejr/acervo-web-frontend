import { BsCart3 } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Cabin Condensed', sans-serif;
  background-color: #ffddad;
  width: 100%;
`;

export const FirstSection = styled.div`
  padding: 20px 7.5%;
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: black;
  color: #f19709;

  .cartSymbol {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 20px;
    p {
      color: #f19709;
      font-size: 30px;
      font-weight: 500;
      padding: 8px;
    }
  }
`;

export const StyledCartIcon = styled(BsCart3)`
  font-size: 40px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  p {
    color: white;
  }
  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const TextSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 20px;
  padding: 8px;
  color: white;
  background-color: #f19709;
  font-family: 'Cabin', sans-serif;
`;

export const ComponentSection = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 0;
  flex-direction: column;
  background-image: linear-gradient(black, #7f260f);
`;

export const PriceSection = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  width: 100%;
  padding: 20px 40px;
  justify-content: space-between;
  padding: 20px 7.5%;
  background-color: #f19709;
  button {
    width: 140px;
    font-weight: 500;
    background-color: black;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 0 5px;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;
