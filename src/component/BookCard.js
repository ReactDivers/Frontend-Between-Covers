import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
// import {bookData} from './Main';
import axios from "axios";

export class BookCard extends Component {

    addingBook = (e) => {
        e.preventDefault();
        const flag = true;
        const bodyReq = {
            email: this.props.withAuth0.user.email,
            book: {
                image: this.props.bookInfo.image,
                author: this.props.bookInfo.author,
                id: this.props.id
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER}/user?email=${this.props.withAuth0.user.email}`).then(res => {
            console.log(this.props.withAuth0.user.email);
            for (let i = 0; i < res.data.addedBooks.length; i++) {
                if (res.data.addedBooks[i].id === this.props.id) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                axios.post(`${process.env.REACT_APP_SERVER}/book`, bodyReq)
            }
        })
    }

    bookModel = () => {
        this.props.model(this.props.bookInfo.title, this.props.bookInfo.description, this.props.bookInfo.image, this.props.bookInfo.author)
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={4} xs="auto">
                            <Card style={{ width: '18rem', height: '500px', marginBlock: '2rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={this.props.bookInfo.image} alt='book img' onClick={this.bookModel} />
                                    <br />
                                    <Card.Title>{this.props.bookInfo.title}</Card.Title>
                                    <Card.Text>
                                        {this.props.bookInfo.author}
                                    </Card.Text>

                                </Card.Body>
                                {
                                    <button onSubmit={(e) => this.addingBook(e)} >Add to Bookshelf</button>

                                }
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </div>
        )
    }
}

export default withAuth0(BookCard);
