import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    this.checkValidity()
  }

  checkValidity () {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({valid: true})
    } else {
      this.setState({valid: false})
    }
  }

  render() {
    let message = this.state.valid
      ?  "Sign Up Confirmed"
      :  "Passwords Do Not Match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
        <input onChange={(e) => this.handlePassword(e)} type="password" placeholder="password" />
        <input onChange={(e) => this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
        <input onClick={(e) => this.handleSubmit(e)} type="submit" value="Submit" />
        {message}
      </div>
    );
  }
}

export default Validator;
