import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import MTGIndex from "./components/MTG/MTGIndex";
import CardIndex from "./components/MTG/CardIndex";
import LocalCardIndex from "./components/MTG/LocalCardIndex";
import Navbar from "./components/Navbar";
import LoginPage from "./components/User/LoginPage";
import UserPage from './components/User/UserPage';
import DeckPage from './components/Deck/DeckPage'
import CardPage from './components/Deck/CardPage'


class App extends Component {
  state = {
    currentUser: null,
    isLoggedIn: false
  };

  signUp = async (userName, password) => {
    await axios.post(`/api/users/`, { 
      user: {
        userName: userName,
        password: password
      }
    } )
    try {
      const payload = {
        userName: userName,
        password: password
      };

      this.setState({
        signedIn: true
      });
    } catch (error) {
      console.log(error);
    };
  }

  signIn = async (userName, password, currentUser) => {
    
  
    
    try {
      this.setState({
        currentUser: currentUser
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const CardIndexComponent = () => (
      <section>
        <LocalCardIndex />
      </section>
    );

    const LoginPageComponent = props => (
      <LoginPage signUp={this.signUp} signIn={this.signIn} />
    );

    return(
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Another MTG Build Manager</h1>
            <Navbar currentUser={this.state.currentUser}/>
          </header>

          <Switch>
            
            <Route exact path="/login" render={LoginPageComponent} />
            <Route exact path ="/user/:userId" component={UserPage} />
            <Route exact path ="/user/:userId/deck/:deckId" component={DeckPage} />
            <Route exact path ="/user/:userId/deck/:deckId/card/:cardId" component={CardPage} />
            <Route exact path ="/cardindex" render={CardIndexComponent} />
            <Route exact path="/" render={LoginPageComponent} />
          </Switch>
        </div>
      </Router>
    
    )

}
}
export default App;
