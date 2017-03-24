import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state = {
      password: "",
      confirmPassword: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setSet({
      password: event.target.value, 
      confirmPassword: event.target.value
    })
  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="confirm password"/>
        <input type="submit" value="Submit"/>
      </div>
    );
  }
}

export default Validator;
