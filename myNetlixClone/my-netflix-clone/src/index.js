import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Ujistěte se, že je importováno
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root object
root.render(
  <Router>
    <App />
  </Router>
);