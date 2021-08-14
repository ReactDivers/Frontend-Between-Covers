import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import  {Container,Row,Col}  from 'react-bootstrap';

export class SelectedCard extends Component {
    
    render() {
        return (
            <div>
                 <Container>
                    <Row>
                        {/* {this.state.booksData.map((item) => ( */}
                            <Col lg={4} xs="auto">
                                <Card style={{ width: '18rem', height: '500px', marginBlock:'2rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={this.props.selectedImage} alt='book img' />
                                        <br />
                                        {/* <Card.Title>{item.title}</Card.Title> */}
                                        <Card.Text>
                                            {this.props.selectedAuthor}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        {/* // ))
                        // } */}
                    </Row>

                </Container>

            </div>
        )
    }
}

export default SelectedCard
