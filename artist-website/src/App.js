import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import { Router } from './Router';
import { Menu } from './components/menu';

class App extends Component {

  render() {
    return (

		<div className="App">
			<Menu>
				<Link to='/ipad' className="zoom-area">iPad</Link>
				<Link to='/sketchbook' className="zoom-area">Sketchbook</Link>
				<Link to='/phone' className="zoom-area">Phone</Link>
			</Menu>
			<Router />
		</div>
    );
  }

}

export default App;
