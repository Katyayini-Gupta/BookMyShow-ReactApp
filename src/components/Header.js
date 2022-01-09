import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <div >
      <Navbar style={{background: "rgb(51, 53, 69)"}} expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">BookMyShow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" style={{display: "flex", justifyContent: "space-around", gap: "35%"}}>
            <input type = "search" style={{background:"white", border: "none", borderRadius: "5px", padding: "0.6%", width:"50%"}} placeholder = "Search for Movies, Events, Plays, Sports and Activities" />
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            <NavDropdown title="Pune" id="basic-nav-dropdown"></NavDropdown>
            <Nav.Link href="/register"><Button variant="danger" style={{fontSize:"11px"}}>Sign In</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        <Container fluid style={{background: "rgb(31, 37, 51)", color:"white", display:"flex", justifyContent:"space-between",padding:"10px"}}>
          <Col xs={{offset:1, span: 2}}>
              <a href="/movies" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Movies</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Stream</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Events</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Plays</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Sports</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Activities</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Buzz</a>
          </Col>
          <Col xs={4}>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>ListYourShow</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Corporates</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Offers</a>
              <a href="" style={{paddingRight:"10px", textDecoration: "none", color: "rgb(204, 204, 204)"}}>Gift Cards</a>
          </Col>
        </Container>
    </div>
  );
}

export default Header;