import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MTGIndex from './components/MTG/MTGIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Another MTG Build Manager</h1>
        </header>
        <MTGIndex />
      </div>
    );
  }
}

export default App;
