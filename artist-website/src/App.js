import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Router } from './Router';
import { Menu } from './components/menu';
// import { Zoomer } from './functionals/zoomer';

class App extends Component {

  render() {
    return (
      <div className="App">
        {/*<Zoomer>*/}
          <Menu>
            <Link to='/' ref={elem => this.clickHomeLink = elem}>Home</Link>
            <Link to='/ipad' className="zoom-area">iPad</Link>
            <Link to='/sketchbook' className="zoom-area">Sketchbook</Link>
            <Link to='/phone' className="zoom-area">Phone</Link>
          </Menu>
          <Router />

          {/*<div data-link-name="ipad-link" className="zoom-area"></div>
          <div data-link-name="sketchbook-link" className="zoom-area"></div>
          <div data-link-name="phone-link" className="zoom-area"></div>*/}
        {/*</Zoomer>*/}
      </div>
    );
  }
}

export default App;
