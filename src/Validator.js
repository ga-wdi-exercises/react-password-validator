import React, { Component } from 'react'
import "./Validator.css"

class Validator extends Component {

  constructor (props) {
    super()
    this.state = {
      email: "",
      password: "",
      password_match: "",
      valid: ""
    }
  }

  handleClick (e) {
    let target = e.target
    let email = target.parentNode.firstChild.nextSibling.value
    let password = target.parentNode.firstChild.nextSibling.nextSibling.value
    let password_match = target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.value

    if ((this.state.email === "") && (this.state.password === "") && (this.state.password_match === "") && (password === password_match)) {
      this.setState({
        email: email,
        password: password,
        password_match: password_match
      })
    }
    else if ((this.state.email === email) && (this.state.password === password) && (this.state.password_match === password_match)){
      this.setState({
        valid: "Valid!"
      })
    }
  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" onClick={(e) => this.handleClick(e)}/>
        <p>{this.state.valid}</p>
      </div>
    )
  }
}

export default Validator
