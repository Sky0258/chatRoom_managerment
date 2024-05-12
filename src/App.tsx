import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';

function App() {
  return (
    <Router>
    <div>
      <AppRoutes />
    </div>
  </Router>
  );
}

export default App;
