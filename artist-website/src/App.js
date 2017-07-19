import React, { Component } from 'react';
import './App.css';

import { Router } from './Router';
import { Zoomer } from './functionals/zoomer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zoomer>
          <Router />
          <div data-link-name="ipad-link" className="zoom-area"></div>
          <div data-link-name="sketchbook-link" className="zoom-area"></div>
          <div data-link-name="phone-link" className="zoom-area"></div>
        </Zoomer>
      </div>
    );
  }
}

export default App;
