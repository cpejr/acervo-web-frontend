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
`;

export const ProductItem = styled.div`
  padding: 10px;
  display: flex;
`;

export const ProductImage = styled.div`
  justify-content: left;
  align-self: center;
  margin: 5px;
`;

export const ProductDescription = styled.div`
  overflow-y: auto;
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
`;
