import Slider from 'react-slick';

import { Container, CarouselDiv, ImageCarousel, BordaBranca } from './Styles';

export default function CarouselEvents() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <Container>
      <BordaBranca>
        <CarouselDiv>
          <Slider {...settings}>
            <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents1.png" />
            <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents2.png" />
            <ImageCarousel src="src/assets/Home/carouselEvents/carouselEvents3.png" />
          </Slider>
        </CarouselDiv>
      </BordaBranca>
    </Container>
  );
}
