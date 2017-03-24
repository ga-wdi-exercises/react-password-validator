import React, {Component} from 'react'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  handlePassword(e) {
    this.state({
      password: e.target.value
    })
  }

  handlePasswordConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }
  checkValidity () {
    if (this.state.password === this.passwordConfirm) {
      this.setState({ valid: true })
    } else {
      this.setState ({ valid: false })
    }
  }

  render () {
    let validText = this.state.valid ? "Valid!" : "Password do not match"
    return (
      <div>
      <input onChange={(e)} => this.handleEmail(e)} type ="text" placeholder= "email" />
      <input onChange={(e)} => this.handlePassword(e)} type="password" placeholder="password" />
      <input onChange={(e)} => this.handlePasswordConfirm(e)} type="password" placeholder="confirm password" />
      <input type="submit" onClick{(e) => this.handleSumbit(e)} value="sumbit" />
      <p>{validText}</p>
    );
  }
}

export dafault Input;
