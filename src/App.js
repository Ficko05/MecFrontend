import React, { Component } from 'react'
import Charts, { } from './components/Charts'
import hello, { } from './components/hello'
import Header from "./Header";
import Home from "./components/Home";
import M7 from "./components/M7";


import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import { HashRouter as Router, Route, NavLink, Switch, Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
        <Router>
        <div >
        <Header />
          <Route exact path="/" component={Home} />
          <Route  path="/M7" component={M7} />
          <Route  path="/Chart" component={Charts} />
           </div>
      </Router>
          

          


     
    )
  }
}


/*<Switch>
            <Route exact path="/hello" component={hello} />
            <Route exact path="/chart" component={Charts} />
          </Switch>*/
export default App

