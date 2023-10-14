import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000000;
`;
export const FullPageDialog = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: center;
  z-index: 999;
`;

export const DialogContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px;
`;
export const Top = styled.div``;
export const Logo = styled.div`
  width: 5.8rem;
  height: auto;
`;

export const Itens = styled.div`
  width: 100%;
`;
export const DialogItem = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding-top: 1rem;
  cursor: pointer;
  border-bottom: 0.2rem solid #f19709;
  color: ${(props) => props.theme.colors.orangeButton};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 4rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
export const FirstSection = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7707457983193278) 61%,
      rgba(134, 134, 134, 0) 100%
    ),
    url('src/assets/Header/headerBackground.png');
  background-size: cover;
  background-position: top left;
  background-repeat: repeat-x;
  filter: blur(5px);
  transform: scale(1.1);
`;
export const Content = styled.div`
  witdh: 100%
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  gap: 15rem;
  margin-left: 17rem;
  margin-left: 0.5rem;
`;
export const Title = styled.h1`
  font-family: 'Caramella';
  font-style: normal;
  font-weight: 100;
  font-size: 3rem;
  text-align: start;
  line-height: 0.8;

  color: white;

  h1 {
    font-family: 'Quicksand', sans-serif;
    font-style: normal;
    font-weight: 2;
  }
  p {
    font-family: ${(props) => props.theme.fonts.primary};
    color: ${(props) => props.theme.colors.orangeButton};
  }
`;
// Additional styling can be applied as needed
