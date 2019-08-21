import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

import './Nav.css';

class App extends Component {
  render() {
    return (
        <Fragment>
        <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <header className="header">
          <div className="header-nav">
          <Link className="header-nav__item" to="/Welcome">Welcome</Link>
            <Link className="header-nav__item" to="/">Home</Link>
            <Link className="header-nav__item" to="/AboutUs">About Us</Link>
          </div>
          <a className="github" href="https://github.com/AlkhaldiAzzam/aaa"style={{  color: 'black' }}><Icon name= 'github'/></a>
          
        </header>
      </Fragment>

  
    );
  }
}

export default App;
