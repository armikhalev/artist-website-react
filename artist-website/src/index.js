import React from 'react';
import './styles/css/index.css';
import App from './App';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(  

<BrowserRouter>
    <App />
</BrowserRouter>, 

document.getElementById('root')

);


