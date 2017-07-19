import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
export const Menu = () => (
  <nav style={{display:"none"}}>
      <ul>
          <li><Link to='/' id="home-link">Home</Link></li>
          <li><Link to='/ipad' id="ipad-link">iPad</Link></li>
          <li><Link to='/sketchbook' id="sketchbook-link">Sketchbook</Link></li>
          <li><Link to='/phone' id="phone-link">Phone</Link></li>
      </ul>
  </nav>
);