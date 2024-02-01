// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import HiPage from './HiPage';
import reportWebVitals from './reportWebVitals';
import SignUp from './SignUp';
import Login from './Login';
import Portal from './portal';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Wrap your components with Router and define Routes
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hi" element={<HiPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portal" element={<Portal />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();