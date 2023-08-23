import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.softOrange};
  padding-bottom: 7rem;
`;
export const FirstSection = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
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
export const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(241, 194, 101, 0.75);
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
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
export const Dialog = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  width: 18rem;
  height: 17rem;
  flex-direction: column;
  margin-top: 35rem;
  gap: 0.6rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 21px;
  border-color: rgba(255, 255, 255, 0.95);
  padding-left: 1rem;
  padding-top: 0.6rem;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  &:hover .document-dialog {
    display: flex;
  }
  @media (max-width: 1080px) {
    width: 15rem;
  }
`;

export const DialogItem = styled.div`
  display: flex;
  font-family: 'Cabin';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  color: rgba(30, 30, 30, 0.74);
  flex-direction: row;
  gap: 0.5rem;
  @media (max-width: 1060px) {
    font-size: 1.5;
  }
`;
export const ArrowIcon = styled(RiArrowRightSLine)`
  margin-top: 0.5rem;
`;

export const DocumentDialog = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  top: 31px;
  left: 100%;
  gap: 1rem;
  margin-left: 10px;
  width: 225px;
  height: 140px;
  gap: 0.6rem;
  padding-left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 21px;
  border-color: rgba(255, 255, 255, 0.95);
  padding-top: 0.6rem;
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

  @media (max-width: 1060px) {
    display: flex;
    max-width: 70rem;
    height: 10rem;
  }
  @media (max-width: 1080px) {
    display: flex;
    max-width: 90rem;
    height: 10rem;
  }
  @media (max-width: 950px) {
    display: flex;
    max-width: 70rem;
    height: 10rem;
  }
`;
export const FilterAndSearch = styled.div`
  display: flex;
  padding-right: 0rem;
  align-items: center;
  gap: 2rem;
`;
export const SearchonSite = styled.div`
  display: flex;
  width: 61rem;
  height: 6rem;
  padding-left: 1rem;
  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 7rem;

    color: rgba(30, 30, 30, 0.74);
  }
  @media (max-width: 1080px) {
    h1 {
      font-size: 4rem;
    }
  }
`;
export const Filter = styled.div`
  display: flex;
  max-width: 26rem;
  height: 7rem;
  background: rgba(217, 217, 217, 0.35);
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.5rem;

  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;

    color: rgba(30, 30, 30, 0.74);
  }
`;
export const Search = styled.button`
  display: flex;
  width: 30rem;
  height: 13rem;
  background: rgba(241, 151, 9, 1);
  align-items: center;
  justify-content: center;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;
  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 3.8rem;

    color: rgba(30, 30, 30, 0.74);
  }
  @media (max-width: 1080px) {
    display: flex;
    max-width: 15rem;
    height: 10rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const LogosandSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 2rem;

  img {
    height: 15rem;
    width: auto;
  }
  @media (max-width: 1060px) {
    width: 100%;
    height: 15rem;
    img {
      height: 12rem;
      width: auto;
    }
  }
  @media (max-width: 1030px) {
    width: 100%;
    height: 15rem;
    img {
      height: 10rem;
      width: auto;
    }
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  background: rgb(255, 218, 165, 1);
  width: 100%;
  height: 16rem;
  gap: 16rem;
  padding: 2rem;
  @media (max-width: 1060px) {
    width: auto;
    height: 13rem;
  }
  @media (max-width: 980px) {
    width: auto;
    height: 10rem;
    padding: 4rem;
    gap: 10rem;
  }
`;
export const InstagramIcon = styled(AiOutlineInstagram)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 980px) {
    font-size: 4rem;
  }
`;

export const FacebookIcon = styled(AiFillFacebook)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 980px) {
    font-size: 4rem;
  }
`;

export const TwitterIcon = styled(AiOutlineTwitter)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 980px) {
    font-size: 4rem;
  }
`;

export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 980px) {
    font-size: 4rem;
  }
`;

export const YoutubeIcon = styled(AiFillYoutube)`
  font-size: 6rem;
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: 980px) {
    font-size: 4rem;
  }
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
  margin-top: 6rem;
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
  padding-bottom: 2rem;
`;

export const SupportLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  margin-top: 6rem;

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
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;

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
  @media (max-width: 1060px) {
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 2.4rem;
    }
  }
`;
export const SupportButtom = styled.button`
  width: 100rem;
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme.colors.strongOrange};
  box-shadow: 0rem 1rem 4rem rgba(0, 0, 0, 0.25);
  border-radius: 6.5rem;
  border: none;
  cursor: pointer;

  h1 {
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 700;
    font-size: 6.5rem;
    text-align: center;

    color: #7f260f;
  }
  @media (max-width: 1060px) {
    width: 60rem;
    height: 13rem;
    h1 {
      font-size: 5rem;
    }
  }
`;
