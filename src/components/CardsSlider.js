import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardsSlider() {
  return (
    <div style={{paddingBottom: "5%", background:"#f5f5f5", padding: "5%",paddingRight:"8%",paddingLeft:"8%"}}>
      <h2 style={{fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>The Best of Entertainment</h2>
      <Carousel fade variant="dark" indicators={false}>
        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/1.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/2.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/3.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/4.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/5.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/6.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/7.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

            <Card className="text-white" style={{borderRadius: "25px"}}>
              <Card.Img src="./entertainment/8.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
            </Card>

          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

          <Card className="text-white" style={{borderRadius: "25px"}}>
            <Card.Img src="./entertainment/9.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
          </Card>

          <Card className="text-white" style={{borderRadius: "25px"}}>
            <Card.Img src="./entertainment/10.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
          </Card>

          <Card className="text-white" style={{borderRadius: "25px"}}>
            <Card.Img src="./entertainment/11.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
          </Card>

          <Card className="text-white" style={{borderRadius: "25px"}}>
            <Card.Img src="./entertainment/12.jfif" alt="Card image" style={{borderRadius: "25px"}}/>
          </Card>

          </CardGroup>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default CardsSlider;
