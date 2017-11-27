import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import MTGIndex from './components/MTG/MTGIndex'
import CardIndex from './components/MTG/CardIndex'
import LocalCardIndex from './components/MTG/LocalCardIndex'
import Navbar from './components/Navbar'
class App extends Component {
  render() {

    const CardIndexComponent = () => (
      <section>
        <CardIndex/>
        <LocalCardIndex/>
      </section>
    )
    return (
      <Router>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Another MTG Build Manager</h1>
          <Navbar/>
        </header>
        
          <Switch>
            <Route path="/" render={CardIndexComponent}/>
          </Switch>
        
        </div>
      </Router>
      
    );
  }
}

export default App;
