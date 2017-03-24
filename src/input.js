import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      validation: '',
      valid: true
    };
  }

  username (e) {
    this.setState({username: e.target.value})
  }

  password (e) {
    this.setState({password: e.target.value})
  }

  validation (e) {
    this.setState({validation: e.target.value})
  }

  submit (e) {
    e.preventDefault()
    this.checkValidity()
  }

  checkValidity () {
    if (this.state.password === this.state.passwordConfirm){
      this.setState({ valid: true})
    } else {
      this.setState({ valid: false})
    }
  }
    render() {
      return (
        <div className="App">

          <input onChange={(e) => this.username(e)} type="text" placeholder="username" />

          <input onChange={(e) => this.password(e)} type="text" placeholder="password" />

          <input onChange={(e) => this.validation(e)} type="text" placeholder="validation" />

          <input type="submit" onClick={(e) => this.submit(e)} value="submit" />

          </div>

      );
    }
  }
  export default Input;
