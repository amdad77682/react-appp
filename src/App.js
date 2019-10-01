import React, { Component, useState  } from 'react';
import logo from './logo.svg';
import './App.css';

export const App =()=> {
const [count, setCount] = useState(0);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="bg-purple-darker m-6 p-6 rounded shadow-lg">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }



