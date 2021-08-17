import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
// import {bookData} from './Main';
import axios from "axios";
const SERVER_URL=process.env.REACT_APP_SERVER;
export class BookCard extends Component {
    constructor(props){
        super(props);
        this.state={
            toReadBooks:[],
            email:this.props.auth0.user.email,
            // flag:true
        }
    }
    // addingBook(e){
    //     axios.get(`${SERVER_URL}/user?email=${this.state.email}`).then(response => {
    //         // console.log(response.data[0].booksAdded)
    //         this.setState({
    //             toReadBooks: response.data[0].booksAdded,
    //             flag: false
    //         })
    //     }).catch(error => console.log(error))
       

    // }
    // componentDidMount (){
    //     axios.post(`${SERVER_URL}/book`).then(response => {
    //         // console.log(response.data[0].booksAdded)
    //         this.setState({
    //             toReadBooks: response.data[0].booksAdded,
    //             // flag: false
    //         })
    //     }).catch(error => console.log(error))
    // }
    addingBook = (e) => {
        e.preventDefault();
       
        const bodyReq = {
            email: this.props.auth0.user.email,
            book: {
                image: this.props.bookInfo.image,
                author: this.props.bookInfo.author,
                description: this.props.bookInfo.description
            }
        }
        axios.get(`${process.env.REACT_APP_SERVER}/user?email=${this.props.auth0.user.email}`).then(res => {
            console.log(this.props.auth0.user.email);
            // let flag = true;
            for (let i = 0; i < res.data[0].booksAdded.length; i++) {
                if (res.data[0].booksAdded[i].id === this.props.id) {

                    // flag = false;
                    // break;
                }
            }
            // if (flag) {
                axios.post(`${process.env.REACT_APP_SERVER}/book`, bodyReq);
                this.state.toReadBooks.push(res.data);
                this.setState({
                    toReadBooks:this.state.toReadBooks
                });
                
               console.log(axios.post(`${process.env.REACT_APP_SERVER}/book`, bodyReq));
            // }
        });
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
                                    <button onClick={(e) => this.addingBook(e)} >Add to Bookshelf</button>

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
