import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

function Signup (){

  return (
    <div>
      <header className="SignUp-header">
        <h2>Sign Up</h2>
        <div>
          <p>Already have an account? <a href='/'>Sign in here</a></p>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
          />
        </div>
        <button>Sign Up</button>
      </header>
    </div>
  );
};

export default Signup;
