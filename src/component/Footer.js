import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    paddingLeft: "47rem",
    paddingRight: "20px",
    fontFamily: "Arial",

};
const imgstyle = {

    paddingRight: "20px"
};

 class Footer extends Component {
    render() {
        return (
            <div>
                 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    {/* <img src='///' alt="logo" ></img> */}
                    {/* <Navbar.Brand> Between Covers</Navbar.Brand> */}
                    {/* <Link to="/" style={mystyle}>BOOK SHELF</Link>
                    <Link to="/profile" style={imgstyle}>Profile</Link>
                    <Link to="/aboutus" style={imgstyle}>About Us </Link> */}
                    {/* {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
                </Navbar>
            </div>
        )
    }
}

export default withAuth0(Footer)
