import styled from 'styled-components';

import { ImageEvents2 } from '../../assets/Events/Index';

export const Body = styled.div`
  align-items: center;
  text-align: center;
  height: 360rem;
`;

export const Reception = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.yellow};
  height: 15rem;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
export const Text = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 4.5rem;
  width: 60%;
  position: relative;
  top: 1rem;
`;
export const Carousel = styled.div`
  margin-top: 8rem;
`;
export const Programation = styled.div`
  /* background-color: black; */
  display: flex;

  flex-direction: column;
  height: 72%; //sempre que eu aumento o height de progrmation a imagem fica cortada dos lados, porque isso ocorre?
  align-items: center;
  width: 100%;
  margin-top: 20rem;
`;

export const Image = styled.div`
  background-image: url(${ImageEvents2});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%; //sempre que eu aumento o height de progrmation a imagem fica cortada dos lados, porque isso ocorre?
  align-items: center;
  width: 100%;
`;
