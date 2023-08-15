import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillYoutube,
  AiOutlineSearch,
} from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #7f260f;
  padding-bottom: 7rem;
  overflow-x: hidden;
`;
export const FilterSection = styled.div`
  position: relative;
  width: 100%;
  height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f19709;
  background-size: contain;
  h2 {
    padding-top: 60px;
    color: white;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 300;
    font-size: 5rem;
  }
`;
export const Dialog = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  overflow: hidden;
  width: 18rem;
  flex-direction: column;
  margin-top: 38rem;
  gap: 1rem;
  background: white;
  border: solid;
  border-radius: 21px;
  border-color: black;
  border-width: 2px;
  z-index: 2;
  p {
    color: ${(props) => props.theme.colors.orangeButton};
    font-size: 2rem;
    padding: 0.6rem 0 0.2rem 0;
  }
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
const dialogItemAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DialogItem = styled.div`
  display: flex;
  font-family: ${(props) => props.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 2.1rem;
  color: rgba(30, 30, 30);
  flex-direction: row;
  gap: 0.4rem;
  padding: 0.5rem 0;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.colors.orangeButton};
  cursor: pointer;
  @media (max-width: 1060px) {
    font-size: 1.5;
  }
  &.dialogOpen {
    animation: ${dialogItemAppear} 0.3s ease-in-out forwards;
    animation-delay: ${(props) => props.index * 0.1}s;
  }
`;
export const ArrowIcon = styled(RiArrowRightSLine)`
  margin-top: 0.4rem;
`;

export const DocumentDialog = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  overflow: hidden;
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
  border: solid;
  align-items: center;
  justify-content: space-between;
  max-width: 136rem;
  width: 65%;
  height: 9rem;
  background: #ffffff;
  border-radius: 1.5rem;
  align-items: center;
  top: 20rem;
  margin-top: 7rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.primary};
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
  margin-left: 2rem;
  align-items: center;
  justify-self: end;
  gap: 2rem;
`;
export const SearchonSite = styled.div`
  display: flex;
  width: 60rem;
  height: 6rem;
  padding-left: 4rem;
  align-items: center;
  h1 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 5rem;
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
  width: 7rem;
  height: 7rem;
  background: rgba(217, 217, 217, 0.35);
  border-radius: 1.6rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  padding: 0.5rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 2.6rem;

    color: rgba(30, 30, 30, 0.74);
  }
`;
export const StyledSearchIcon = styled(AiOutlineSearch)`
  font-size: 7rem;
  color: #ffffff;
`;
export const Search = styled.button`
  display: flex;
  width: 12rem;
  height: 9rem;
  background: black;
  align-items: center;
  justify-content: center;
  border-radius: 0rem 1.5rem 1.5rem 0rem;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border: none;

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

  background-color: #7f260f;
`;
export const LastEventsLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 11.4rem;
  background: black;
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

  background-color: #7f260f;
`;
export const ProductLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15rem;
  margin-top: 6rem;
  background: black;

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
  background-color: #7f260f;
`;

export const SupportLine = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 15rem;
  margin-top: 6rem;
  padding-left: 3rem;

  background: #7f260f;
  h1 {
    font-family: 'Caramella';
    font-style: normal;
    font-weight: 50;
    font-size: 6rem;
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

    color: white;
  }
  p {
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;

    color: white;
  }

  h3 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    color: #f19709;
  }

  @media (max-width: 1060px) {
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 2.4rem;
    }
    h3 {
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
  background-color: ${(props) => props.theme.colors.orangeButton};
  box-shadow: 0rem 1rem 4rem rgba(0, 0, 0, 0.25);
  border-radius: 6.5rem;
  border: none;
  cursor: pointer;

  h1 {
    font-family: ${(props) => props.theme.fonts.primary};
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
