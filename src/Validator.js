import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props){
    super(props)
    this.state= {
      email: null,
      password: null,
      confirmPassword: null
    }
  }

  imputpassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  imputconfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value
    })
  }


  render() {
    let passwordResult
    if (this.state.password===this.state.confirmPassword){
        passwordResult="valid"
    }
    else {
        passwordResult="Wrong password"
    }
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" onChange={(e) => this.imputEmail(e)}/>
        <input type="password" placeholder="password" onChange={(e) => this.imputpassword(e)}/>
        <input type="password" placeholder="confirm password" onChange={(e) => this.imputconfirmPassword(e)}/>
        <input type="submit" value="Submit"/>
        <p>{passwordResult}</p>
      </div>
    );
  }
}

export default Validator;
