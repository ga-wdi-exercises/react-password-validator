import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props);
    this.state = {
            email: '',
            firstPassword: '',
            secondPassword: '',
            valid: false
    };
    this.handleFirstPassword = this.handleFirstPassword.bind(this)
    this.handleSecondPassword = this.handleSecondPassword.bind(this)
    this.checkValidity = this.checkValidity.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstPassword(e){
    this.setState({firstPassword: e.target.value });
  }

  handleSecondPassword(e){
    this.setState({secondPassword: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault()
    this.checkValidity()
  }

  checkValidity(){
    if(this.state.firstPassword === this.state.secondPassword){
      this.setState({valid: true})
    }else {
      this.setState({valid: false})
    }
  }
  componentDidUpdate () {
    console.log(this.state);
  }

  render() {
    let message = this.state.valid
    ? "valid"
    : "password does not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input onChange={this.handleFirstPassword} name="firstPassword" type="password" placeholder="password" />
        <input onChange={this.handleSecondPassword} name="secondPassword" type="password" placeholder="confirm password" />
        <input onClick={this.handleSubmit} type="submit" value="Submit" />
        {message}
      </div>


    );
  }
}

export default Validator;
