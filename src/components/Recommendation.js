import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'react-bootstrap/Image';

function Recommendation() {
  return (
    <div style={{paddingBottom: "5%", background:"#e5e4e2", padding: "5%",paddingRight:"8%",paddingLeft:"8%"}}>
      <h2 style={{fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>Recommended Movies</h2>
      <Carousel fade variant="dark" indicators={false}>
        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/1.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/2.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/3.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/4.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/5.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </Carousel.Item>

        <Carousel.Item>
          <CardGroup style={{display: "flex", justifyContent: "space-around", gap: "30px"}}>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/6.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/7.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/8.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/9.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{background:"#e5e4e2", border: "none"}}>
              <Card.Img variant="top" src="./recommendations/10.jpg" style={{borderRadius: "12px"}}/>
              <Card.Body>
                <Card.Title>Movie Name</Card.Title>
                <Card.Text>
                  Description
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </Carousel.Item>

      </Carousel>

      <Image src="./stream.png" style={{ marginTop: "10%" ,width:"100%"}}></Image>

    </div>
  );
}

export default Recommendation;