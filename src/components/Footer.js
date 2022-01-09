import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
  return (
    <div class="foot" style={{background: "rgb(49, 48, 53)", color:"white"}}>
        <Container fluid>
            <Row style={{padding:"1.7%"}}>
                <Col xs={{offset:1, span: 2}}>
                    <h6 style={{ fontWeight: "600"}}>List Your Show</h6>
                </Col>
                <Col xs={6}>
                    <h6 style={{ fontWeight: "400"}}>Got a show, event, activity or a great experience? Partner with us & get listed in BookMyShow</h6>
                </Col>
                <Col xs={2} style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236, 94, 113)"}}>Contact Today!</Button>
                </Col>
            </Row>
            <Row style={{textAlign:"center",fontSize:"15px",color:"currentcolor", padding:"2%", background: "rgb(64, 64, 67)"}}>
                <Col>
                    24/7 CUSTOMER CARE
                </Col>
                <Col>
                    RESEND BOOKING CONFIRMATION
                </Col>
                <Col>
                    SUBSCRIBE TO THE NEWSLETTER
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Footer;