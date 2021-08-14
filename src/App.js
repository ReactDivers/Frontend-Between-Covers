import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Login from './component/Login';
import Main from './component/Main'



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          {/* <Main /> */}
          <Switch>
            <Route exact path="/">
              <Main />
              {this.props.auth0.isAuthenticated && <Login />}
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated && <Profile />}
            </Route>
          </Switch>
          <Footer />
        </Router>

      </div>
    )
  }
}

export default withAuth0(App);

