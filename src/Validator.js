import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value});
  }

  handleConfirmPasswordChange(event){
    this.setState({passwordConfirm: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    if(this.state.password === this.state.passwordConfirm) {
      alert('passwords match')
    } else {
      alert('passwords do not match')
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <p>Email:</p>
        <input type="text" value={this.state.value} onChange={this.handleEmailChange} placeholder="email" />
        <p>Password:</p>
        <input type="password" value={this.state.value} onChange={this.handlePasswordChange} placeholder="password" />
        <p>Confirm Password:</p>
        <input type="password" value={this.state.value} onChange={this.handleConfirmPasswordChange} placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Validator;
