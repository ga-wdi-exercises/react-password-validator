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
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handlePasswordConfirmInput = this.handlePasswordConfirmInput.bind(this)
    this.onSubmitSignup = this.onSubmitSignup.bind(this)
  }
  handlePasswordInput (e) {
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordConfirmInput (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  onSubmitSignup (e) {
    e.preventDefault()
    this.state.password === this.state.passwordConfirm 
    ? this.setState({ valid: true })
    : this.setState({ valid: false})
  }

  render() {
    const toRender = this.state.valid
      ? <p>passwords match</p>
      : <p>passwords do not match</p>

    return (
      <div className="form">
        <h1>Sign Up</h1>
        {toRender}
        <form onSubmit={this.onSubmitSignup}>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" onChange={this.handlePasswordInput}/>
          <input type="password" placeholder="confirm password" onChange={this.handlePasswordConfirmInput}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Validator;
