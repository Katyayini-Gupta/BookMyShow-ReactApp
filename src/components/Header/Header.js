import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div >
      <Navbar style={{background: "rgb(51, 53, 69)"}} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" gap-5>
          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">All Movies</Nav.Link>
              <Nav.Link href="/register">User Registration</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container fluid style={{background: "rgb(31, 37, 51)", color:"white", display:"flex", justifyContent:"space-between",padding:"10px"}}>
          <Col xs={{offset:1, span: 2}}>
              <a  href="/movies" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Movies</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Stream</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Events</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Plays</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Sports</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Activities</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Buzz</a>
          </Col>
          <Col xs={4}>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>ListYourShow</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Corporates</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Offers</a>
              <a style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Gift Cards</a>
          </Col>
        </Container>
    </div>
  );
}

export default Header;