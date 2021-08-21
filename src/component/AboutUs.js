import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import "./CARD/Card.css";
import Rawan from './assets/Rawan.jpg';
import Sara from './assets/Sara.jpg';
import Nada from './assets/nada.jpeg';
import Leen from './assets/Leen.jpg';
import linkedin from './assets/linkedin.png';



import { Container, Row, Col } from 'react-bootstrap';


export class AboutUs extends Component {

    render() {
        return (
            <div>
                <Container style={{ textAlign: 'center' }}>
                    <Row>
                        <Col lg={6} xs="auto">
                            <Card className="Card-container" style={{ width: '18rem', height: '450px', marginBlock: '5rem', marginLeft: '10rem' }}>
                                <Card.Body style={{ backgroundColor: '#b6b2c5' }}>
                                    <Card.Img variant="top" src={Rawan} alt="rawan\'s pic" />
                                    <br />
                                    <Card.Title style={{ color: 'white', marginTop:'1rem' }} >Rawan Alazazi</Card.Title>
                                    <Card.Text style={{ color: 'white' }}>
                                        LEADER & DEVELOPER
                                    </Card.Text>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src={linkedin} height='40px' width='40px' marginBlock='10rem' alt='img' />
                                        <a href='https://www.linkedin.com/in/rawan-alazazi/'> LinkedIn</a>


                                    </button>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png' alt='img' height='30px' width='45px' marginBlock='10rem' />
                                        <a href='https://github.com/rawanazazi12'> GitHub</a>
                                    </button>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Col lg={6} xs="auto">
                            <Card className="Card-container" style={{ width: '18rem', height: '450px', marginBlock: '5rem', marginLeft: '4rem' }}>
                                <Card.Body style={{ backgroundColor: '#b6b2c5' }}>
                                    <Card.Img variant="top" src={Sara} alt="sara\'s pic" />
                                    <br />
                                    <Card.Title style={{ color: 'white', marginTop:'1rem' }} >Sarah Alhilo</Card.Title>
                                    <Card.Text style={{ color: 'white' }}>
                                        DEVELOPER
                                    </Card.Text>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src={linkedin} height='40px' width='40px' marginBlock='10rem' alt='img' />
                                        <a href='https://github.com/sarah-hillo'> LinkedIn</a>


                                    </button>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png' alt='img' height='30px' width='45px' marginBlock='10rem' />
                                        <a href='https://github.com/sarah-hillo'> GitHub</a>
                                    </button>

                                </Card.Body>




                            </Card>
                        </Col>
                        <Col lg={6} xs="auto">
                            <Card className="Card-container" style={{ width: '18rem', height: '450px', marginRight: '5rem', marginLeft: '10rem', marginButtom: '4rem' }}>
                                <Card.Body style={{ backgroundColor: '#b6b2c5' }}>
                                    <Card.Img height='250px' width='150px' variant="top" src={Nada} alt="nada\'s pic" />
                                    <br />
                                    <Card.Title style={{ color: 'white', marginTop:'1rem' }} >Nada Al-abdullah</Card.Title>
                                    <Card.Text style={{ color: 'white' }} >
                                        DEVELOPER
                                    </Card.Text>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src={linkedin} height='40px' width='40px' marginBlock='10rem' alt='img' />
                                        <a href='https://github.com/Nada0795'> LinkedIn</a>


                                    </button>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png' alt='img' height='30px' width='45px' marginBlock='10rem' />
                                        <a href='https://github.com/Nada0795'> GitHub</a>
                                    </button>

                                </Card.Body>

                            </Card>
                        </Col>
                        <Col lg={6} xs="auto">
                            <Card className="Card-container" style={{ width: '18rem', height: '450px', marginRight: '5rem', marginLeft: '4rem', marginButtom: '4rem' }}>
                                <Card.Body style={{ backgroundColor: '#b6b2c5' }} >
                                    <Card.Img variant="top" src={Leen} />
                                    <br />
                                    <Card.Title style={{ color: 'white', marginTop:'1rem' }} >Leen Duafi</Card.Title>
                                    <Card.Text style={{ color: 'white' }}>
                                        DEVELOPER
                                    </Card.Text>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src={linkedin} height='40px' width='40px' marginBlock='10rem' alt='img' />
                                        <a href='https://github.com/leen-duafi'> LinkedIn</a>


                                    </button>
                                    <button class='btn button' style={{ textAlign: 'center' }}>
                                        <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png' alt='img' height='30px' width='45px' marginBlock='10rem' />
                                        <a href='https://github.com/leen-duafi'> GitHub</a>
                                    </button>

                                </Card.Body>

                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div >
        )
    }
}

export default AboutUs
