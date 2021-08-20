import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Component } from "react";
import axios from 'axios';
import Content from './Content';
import Button from 'react-bootstrap/Button';

import ToReadList from './ToReadList';
import '../style/Profile.css';
import Card from 'react-bootstrap/Card';



const SERVER_URL = process.env.REACT_APP_SERVER;

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toReadBooks: [],
      email: this.props.auth0.user.email,
      flag: true
    }
  }
  componentDidMount() {
    axios.get(`${SERVER_URL}/user?email=${this.state.email}`).then(response => {
      // console.log(response.data[0].booksAdded)
      this.setState({
        toReadBooks: response.data[0].booksAdded,
        flag: false
      })
    }).catch(error => console.log(error))
  }

  deletingBook = (bookId) => {
    console.log(this.state.toReadBooks);

    axios.delete(`http://localhost:3001/book/${bookId}?email=${this.state.email}`).then(res => {

      console.log(res.data);
      if (res.data.nModified !== 0) {
        // once the item is deleted on the backend
        // create a temp var that will contain all of the cats except the cat the got deleted
        // then update the state to re-render

        let tempBookObj = this.state.toReadBooks.filter(item => item._id !== bookId);
        // this.state.toReadBooks=tempBookObj;
        console.log(tempBookObj);
        this.setState({
          toReadBooks: tempBookObj
        });
      }
    }).catch(error => alert(error))
  }

  render() {
    // console.log(this.state);
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
              <Col xs={6} md={6}> <h6 style={{color:"rgb(81, 77, 110)"}}>  {user.name}</h6></Col>
              <Col xs={6} md={6}><h6 style={{color:"rgb(81, 77, 110)"}}>{user.email}</h6></Col>
            </Row>
            <Row>
              <Col md={12}>
                {/* <Content /> */}
              </Col>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col md={12}>
                <h2 style={{color:"rgb(81, 77, 110)",fontSize:"18px",fontWeight:'bold',marginBottom:'2%'}}>
                  YOUR BOOKSHELF
                </h2>

              </Col>
            </Row>
          </Container>
          {isAuthenticated &&
            <div style={{ margin: '20px 20px 20px 10%' }}>
              <Row xs={1} md={4} className="g-4">
                {this.state.toReadBooks.map((item) => {
                  return (<Col>
                    <Card style={{ width: '13rem',height:'21rem' }} >
                      <Card.Body style={{backgroundColor:'#d8d7df'}}>
                        <Card.Img style={{ width: '10rem',height:'14rem',marginBottom:'1rem' }} variant="top" src={item.image} />
                        <Card.Title style={{ fontSize: '14px',textAlign:"center" }}>{item.author}</Card.Title>
                        <Button style={{marginLeft:"24%",backgroundColor:"#dc3545", borderBlockStyle:"none"}} onClick={() => this.deletingBook(item._id)} variant="secondary">Remove</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  )
                })}
              </Row>
            </div>
          }
        </div>

      )
    )
  }
}

export default withAuth0(Profile);

