import Slider from 'react-slick';

import {
  carouselEvents1,
  carouselEvents2,
  carouselEvents3,
} from '../../../assets/home';
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
        <ImageCarousel src={carouselEvents1} />
        <ImageCarousel src={carouselEvents2} />
        <ImageCarousel src={carouselEvents3} />
      </Slider>
    </Container>
  );
}
