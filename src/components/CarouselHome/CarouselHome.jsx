import CarouselPicture1 from "../../assets/carouselImg1.jpg";
import CarouselPicture2 from "../../assets/carouselImg2.jpg";
import CarouselPicture3 from "../../assets/carouselImg3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css';

export const CarouselHome = () => {
    return(
        <Carousel className="carouselFull">
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={CarouselPicture1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={CarouselPicture2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={CarouselPicture3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}
