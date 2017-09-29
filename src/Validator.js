import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super (props)
    this.state = {
        email: '',
        password: '',
        passwordConfirm: '',
        valid: true
    }
    this.handlePassword = this.handlePassword.bind(this)
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkValidity = this.checkValidity.bind(this)
  }

    handlePassword(e) {
      this.setState({
        password: e.target.value
      })
    }

    handlePasswordConfirm(e) {
      this.setState({
        passwordConfirm: e.target.value
      })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.checkValidity()
    }

    checkValidity() {
      if(this.state.password === this.state.passwordConfirm){
        console.log("true")
        this.setState({
          valid: true
        })
      } else {
        console.log("false")
        this.setState({
          valid: false
        })
      }
    }

  render() {
    let whatever = this.state.valid
    ? "valid"
    : "fuckoff"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email"/>
        <input type="password" placeholder="password" onChange={this.handlePassword}/>
        <input type="password" placeholder="confirm password" onChange={this.handlePasswordConfirm}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        {whatever}
      </div>
    )
  }
}

export default Validator;
