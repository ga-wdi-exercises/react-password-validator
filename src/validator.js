import React, {Component} from 'react'
import "./validator.css"

class Validator extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
      // valid: true
    }
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

  handleSumbit (e) {
  e.preventDefault()
  this.checkValidity()
}

  checkValidity() {
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }

  render() {
    let validText = this.state.valid ? "Valid!" : "Password do not match"
    return (
      <div className="form">
      <h1>Sign Up</h1>
      <input onChange={(e) => this.handleEmail(e)} type="text" placeholder="email" />
      <input onChange={(e) => this.handlePassword(e)} type="text" placeholder="password" />
      <input onChange={(e) => this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
      <input type="submit" onClick={(e) => this.handleSumbit(e)} value="Submit" />
      <p>{validText}</p>
    </div>
    );
  }
}

export default Validator;
