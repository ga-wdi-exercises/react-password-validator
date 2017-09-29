import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
      super(props)
      this.state = {
        email: '',
        password: '',
        passwordConfirm: '',
        valid: true
      }
      this.validatorVerification = this.validatorVerification.bind(this)
       this.handlerEmail = this.handlerEmail.bind(this)
       this.handlerPassword = this.handlerPassword.bind(this)
       this.handlerPasswordConfirm = this.handlerPasswordConfirm.bind(this)
}


  handlerEmail (e) {
    this.setState({
      email: e.target.value
    })
  }

  handlerPassword (e) {
    this.setState({
      password: e.target.value
    })
  }

  handlerPasswordConfirm (e) {
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  validatorVerification () {
    let message = ""
    if (this.state.password === this.state.passwordConfirm) {
      this.setState({
        valid: true,
        message : "valid"
      }, _=>console.log(this.state))
    } else {
      this.setState({
        valid: false,
        message : "not valid"
      }, _=>console.log(this.state))

    }
  }



  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input onChange={this.handlerEmail} type="text" placeholder="email" />
        <input onChange={this.handlerPassword} type="password" placeholder="password" />
        <input onChange={this.handlerPasswordConfirm} type="password" placeholder="confirm password" />
        <input type="submit"
               onClick={this.validatorVerification} value="Submit"
        />
        <p>
        {this.state.message}
        </p>
      </div>
    );
  }


}

export default Validator;
