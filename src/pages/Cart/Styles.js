import { BsCart3 } from 'react-icons/bs';
import { IoPersonCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: ${(props) => props.theme.fonts.primary};
  background-color: ${(props) => props.theme.colors.strongOrange};
  width: 100%;
  &:hover {
    cursor: default;
  }
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
  color: ${(props) => props.theme.colors.strongOrange};
`;

export const DivCart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;

  p {
    color: ${(props) => props.theme.colors.strongOrange};
    font-size: 30px;
    font-weight: 500;
    padding: 8px;
  }
`;

export const StyledCartIcon = styled(BsCart3)`
  font-size: 40px;
`;

export const StyledProfileIcon = styled(IoPersonCircleOutline)`
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
  text-align: center;
  font-size: 20px;
  padding: 8px;
  color: white;
  background-color: ${(props) => props.theme.colors.strongOrange};
  font-family: ${(props) => props.theme.fonts.primary};
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
  background-color: ${(props) => props.theme.colors.strongOrange};

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
  @media (max-width: 350px) {
    font-size: 22px;
  }
`;
