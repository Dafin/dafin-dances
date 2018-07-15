import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerControlExample from "./PlayerControlExample.js"

class App extends Component {
  render() {
    console.log('hello')
    return (
      <div style={{ width: '80%' }}>
        <PlayerControlExample />
      </div>
    );
  }
}

export default App;