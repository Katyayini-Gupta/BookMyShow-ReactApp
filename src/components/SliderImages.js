import Carousel from 'react-bootstrap/Carousel'

function SliderImages() {
  return (
    <div >
      <Carousel fade variant="dark" style={{paddingTop:"10px"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./sliderImage1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./sliderImage2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./sliderImage3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderImages;
