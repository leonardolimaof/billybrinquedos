// components/CarouselFadeExample.tsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagem1 from '../ExampleCarouselImage/img/Imagem1.jpg';
import Imagem2 from '../ExampleCarouselImage/img/Imagem2.jpg';
import Imagem3 from '../ExampleCarouselImage/img/Imagem3.jpg';

const CarouselFadeExample: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const handleChangeIndex = () => {
    setIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };

  React.useEffect(() => {
    const intervalId = setInterval(
      () => handleChangeIndex(),
      7000
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container">
        <Carousel
          fade
          interval={7000}
          activeIndex={index}
          onSelect={handleChangeIndex}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem1.replace('1.jpg', '1.jpg?resize=800:400')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem2.replace('Imagem2.jpg', 'Imagem2.jpg?resize=800:400')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Imagem3.replace('1.jpg', '1.jpg?resize=800:400')}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselFadeExample;
