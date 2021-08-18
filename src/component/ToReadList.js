import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";


export class ToReadList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.auth0.user.email,
            
            // flag:true
        }
    }

    deletingBook = (bookId) => {
        console.log(this.props.toReadBooks);

        axios.delete(`http://localhost:3001/book/${bookId}?email=${this.state.email}`).then(res=>{
         
            console.log(res.data);
            if (res.data === 'success') {
                // once the item is deleted on the backend
                // create a temp var that will contain all of the cats except the cat the got deleted
                // then update the state to re-render
        
                let tempBookObj = this.props.toReadBooks.filter(item => item._id !== bookId);
                // this.props.toReadBooks=tempBookObj;
                console.log(tempBookObj);
                // this.setState({
                //     toReadBooks: tempBookObj
                // });
              }
            }).catch(error => alert(error))
        }
    render() {
        return (
            <div style={{ margin: '20px 10% 20px 10%' }}>
                <Row xs={1} md={3} className="g-4">
                    {this.props.toReadBooks.map((item) => {
                        return (<Col>
                            <Card >
                                <Card.Body >
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Title style={{ fontSize: '30px' }}>{item.author}</Card.Title>
                                    <Button onClick={() => this.deletingBook(item._id)} variant="secondary">Remove</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

export default withAuth0(ToReadList);