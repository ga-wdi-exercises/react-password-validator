import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true
    }
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handlePasswordConfirm(e){
    this.setState({
      passwordConfirm: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.isValid();
  }

  isValid(){
    if(this.state.password === this.state.passwordConfirm && this.state.email.split('').includes('@' && '.')){
      this.setState({
        valid: true
      })
    }
      else{
        this.setState({
          valid: false
        })
      }
  }

  render() {

    let validMessage = this.state.valid
    if (validMessage === true){
      validMessage = "Valid!"
    }
    else{
      validMessage = "You have an error in your email or you passwords don't match"
    }

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" onChange={(e) => this.handleEmail(e)}/>
        <input type="password" placeholder="password" onChange={(e) => this.handlePassword(e)}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.handlePasswordConfirm(e)}/>
        <input type="submit" value="Submit" onClick={(e) => this.isValid(e)} />
        <p className="message">{validMessage}</p>
      </div>
    );
  }
}

export default Validator;
