import React, { Component } from 'react';

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
  }

  Email (e) {
    this.setState({
      email: e.target.value
    })
  }

  Password (e) {
    this.setState({
      password: e.target.value
    })
  }

  PasswordConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  Submit (e) {
    e.preventDefault()
    this.checkValidity()
  }

  checkValidity () {
    if (this.state.password === this.state.passwordConfirm) {
        this.setState({ valid: true })
    } else {
      this.setState({ valid: false })
    }
  }

  render () {
    let validText = this.state.valid ? "Password Set" : "Passwords don't match"
    return (
        <div class="bob">
          <input onChange={(e) => this.Email(e)} type="text" placeholder="email" />
          <input onChange={(e) => this.Password(e)} type="password" placeholder="password" />
          <input onChange={(e) => this.PasswordConfirm(e)} type="password" placeholder="confirm password" />
          <input type="submit" onClick={(e) => this.Submit(e)} value="submit" />
          <p>{validText}</p>
      </div>
    );
  }
}

 export default Info;
