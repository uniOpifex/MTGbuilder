
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom'


const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
  align-items: center;
  height: 100vh;
`;

const LoginItem = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: blue;
  padding: 30px;
  border-radius: 20px;
  flex-direct: column;
  form {
    flex-direction: row;
    text-align: left;
  }
`;


class LoginPage extends Component {
   state = {
      users:[],
      userName: "",
      password: "",
      currentUser: "",
   }
   getAllUsers = async () => {
    const res = await axios.get('api/users/')
    this.setState({ users: res.data })
}
   signUp = event => {
    event.preventDefault();
    this.props.signUp(
      this.state.userName,
      this.state.password,
    );
  };

  signIn = event => {
    event.preventDefault();
    console.log(this.state.userName)
    console.log(this.state.users)
    console.log(search(this.state.userName, this.state.users))
    let getUser = search(this.state.userName, this.state.users)
    this.setState({currentUser: getUser})
    this.props.signIn(
      this.state.email,
      this.state.password,
      this.state.currentUser
    );
    

    function search(nameKey, myArray) {
      for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].userName === nameKey) {
          return myArray[i]._id
        }
      }
    }
    
  }
   

  handleChange = event => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  
  componentWillMount() {
    this.getAllUsers()
  }
  

 


   render() {

    const users = this.state.users.map(user => {
      return (
          <button key={user._id}>
              <Link to={`/user/${user._id}`}>{user.userName}</Link>
          </button>
      )
  })
     
      return (
      
      <LoginWrapper>
        <div className="flex-container">
          
          <LoginItem>
            <form>
              <div className="flex-item">
                <label htmlFor="userName">
                  <i className="fa fa-envelope" aria-hidden="true" /> UserName:{" "}
                </label>
                <input
                  className="form-field"
                  onChange={this.handleChange}
                  type="text"
                  name="userName"
                  value={this.state.userName}
                />
              </div>
              <div className="flex-item">
                <label htmlFor="password">
                  <i class="fa fa-lock" aria-hidden="true" /> Password:{" "}
                </label>
                <input
                  className="form-field"
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  value={this.state.password}
                />
              </div>

              <button onClick={this.signUp}>Sign Up</button>
              <button onClick={this.signIn}>Log In</button>
            </form>
          </LoginItem>
        </div>
      </LoginWrapper>
    );
      
   }
}

export default LoginPage;