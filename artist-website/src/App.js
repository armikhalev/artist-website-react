import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Router } from './Router';
import { Menu } from './components/menu';

class App extends Component {

  render() {
    return (

		<div className="app">
			<Menu>
				<Link to='/ipad' className="ipad-link">iPad</Link>
				<Link to='/sketchbook' className="sketchbook-link">Sketchbook</Link>
				<Link to='/phone' className="phone-link">Phone</Link>

				<Router />

			</Menu>
		</div>
    );
  }

}

export default App;
