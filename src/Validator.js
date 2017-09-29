import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
    this.handlePasswordInput = this.handlePasswordInput.bind(this)
    this.handlePasswordConfirmationInput = this.handlePasswordConfirmationInput.bind(this)
    this.onSubmitSignup = this.onSubmitSignup.bind(this)
  }

  handlePasswordInput (e) {
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordConfirmationInput (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  onSubmitSignup (e) {
    e.preventDefault()
    this.state.password === this.state.passwordConfirm
      ? this.setState({ valid: true},  () => console.log(this.state))
      : this.setState({ valid: false}, () => console.log(this.state))
  }

  render() {
    const toRender = this.state.valid
      ? <p>passwords match</p>
      : <p>passwords are not identical</p>

    return (
      <div className="form">
        <h1>Sign Up</h1>
        {toRender}
        <form onSubmit={this.onSubmitSignup}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" onChange={this.handlePasswordInput}/>
          <input type="password" placeholder="Confirm Password" onChange={this.handlePasswordConfirmationInput}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Validator;
