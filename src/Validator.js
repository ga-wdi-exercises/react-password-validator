import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state = {
      password: "",
      confirmPassword: "",
      valid: true
    }

    this.handlePassword = this.handlePassword.bind(this)
    this.confirmPassword = this.confirmPassword.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handlePassword(event){
    this.setState({
      password: event.target.value
    })
  }

  handleConfirmPassword(event){
    this.setState({
      confirmPassword: event.target.value
    })
  }

  handleSubmit(event){
    alert("password incorrect")
    event.preventDefault();
    this.checkValidity();
  }

  checkValidity () {
    if (this.state.password === this.state.confirmPassword) {
        this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }


  render(){
     let validText = this.state.valid ? "Valid!" : "Passwords do not match"
     return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up</h1>
        <input  type="text" placeholder="email" />
        <input onChange={(event) => this.handlePassword} type="password" value={this.state.value}  placeholder="password"/>
        <input onChange={(event) => this.handleConfirmPassword} type="password" value={this.state.value}  placeholder="confirm password"/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Validator;
