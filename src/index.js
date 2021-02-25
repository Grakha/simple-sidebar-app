import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Css Styles
import './components/styles.css';

// Components
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#app')
);