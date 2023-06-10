import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FirstSection = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/Home/image 1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(10px);
`;
export const Content = styled.div`
  position: relative;
  //z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Logo = styled.img`
  width: 300px;
  height: auto;
`;
export const Title = styled.h1`
  font-family: 'Cabin Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 57px;
  line-height: 69px;

  color: #b34a36;
`;
export const Text = styled.img`
  width: 800px;
  height: auto;
`;
export const FilterSection = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url('src/assets/Home/Prancheta.png');
  background-repeat: repeat-x;
  background-size: contain;
`;
export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  height: 132px;
  background: #ffffff;
  border-radius: 15px;
  align-items: center;

  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 73px;
    left: 290px;
  }
`;
export const FilterAndSearch = ``;
export const SearchonSite = styled.div``;
export const Filter = styled.div``;
export const Search = styled.div``;
export const Logos = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  background: #ffffff;
  align-items: flex-end;
  justify-content: center;
  gap: 6rem;

  img {
    height: 150px;
    width: auto;
  }
`;

export const LastEvents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background: #7f260f;
  h1 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 103px;
    text-align: center;

    color: #ffffff;
  }
`;
export const Products = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background: #7f260f;

  h1 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 103px;
    text-align: center;

    color: #ffffff;
  }
  p {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 67px;

    color: #7f260f;
  }
`;
export const Support = styled.div``;
export const SupportLine = styled.div``;
export const SupportText = styled.div``;
export const SupportButtom = styled.div``;

export const SocialMedia = styled.div`
  width: 2010px;
  height: 267px;
  left: -2px;

  background: #ffd59966;
`;
