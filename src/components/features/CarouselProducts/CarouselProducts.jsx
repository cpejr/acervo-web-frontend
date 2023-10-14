import Slider from 'react-slick';

import { Container, CarouselDiv, ImageCarousel } from './Styles';

export default function CarouselProducts() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptativeHeigth: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <CarouselDiv>
        <Slider {...settings}>
          <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents1.png" />
          <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents2.png" />
          <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents3.png" />
        </Slider>
      </CarouselDiv>
    </Container>
  );
}
