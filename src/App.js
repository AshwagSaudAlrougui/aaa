import React, { Component, Fragment } from 'react';
import Home from './Home'
import './Nav.css';
import Nav from './Nav'
import AboutUs from './AboutUs'
import FirstPage from './FirstPage'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';






export default function App() {
    return (
   
      <Router>
      
      
  <Nav />
     
  
        <div>
            <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/FirstPage" component={FirstPage} />
          <Route path="/AboutUs" component={AboutUs} />
     
          <Route component={FirstPage} />
          </Switch>
        </div>
      </Router>
   
    );
  }
  

