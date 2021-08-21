import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import logo from './assets/logo.jpg';
import title from './assets/title.png';

import '../style/Profile.css';
import '../style/Header.css';


const mystyle = {
    // color: "white",
    // backgroundColor: "DodgerBlue",
    paddingLeft: "42rem",
    paddingRight: "20px",
    fontFamily: "Arial",
    fontSize:"17px",
    
      
};
// const navStyle={

//     position:"fixed"
// }
const imgstyle = {

    paddingRight: "20px",
    fontSize:"17px",
};

const titleStyle = {

    color:"#dc3545",
};
class Header extends Component {
    render() {
        return (
            <div className="ingredientHeader">

                
                <Navbar  style={{overflow: "hidden", position:"sticky"}} collapseOnSelect expand="lg" bg="light" variant="light">
                    <img  src={logo} alt="logo"className="App-logo" ></img>
                    <Navbar.Brand  style={titleStyle} >
                    <img style={{position:"sticky",marginLeft:"-2.4rem"}} src={title} alt="img" height="50vmin" ></img>
                        </Navbar.Brand>
                    <Link to="/" style={mystyle}>Home</Link>
                    {this.props.auth0.isAuthenticated&& <Link to="/profile" style={imgstyle}>Profile</Link>}
                    <Link to="/aboutus" style={imgstyle}>About Us </Link>
                    {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Navbar>
                

          
            </div >
        )
    }
}

export default withAuth0(Header);
