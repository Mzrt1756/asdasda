import CarouselPicture1 from "../../assets/cafe-1500x610.jpg";
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
          src={CarouselPicture1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg d-block w-100"
          src={CarouselPicture1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}
