import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Header from './component/Header';
import Footer from './component/Footer';
import Profile from './component/Profile';
import Login from './component/Login';
import Main from './component/Main';
import Card from './component/CARD/Card';
import Img1 from './component/assets/nada.jpeg';
// import Img2 from './component/assets/Leen.jpg';
// import Img3 from './component/assets/Rawan.jpg';
// import Img4 from './component/assets/Sara.jpg';




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
<div className="App">
  {/* <Showcase bgImg={bgImg} navItems={navItems} header={'Electronics Galore' content=''} */}
 <Card src={Img1} title="Nada Al-Abdullah" content="Software Developer"/>

 {/* <Card src={Img2} title="hello" content="awole leen"/>

 <Card src={Img3} title="hello" content="awole rawan"/>

 <Card src={Img4} title="hello" content="awole sara"/> */}
 
 


  </div>
      </div>
    )
  }
}

export default withAuth0(App);

