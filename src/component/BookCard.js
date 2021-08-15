import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import  {Container,Row,Col}  from 'react-bootstrap';
// import {bookData} from './Main';

export class BookCard extends Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                 <Container>
                 <Row>
                            <Col lg={4} xs="auto">
                                <BookCard />
                                <Card style={{ width: '18rem', height: '500px', marginBlock: '2rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={this.props.image} alt='book img' />
                                        <br />
                                        <Card.Title>{this.props.title}</Card.Title>
                                        <Card.Text>
                                            {this.props.author}
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
