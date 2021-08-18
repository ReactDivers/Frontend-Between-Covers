import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import Alert from 'react-bootstrap/Alert';

// import {bookData} from './Main';
import axios from "axios";
const SERVER_URL = process.env.REACT_APP_SERVER;
export class BookCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toReadBooks: [],
            email: this.props.auth0.user.email,
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
                author: this.props.bookInfo.author[0],
                description: this.props.bookInfo.description,
                title: this.props.bookInfo.title

            }
        }
     

        // #############################################################3
        // axios.get(`${process.env.REACT_APP_SERVER}/user?email=${this.props.auth0.user.email}`).then(res => {
        // console.log(this.props.auth0.user.email);
        // console.log(res.data);
        // // let flag = true;
        // for (let i = 0; i < res.data[0].booksAdded.length; i++) {
        //     if (res.data[0].booksAdded[i].id === this.props.id) {

        //         // flag = false;
        //         break;
        //     }
        // }
        // if (flag) {

        // ###########################################################
        console.log(bodyReq);
        axios.post(`${process.env.REACT_APP_SERVER}/book`, bodyReq).then(res => {

            this.state.toReadBooks.push(res.data);
            this.setState({
                toReadBooks: this.state.toReadBooks
            });

        })

        // ##################################################################3


        // }
        // });

    }
    // deletingBook = (bookId) => {
    //     console.log(bookId)

    //     axios.delete(`http://localhost:3001/book/${bookId}?email=${this.state.email}`).then(res=>{

    //         console.log(res.data);
    //         if (res.data === 'success') {
    //             // once the item is deleted on the backend
    //             // create a temp var that will contain all of the cats except the cat the got deleted
    //             // then update the state to re-render

    //             let tempBookObj = this.props.toReadBooks.filter(item => item._id !== bookId);
    //             // this.props.toReadBooks=tempBookObj;
    //             console.log(tempBookObj);
    //             // this.setState({
    //             //     toReadBooks: tempBookObj
    //             // });
    //           }
    //         }).catch(error => alert(error))
    //     }



    bookModel = () => {
        this.props.model(this.props.bookInfo.title, this.props.bookInfo.description, this.props.bookInfo.image, this.props.bookInfo.author)
    }


    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={3} xs="auto" style={{ marginLeft: '3rem' }}>
                            <Card style={{ width: '13rem', height: '21rem', marginBlock: '2rem' }}>
                                <Card.Body style={{ backgroundColor: '#d8d7df' }}>
                                    <Card.Img style={{ width: '10rem', height: '14rem', marginBottom: '1rem' }} variant="top" src={this.props.bookInfo.image} alt='book img' onClick={this.bookModel} />
                                    <br />
                                    {/* <Card.Title>{this.props.bookInfo.title}</Card.Title> */}
                                    <Card.Text style={{ fontSize: '15px', textAlign: "center", fontWeight: "bold" }}>
                                        {this.props.bookInfo.author}
                                    </Card.Text>
                                    {
                                        <button style={{ marginRight: "6px", backgroundColor: "#dc3545",marginTop:'5%', width: '60%',color:'white',height:'11%',  borderRadius:'4px' , fontWeight:'bold', borderBlockStyle: "none" }} onClick={(e) => this.addingBook(e)} >Add </button>

                                    }

                                </Card.Body>
                                {/* <button onClick={() => this.deletingBook(this.props.bookInfo._id)}>Remove</button> */}
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </div>
        )
    }
}

export default withAuth0(BookCard);
