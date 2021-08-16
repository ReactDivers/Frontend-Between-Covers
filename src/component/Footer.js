import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub,FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import './Footer.css'

// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom";
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import { withAuth0 } from '@auth0/auth0-react';

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
                <section className="ingredientFooter" style={{marginTop:'6rem'}}></section>
                <div className="main-footer">
                    <div className="container2">
                        <div className="row">
                            <div className="col">
                                <h4>React Divers Team</h4>
                                <ul className="list-unstyled">
                                    <li>www.ReactDivers.com</li>
                                    <li>ReactDivers@Info.com</li>
                                </ul>
                            </div>
                            <div className="col">
                            </div>
                            <div className="col">
                                <h4>Contact</h4>
                                <ul className="list-unstyled">
                                    <li><FaGithub /> Github</li>
                                    <li><FaFacebook /> Facebook</li>
                                    <li><FaTwitter /> Twitter</li>
                                    <li><FaInstagram></FaInstagram> Instegram</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>&copy;  ReactDivers Team| All right reserved | Terms OF Service | Privacy </div>


                </div>
            </div>

        )
    }
}

export default Footer
