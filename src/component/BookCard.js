import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import  {Container,Row,Col}  from 'react-bootstrap';
// import {bookData} from './Main';

export class BookCard extends Component {
    
    render() {
        return (
            <div>
                 <Container>
                 <Row>
                            <Col lg={4} xs="auto">
                                <Card style={{ width: '18rem', height: '500px', marginBlock: '2rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={this.props.bookInfo.image} alt='book img' />
                                        <br />
                                        <Card.Title>{this.props.bookInfo.title}</Card.Title>
                                        <Card.Text>
                                            {this.props.bookInfo.author}
                                        </Card.Text>

                                    </Card.Body>
                                    {
                                        <button >Add to Bookshelf</button> 

                                    }
                                </Card>
                            </Col>
                      
                    </Row>
                </Container>

            </div>
        )
    }
}

export default BookCard
