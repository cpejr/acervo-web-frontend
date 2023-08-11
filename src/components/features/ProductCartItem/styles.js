import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: white;
  width: 85%;
  max-height: 160px;
  overflow: hidden;
  align-self: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    max-width: 150px;
    max-height: 150px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    justify: center;
    width: 94%;
    max-height: 190px;
    img {
      max-width: 150px;
      max-height: 140px;
    }
  }
`;

export const ProductItem = styled.div`
  padding: 12px 0px 12px 12px;
  display: flex;
  @media (max-width: 500px) {
    padding: 8px 8px 0px 8px;
  }
`;

export const ProductImage = styled.div`
  justify-content: left;
  align-self: center;
`;

export const ProductDescription = styled.div`
  overflow-y: auto;
  text-align: justify;
  padding: 10px;
`;

export const ProductCount = styled.div`
  margin: 10px;
  display: flex;
  align-self: last baseline;
  background-color: gray;
  border-radius: 5px;
  font-size: 18px;
  p {
    height: 5px;
    align-items: center;
    justify-items: center;
  }
  button {
    background-color: transparent;
    border: none;
    padding: 0 5px;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  @media (max-width: 500px) {
    font-size: 18px;
    padding: 3px 8px 3px 8px;
    width: 60px;
    margin: 8px;
    align-self: center;
  }
`;
