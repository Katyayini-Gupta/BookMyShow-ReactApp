import Carousel from 'react-bootstrap/Carousel'

function SliderImages2() {
  return (
    <div style={{paddingBottom: "1.5%"}} >
      <Carousel fade variant="dark" style={{paddingTop:"10px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="movie_slider/slider1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="movie_slider/slider2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="movie_slider/slider3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./movie_slider/slider4.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages2;
