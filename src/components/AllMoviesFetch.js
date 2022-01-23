import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import axios from "axios";
import {useState, useEffect} from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function AllMoviesFetch() {
    const [data, setData] = useState([]);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    useEffect(async () => {
        try {
            const response = await axios.get('https://bms-backend-4.herokuapp.com/movies');
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, []);

    function MouseOver(event) {
        event.target.style.color = 'red';
    }

    function MouseOut(event){
        event.target.style.color="";
    }

    return (
        <div>
            <Container fluid style={{padding:"5%", background:"#f5f5f5"}}>
                <Row>
                    <Col xs={5} md={3}>
                        <Container>
                            <h2 style={{fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>Filters</h2>
                            <Container>
                                <Button onClick={() => setOpen1(!open1)} variant="outline-secondary" onMouseOver={MouseOver} onMouseOut={MouseOut} style={{marginTop: "6%",border:"none",background:"white",width:"100%",textAlign:"left"}} aria-controls="example-collapse-text1" aria-expanded={open1}>
                                    <FaAngleDown style={{marginRight:"6%"}}/>Languages
                                </Button>

                                <Collapse in={open1}>
                                    <div id="example-collapse-text1" >
                                        <div className="card card-body">
                                            <Container style={{paddingTop: "0.7%",border:"none"}} >
                                                <Row>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>English</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Hindi</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Marathi</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Telugu</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Kannada</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </Collapse>
                            </Container>

                            <Container>
                                <Button onClick={() => setOpen2(!open2)} variant="outline-secondary" onMouseOver={MouseOver} onMouseOut={MouseOut} style={{marginTop: "6%",border:"none",background:"white",width:"100%",textAlign:"left"}} aria-controls="example-collapse-text2" aria-expanded={open2}>
                                    <FaAngleDown style={{marginRight:"6%"}}/>Genres
                                </Button>

                                <Collapse in={open2}>
                                    <div id="example-collapse-text2" >
                                        <div className="card card-body">
                                            <Container style={{paddingTop: "0.7%",border:"none"}} >
                                                <Row>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Comedy</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Drama</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Action</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Romantic</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Sci-Fi</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Thriller</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>Adventure</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </Collapse>
                            </Container>

                            <Container>
                                <Button onClick={() => setOpen3(!open3)} variant="outline-secondary" onMouseOver={MouseOver} onMouseOut={MouseOut} style={{marginTop: "6%",border:"none",background:"white",width:"100%",textAlign:"left"}} aria-controls="example-collapse-text3" aria-expanded={open3}>
                                    <FaAngleDown style={{marginRight:"6%"}}/>Format
                                </Button>

                                <Collapse in={open3}>
                                    <div id="example-collapse-text3" >
                                        <div className="card card-body">
                                            <Container style={{paddingTop: "0.7%",border:"none"}} >
                                                <Row>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>2D</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>3D</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>4DX 3D</Button>
                                                    </Col>
                                                    <Col style={{paddingRight:"0px",paddingBottom:"2%",paddingLeft:"0px"}}>
                                                        <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",background:"white"}}>IMAX 3D</Button>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                </Collapse>
                            </Container>

                        </Container>
                    </Col>
                    <Col xs={13} md={9}>
                        <Container>
                            <h2 style={{fontFamily: "Roboto", fontSize: "24px", fontWeight: "700"}}>Movies in Pune</h2>
                            <Container style={{marginTop: "3%",marginBottom:"4%"}} >
                                <Form>
                                    <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",borderRadius:"25px",marginRight:"0.5%",background:"white"}}>English</Button>
                                    <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",borderRadius:"25px",marginRight:"0.5%",background:"white"}}>Hindi</Button>
                                    <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",borderRadius:"25px",marginRight:"0.5%",background:"white"}}>Marathi</Button>
                                    <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",borderRadius:"25px",marginRight:"0.5%",background:"white"}}>Telugu</Button>
                                    <Button variant="outline-secondary" style={{color: "red",fontSize:"13px",borderRadius:"25px",marginRight:"0.5%",background:"white"}}>Kannada</Button>
                                </Form>
                            </Container>
                            <Row style={{textAlign:"left"}}>
                                {data.map((mov) =>
                                    <Col id={mov._id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                                        <Card style={{cursor:"pointer",border:"none"}} onClick={()=> window.location.href="/movies/"+mov._id }>
                                            <Card.Img variant="top" src={mov.imageurl} />
                                            <Card.Footer style={{backgroundColor:"black",borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px", padding:"0.25rem 0.75rem"}} >
                                                <FaHeart style={{color:"red"}} />
                                                <small className="text-white">    {mov.likes} %</small>
                                                <small className="text-white">    {mov.votes}k votes</small>
                                            </Card.Footer>
                                            <Card.Body style={{background:"#f5f5f5"}}>
                                            <Card.Title>{mov.title}</Card.Title>
                                            <Card.Text>{mov.genres}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllMoviesFetch;