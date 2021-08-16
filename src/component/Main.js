import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
// import { withAuth0 } from '@auth0/auth0-react';
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import '../style/Header.css';
import Carousel from 'react-bootstrap/Carousel';
import BookCard from './BookCard';
import SelectedBook from './SelectedBook';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageScroller from 'react-image-scroller';
import React, { Component } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import '../style/Main.css';
require('dotenv').config();

export class Main extends Component {
    constructor(props) {
        super(props);


        this.state = {
            show: false,
            title: "",
            description: '',
            image: '',
            author:'',
            booksData: [],
            showError: false,
            /////////////////////
            fiction: [],
            nonFiction: [],
            kids: [],
            classic: [],
            quote: []
        };

    }

    showModel = () => {
        this.setState({
            show: true,
        });
        console.log("click");
    }

    closeModel = () => {
        this.setState({
            show: false,
        });
    }


    // this.addingData();

    bookMOdel = (title, description, image,author) => {
        this.setState({
            title: title,
            description: description,
            image: image,
            author:author,
            show: true,

        })

    }

    componentDidMount = () => {

        const server = 'http://localhost:3001'

        // console.log(` server component did mount : ${server}`)


        axios.get(`${server}/book1`)
            .then((result) => {
                this.setState({
                    fiction: result.data
                })
            })

        // console.log(this.state.fiction);
        /////////////////////NONFICTION/////////////////////////////////////
        const server2 = 'http://localhost:3001'

        // console.log(` server component did mount : ${server2}`)


        axios.get(`${server2}/book2`)
            .then((result) => {
                this.setState({
                    nonFiction: result.data
                })
            })

        // console.log(this.state.nonFiction);
        /////////////////////KIDS////////////////////////////
        const server3 = 'http://localhost:3001'

        // console.log(` server component did mount : ${server3}`)


        axios.get(`${server3}/book3`)
            .then((result) => {
                this.setState({
                    kids: result.data
                })
            })

        // console.log(this.state.kids);

        //////////////////////CLASSIC///////////////////////
        const server4 = 'http://localhost:3001'

        // console.log(` server component did mount : ${server4}`)


        axios.get(`${server4}/book4`)
            .then((result) => {
                this.setState({
                    classic: result.data
                })
            })

        // console.log(this.state.classic);

        ////////////////////////QUOTE////////////////////////////////
        const server5 = 'http://localhost:3001'

        // console.log(` server component did mount : ${server5}`)


        axios.get(`${server5}/quote`)
            .then((result) => {
                this.setState({
                    quote: result.data
                })
            })

        // console.log(this.state.quote);

    }

    submittingForm = async (e) => {
        e.preventDefault();
        try {


            const bookTitle = e.target.bookName.value;
            // console.log(bookTitle);
            const bookResponse = await axios.get(`${process.env.REACT_APP_SERVER}/book?q=${bookTitle}`);
            // console.log(`${process.env.REACT_APP_SERVER}/book?q=${bookTitle}`);
            console.log(bookResponse.data);
            this.setState({

                booksData: bookResponse.data
            });
        }



        catch (error) {


            this.setState({
                showError: true,
            });
            alert('NO AVAILABLE DATA');
        }

    }

    // addingData = (e) => {
    //     const selectedImage = this.state.booksData.image;
    //     const selectedAuthor = this.state.booksData.author;
    //     <SelectedCard
    //         addingData={this.addingData}
    //     />

    // }
    render() {
        return (
            <div>
                <Carousel >

                    <Carousel.Item>

                        <img class="img"
                         height='460px'
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
                         height='460px'
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
                        height='460px'
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
                         height='460px'
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
                    <label>BOOK NAME </label>

                    <input style={{ marginTop: "10px", color: "black" }} name="bookName" type="text" />
                    {/* <br></br>
          <br></br> */}
                    <input style={{ margin: "10px", color: "#0D0000" }} type="submit" value=" &#x1F50E;&#xFE0E; " />
                </form>
                <Container>
                    <Row xs={1}>
                        {this.state.booksData.map((elem) => {
                            return (
                                <Col lg={4} xs="auto">
                                    <BookCard
                                        
                                        model={this.bookMOdel}
                                        bookInfo={elem}

                                    />

                                </Col>
                            )
                        })
                        }
                    </Row>

                </Container>



                {/* } */}
                <div>
                <br></br>
                    <h> FICTION 🐉 </h>
                    <ImageScroller style={{ margin: '2rem' }}>

                        {this.state.fiction.map(item =>

                            <img style={{ marginRight: '2rem' }} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>
                    <h> NON FICTION 🔖 </h>
                    <ImageScroller style={{ margin: '2rem' }}>

                        {this.state.nonFiction.map(item =>

                            <img style={{ marginRight: '2rem' }} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>
                    <h> CLASSIC 🖋️ </h>
                    <ImageScroller style={{ margin: '2rem' }}>

                        {this.state.classic.map(item =>

                            <img style={{ marginRight: '2rem' }} src={item.image} />


                        )}
                    </ImageScroller>

                </div>

                <div>


                    <h> KIDS 🧒👧 </h>
                    <ImageScroller style={{ margin: '2rem' }}>

                        {this.state.kids.map(item =>

                            <img style={{ marginRight: '2rem' }} src={item.image} />


                        )}
                    </ImageScroller>

                    <SelectedBook
                        showState={this.state.show}
                        close={this.closeModel}
                        title={this.state.title}
                        description={this.state.description}
                        image={this.state.image}
                        author={this.state.author}

                    />
                </div>

            </div>
        )
    }
}

export default Main;

