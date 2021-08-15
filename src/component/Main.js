import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
// import { withAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import '../style/Header.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageScroller from 'react-image-scroller';
import React, { Component } from 'react'
import axios from 'axios';
require('dotenv').config();

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData: [],
            showError: false,
            /////////////////////
            fiction: [],
            nonFiction: [],
            kids: [],
            classic: [],
            quote :[],


        }
    }


    componentDidMount = () => {

        const server = 'http://localhost:3001'

        console.log(` server component did mount : ${server}`)


        axios.get(`${server}/book1`)
            .then((result) => {
                this.setState({
                    fiction: result.data
                })
            })

        console.log(this.state.fiction);
        /////////////////////NONFICTION/////////////////////////////////////
        const server2 = 'http://localhost:3001'

        console.log(` server component did mount : ${server2}`)


        axios.get(`${server2}/book2`)
            .then((result) => {
                this.setState({
                    nonFiction: result.data
                })
            })

        console.log(this.state.nonFiction);
        /////////////////////KIDS////////////////////////////
        const server3 = 'http://localhost:3001'

        console.log(` server component did mount : ${server3}`)


        axios.get(`${server3}/book3`)
            .then((result) => {
                this.setState({
                    kids: result.data
                })
            })

        console.log(this.state.kids);

        //////////////////////CLASSIC///////////////////////
        const server4 = 'http://localhost:3001'

        console.log(` server component did mount : ${server4}`)


        axios.get(`${server4}/book4`)
            .then((result) => {
                this.setState({
                    classic: result.data
                })
            })

        console.log(this.state.classic);

////////////////////////QUOTE////////////////////////////////
        const server5 = 'http://localhost:3001'

        console.log(` server component did mount : ${server5}`)


        axios.get(`${server5}/quote`)
            .then((result) => {
                this.setState({
                    quote: result.data
                })
            })

        console.log(this.state.quote);

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
    render() {
        return (
            <div>
                <Carousel>
               
                    <Carousel.Item>
                        
                        <img class="img"
                            className="d-block w-100"
                            src="http://babblingbooks.com.au/wp-content/uploads/2018/12/Best-books-blog-700x467.jpg"
                            alt="First slide"
                        />
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

                {

                    this.state.booksData.map(item => {
                        return (
                            <Card style={{ width: '18rem', height: '500px' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={item.image} alt='book img' />
                                    <br />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        )
                    })

                }
                <div>
                    <h> FICTION 🐉 </h>
                    <ImageScroller style={{margin:'2rem'}}>

                        {this.state.fiction.map(item =>

                            <img style={{marginRight:'2rem'}} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>
                    <h> NON FICTION 🔖 </h>
                    <ImageScroller style={{margin:'2rem'}}>

                        {this.state.nonFiction.map(item =>

                            <img  style={{marginRight:'2rem'}} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>
                    <h> CLASSIC 🖋️ </h>
                    <ImageScroller style={{margin:'2rem'}}>

                        {this.state.classic.map(item =>

                            <img  style={{marginRight:'2rem'}} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>


                    <h> KIDS 🧒👧 </h>
                    <ImageScroller style={{margin:'2rem'}}>

                        {this.state.kids.map(item =>

                            <img  style={{marginRight:'2rem'}} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

            </div>
        )
    }
}

export default Main

