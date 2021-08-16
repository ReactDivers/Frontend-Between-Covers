import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Login from './component/Login';
import Main from './component/Main';
import Card from './component/CARD/Card';
// import Img1 from './component/assets/nada.jpeg';
// import Img2 from './component/assets/Leen.jpg';
// import Img3 from './component/assets/Rawan.jpg';
// import Img4 from './component/assets/Sara.jpg';




import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


 class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
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

<div className="App">
 <Card 
 title='Rawan Alazazi'
 imgUrl= 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
 body='LEADER & DEVELOPER'
 />

<Card 
 title='Sarah Al-hilo'
 imgUrl= 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
 body='DEVELOPER'
 />

<Card 
 title='Nada Al-abdullah'
 imgUrl= 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
 body='DEVELOPER'
 />


<Card 
 title='Leen Duafi'
 imgUrl= 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
 body='DEVELOPER'
 />

 </div>
 


  </div>
    )
  }
}

export default withAuth0(App);

