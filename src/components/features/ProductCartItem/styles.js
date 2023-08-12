import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 85%;
  max-height: 190px;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    width: 160px;
    height: 160px;
    padding: 6px;
    border-radius: 10px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    width: 90%;
    max-height: 210px;
    img {
      max-width: 150px;
      max-height: 140px;
      border-radius: 10px;
    }
  }
  @media (max-width: 350px) {
    max-height: 440px;
    width: 75%;
    padding: 8px 0px;
    overflow-y: auto;
  }
`;

export const ProductItem = styled.div`
  padding: 12px 0px 12px 12px;
  display: flex;
  p {
    font-size: 22px;
  }
  h2 {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    padding: 8px 8px 0px 8px;
    padding-top: 20px;
    height: 160px;
  }
  @media (max-width: 350px) {
    flex-direction: column;
    max-height: 160px;
    padding: 8px 0;
    img {
      max-width: 150px;
      max-height: 340px;
    }
  }
`;

export const ProductImage = styled.div`
  justify-content: left;
  align-self: center;
  display: flex;
`;

export const ProductDescription = styled.div`
  object-fit: contain;
  text-align: justify;
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-height: 150px;
  overflow-y: auto;
  @media (max-width: 500px) {
    padding: 0px 8px;
    justify-content: start;
  }
  @media (max-width: 350px) {
    max-height: unset;
    justify-content: start;
    overflow-y: unset;
    flex-direction: column;
  }
`;

export const ProductCount = styled.div`
  margin: 10px;
  display: flex;
  align-self: last baseline;
  justify-content: space-between;
  background-color: gray;
  border-radius: 5px;
  font-size: 26px;
  p {
    align-items: center;
    justify-items: center;
    padding: 0 3px;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0 5px;
    font-size: 26px;
    height: 35px;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 500px) {
      align-self: center;
    }
  }
  @media (max-width: 500px) {
    width: 70px;
    margin: 10px 0px;
    align-self: center;
    justify-content: center;
  }
  @media (max-width: 350px) {
    margin-left: auto;
    margin-right: 10px;
  }
`;
