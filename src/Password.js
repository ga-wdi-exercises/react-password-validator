import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Password extends Component {
  constructor(props) {
    super()
    this.state = {
      alert: "",
      alertClass: "",
      email: props.email,
      password: props.password,
      passwordConfirm: props.passwordConfirm
    }
  }

  validatePassword(e) {
    e.preventDefault()

    // Check if null
    if (document.getElementsByName('password')[0].value) {

      // Check for match
      if (document.getElementsByName('password')[0].value === document.getElementsByName('password-confirm')[0].value) {
        this.setState({
          alert: "Success!",
          alertClass: "success"
        })

      // If passwords don't match
      } else {
        this.setState({
          alert: "Passwords must match.",
          alertClass: "warning",
          password: "",
          passwordConfirm: ""
        })
      }

    // If password is empty
    } else {
      this.setState({
        alert: "Password field is empty.",
        alertClass: "warning",
      })
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Log In</h1>
        <div className={this.state.alertClass + " alert"}>{this.state.alert}</div>
        <form onSubmit={e => this.validatePassword(e)}>
          <label>Email</label>
          <input name="email" />

          <label>Password</label>
          <input name="password" type="password" />

          <label>Confirm Password</label>
          <input name="password-confirm" type="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Password;
