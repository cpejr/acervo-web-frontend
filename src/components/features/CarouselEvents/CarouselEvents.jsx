import Slider from 'react-slick';

import {
  CarouselEvents1,
  CarouselEvents2,
  CarouselEvents3,
} from '../../../assets/Home';
import { Container, ImageCarousel } from './Styles';

export default function CarouselEvents() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Slider {...settings}>
        <ImageCarousel src={CarouselEvents1} />
        <ImageCarousel src={CarouselEvents2} />
        <ImageCarousel src={CarouselEvents3} />
      </Slider>
    </Container>
  );
}
