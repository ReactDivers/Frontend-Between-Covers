import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
// import { withAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import '../style/Header.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import SelectedCard from './SelectedCard';

import React, { Component } from 'react'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
require('dotenv').config();

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData: [],
            showError: false,
        }
        this.addingData();
    }

    submittingForm = async (e) => {
        e.preventDefault();
        try {
            const bookTitle = e.target.bookName.value;
            const bookResponse = await axios.get(`${process.env.REACT_APP_SERVER}/book?q=${bookTitle}`);
            this.setState({
                booksData: bookResponse.data,
            });
        }

        catch (error) {

            this.setState({
                showError: true,
            });
            alert('NO AVAILABLE DATA');
        }

    }

    addingData = (e) => {
        const selectedImage = this.state.booksData.image;
        const selectedAuthor = this.state.booksData.author;
        <SelectedCard
            addingData={this.addingData}
        />

    }
    render() {
        return (
            <div>
                <Carousel style={{ width: '80rem' }}>
                    <Carousel.Item>
                        <img class="img"
                            className="d-block w-100"
                            src="http://babblingbooks.com.au/wp-content/uploads/2018/12/Best-books-blog-700x467.jpg"
                            alt="First slide"
                        />
                        {/* <img src='https://books.google.com/books/content?id=RsryvkEA81QC&printsec=frontcover&img=1&zoom=1&source=gbs_api'/>
                        <img src='https://books.google.com/books/content?id=RsryvkEA81QC&printsec=frontcover&img=1&zoom=1&source=gbs_api'/>
                        <img src='https://books.google.com/books/content?id=RsryvkEA81QC&printsec=frontcover&img=1&zoom=1&source=gbs_api'/> */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Between The Pages Of A Book Is A Lovely Place To BE</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="img"
                            className="d-block w-100"
                            src="https://statsandr.com/blog/2020-04-26-a-package-to-download-free-springer-books-during-covid-19-quarantine_files/A%20package%20to%20download%20free%20Springer%20books%20during%20Covid-19%20quarantine.jpeg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="img"
                            className="d-block w-100"
                            src="http://babblingbooks.com.au/wp-content/uploads/2018/12/Blog-2018-Wrap-up-700x467.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img class="img"
                            className="d-block w-100"
                            src="https://cdn.theatlantic.com/media/mt/food/assets_c/2011/05/kindle-charles-dickens-1-thumb-600x300-51010.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <form onSubmit={this.submittingForm} style={{ marginTop: "10px", color: "white", backgroundColor: "#0D0000" }}  >
                    <br></br>
                    <label>BOOK NAME</label>
                    <input style={{ marginTop: "10px", color: "black" }} name="bookName" type="text" />
                    {/* <br></br>
          <br></br> */}
                    <input style={{ margin: "10px", color: "#0D0000" }} type="submit" value=" SEARCH " />
                </form>
                <Container>
                    <Row>
                        {this.state.booksData.map((item) => (
                            <Col lg={4} xs="auto">
                                <Card style={{ width: '18rem', height: '500px', marginBlock: '2rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={item.image} alt='book img' />
                                        <br />
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.author}
                                        </Card.Text>

                                    </Card.Body>
                                    {
                                        <button onClick={(e) => this.addingData(e)}>Add to Bookshelf</button> 

                                    }
                                </Card>
                            </Col>
                        ))
                        }
                    </Row>

                </Container>





            </div>
        )
    }
}

export default Main;

