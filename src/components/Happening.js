import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

function Happening() {
  return (
    <div style={{paddingBottom: "5%", background:"#f5f5f5", padding: "5%",paddingRight:"8%",paddingLeft:"8%"}}>
      <h2 style={{fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>Happening Near You!</h2>
      <Carousel fade variant="dark" indicators={false}>
        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/1.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/2.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/3.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/4.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/5.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/6.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/7.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/8.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/9.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#f5f5f5", border: "none"}}>
              <Card.Img variant="top" src="./happening/10.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Event Name</Card.Title>
                <Card.Text>
                  Event Description
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </Carousel.Item>

      </Carousel>

    </div>
  );
}

export default Happening;