import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
      passwordConfirm: '',
      valid: true
    }
  }

handleEmail (e) {
  this.setState({
    email: e.target.value
  })
}

handlePassword (e) {
  this.setState({
    email:e.target.value
  })
}

handlePasswordConfirm (e) {
  this.setState({}
  )
}

handleSubmit (e) {
  e.preventDefault()
  this.checkValidity()
}

  render() {

    let validText = this.state.valid ? "Valid!" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Validator;
