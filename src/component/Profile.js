import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Component } from "react";
import axios from 'axios';

import ToReadList from './ToReadList';
import '../style/Profile.css';
// const userEmail = this.props.auth0.user.email;

const SERVER_URL = process.env.REACT_APP_SERVER;

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toReadBooks: [],
      // email: this.props.auth0.user.email,
      // flag: true,
      // displayAddModal: false,
      // displayUpdateModal: false,
    }
  }
  getToReadList = async (e) => {
    e.preventDefault();
    await axios.get(`${SERVER_URL}/user?email=${this.state.email}`).then(response => {
      console.log(response.data[0].booksAdded)
      this.setState({
        toReadBooks: response.data[0].booksAdded,
        flag: false
      })
    }).catch(error => console.log(error))
  }

  // handelAddBookForm = (e) => {

  //   e.preventDefault();
  //   this.handelDisplayModal(); // hide the modal after form submission

  //   const body = {
  //     email: this.props.auth0.user.email, // we are getting the email of the user from auth0
  //     title: e.target.catName.value,
  //     cat_breed: e.target.catBreed.value,

  //   };

  //   axios.post(`${process.env.REACT_APP_SERVER}/review, body ? email =${userEmail}`).then(axiosResponse => {
  //     this.state.toReadBooks.push(axiosResponse.data);
  //     this.setState({
  //       toReadBooks: this.state.toReadBooks
  //     });
  //   }).catch(error => alert(error));
  // }

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      isAuthenticated && (
        // <div>
        //     <Card style={{ width: '18rem', height: '500px' }}>
        //         <Card.Body>
        //             <Card.Img variant="top" src={user.picture} alt={user.name} />
        //             <br />
        //             <Card.Title>{user.name}</Card.Title>
        //             <Card.Text>
        //                 {user.email}
        //             </Card.Text>

        //         </Card.Body>
        //     </Card>
        //     <h2>
        //         Your BOOKSHELF
        //     </h2>
        //     <ToReadList 
        //     toReadBooks={this.state.toReadBooks}
        //     />
        // </div>

        <div className="App justify-content-center">
          <br />
          <Container >
            <Row >
              <Col xs={12} md={12}>
                <Image src={user.picture} alt={user.name} roundedCircle />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}> <h6>  {user.name}</h6></Col>
              <Col xs={6} md={6}><h6>{user.email}</h6></Col>
            </Row>
            <Row>
              <Col md={12}>
                {/* <Content /> */}
              </Col>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col md={12}>
                <h2>
                  YOUR BOOKSHELF
                </h2>
                <ToReadList
                  toReadBooks={this.state.toReadBooks}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )
    )
  }
}

export default withAuth0(Profile);

