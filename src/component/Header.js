import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import '../style/Header.css';
import Carousel from 'react-bootstrap/Carousel';


const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    paddingLeft: "43rem",
    paddingRight: "20px",
    fontFamily: "Arial",

};
const imgstyle = {

    paddingRight: "20px"
};
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <img src='///' alt="logo" ></img>
                    <Navbar.Brand> Between Covers</Navbar.Brand>
                    <Link to="/" style={mystyle}>Home</Link>
                    {this.props.auth0.isAuthenticated&& <Link to="/profile" style={imgstyle}>Profile</Link>}
                    <Link to="/aboutus" style={imgstyle}>About Us </Link>
                    {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Navbar>
                <br></br>
                {/* <Carousel>
                    <Carousel.Item>
                        <img class="img"
                            className="d-block w-100"
                            src="http://babblingbooks.com.au/wp-content/uploads/2018/12/Best-books-blog-700x467.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                </Carousel> */}

                {/* <form style={{ marginTop: "10px", color: "white", backgroundColor: "#0D0000" }}  >
                    <br></br>
                    <label>BOOK NAME</label>
                    <input style={{ marginTop: "10px", color: "white" }} name="location" type="text" />
                    <input style={{ margin: "10px", color: "#0D0000" }} type="submit" value=" SEARCH " />
                </form> */}
                <br></br>
                <br></br>
            </div >
        )
    }
}

export default withAuth0(Header);
