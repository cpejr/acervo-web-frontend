import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffddad;
`;
export const FirstSection = styled.div`
  position: relative;
  width: 100%;
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
  filter: blur(1rem);
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
  width: 30rem;
  height: auto;
`;
export const Title = styled.h1`
  font-family: 'Cabin Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 5rem;

  color: #b34a36;
`;
export const Text = styled.img`
  width: 60rem;
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
  align-items: center;
  max-width: 136rem;
  height: 13rem;
  background: #ffffff;
  border-radius: 1.5rem;
  align-items: center;
  top: 20rem;
  margin-top: auto;

  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 4.6rem;
  }
`;
export const FilterAndSearch = styled.div`
  display: flex;
  padding-right: 0rem;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: center;
`;
export const SearchonSite = styled.div`
  display: flex;
  width: 61rem;
  height: 6rem;
  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 7rem;

    color: rgba(30, 30, 30, 0.74);
  }
`;
export const Filter = styled.div`
  display: flex;
  max-width: 25rem;
  height: 7rem;
  background: rgba(217, 217, 217, 0.35);
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;

    color: rgba(30, 30, 30, 0.74);
  }
`;
export const Search = styled.div`
  display: flex;
  width: 30rem;
  height: 13rem;
  background: #f19709;
  align-items: center;
  justify-content: center;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8rem;

    color: rgba(30, 30, 30, 0.74);
  }
`;

export const LogosandSocial = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: auto;
`;

export const Logos = styled.div`
  width: 100%;
  height: 20rem;
  display: flex;
  background: #ffffff;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 2rem;
  gap: 9rem;

  img {
    height: 15rem;
    width: auto;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  background: #ffd59966;
  width: 100%;
  height: 16rem;
  gap: 16rem;
`;
export const LastEvents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6rem;
`;
export const LastEventsLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.4rem;
  background: #7f260f;
  h1 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;

    color: #ffffff;
  }
`;
export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
`;
export const ProductLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  background: #7f260f;

  h1 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;

    color: #ffffff;
  }
`;
export const Support = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
`;

export const SupportLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  background: #7f260f;
  h1 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    text-align: center;

    color: #ffffff;
  }
`;
export const SupportText = styled.div`
  h2 {
    font-family: 'Cabin Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;

    text-align: flex-start;

    color: #7f260f;
  }
  p {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;

    color: #7f260f;
  }
`;
export const SupportButtom = styled.div`
  max-width: 141rem;
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f19709;
  box-shadow: 0rem 1rem 4rem rgba(0, 0, 0, 0.25);
  border-radius: 6.5rem;
  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    font-size: 6.5rem;
    text-align: center;

    color: #7f260f;
  }
`;
