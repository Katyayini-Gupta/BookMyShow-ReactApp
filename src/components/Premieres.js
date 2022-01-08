import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

function Premieres() {
  return (
    <div style={{ background: "rgb(43,49,72)", padding: "5%",paddingRight:"8%",paddingLeft:"8%",paddingTop:"2%"}}>
      <Image src="./premiere.jfif" style={{width:"100%", paddingBottom:"4%"}}></Image>
      <h2 style={{color: "white",fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>Premieres</h2>
      <Carousel fade variant="dark" indicators={false}>
        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/1.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/2.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/3.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/4.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/5.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/6.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/7.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{background:"rgb(43,49,72)", border: "none"}}>
              <Card.Img variant="top" src="./premiere/8.jpg" style={{borderRadius: "18px"}}/>
              <Card.Body style={{color: "white"}}>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Movie Language
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Premieres;
