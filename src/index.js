// @ts-check
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';

import App from './components/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('chat'),
);
