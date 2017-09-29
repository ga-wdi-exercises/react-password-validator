import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: ''
    }
    this.getPassword = this.getPassword.bind(this)
    this.getPasswordConfirm = this.getPasswordConfirm.bind(this)
    this.verifyPassword = this.verifyPassword.bind(this)
  }
  getPassword (e) {
    console.log("yo")
    this.setState({
      password: e.target.value,
    })
  }
  getPasswordConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }
  verifyPassword(e) {
    let message = ''
    e.preventDefault()
    console.log("yo")
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({
        valid: true,
        message: 'Password set successfully!'
      })
    }
    else {
    this.setState({
      valid: false,
      message: 'Password does not match! '
    })
  }
  }
  render() {
    return (
      <div className="form">
        <form>
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input onChange={this.getPassword} type="password" placeholder="password" />
        <input onChange={this.getPasswordConfirm} type="password" placeholder="confirm password" />
        <input onClick={this.verifyPassword} type="submit" value="Submit" />
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default Validator;
