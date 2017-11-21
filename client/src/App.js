import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MTGIndex from './components/MTG/MTGIndex'
import CardIndex from './components/MTG/CardIndex'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Another MTG Build Manager</h1>
        </header>
        <CardIndex/>
      </div>
    );
  }
}

export default App;
