import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Login from './component/Login';
import Main from './component/Main';
// import SelectedBook from './component/SelectedBook';
// import Card from './component/CARD/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import AboutUs from './component/AboutUs';

import './style/Profile.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Header  className="App-header"/>
          <Switch>
            <Route exact path="/">
              <Main
                show={this.showModel}
              />
              {this.props.auth0.isAuthenticated && <Login />}
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated && <Profile />}
            </Route>
            <Route exact path="/aboutus">
             <AboutUs />
            </Route>
           
          </Switch>
          <Footer />

        </Router>
       
             
       </div>
        )
  }
}

        export default withAuth0(App);

