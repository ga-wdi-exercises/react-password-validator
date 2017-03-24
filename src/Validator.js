import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  handleClick (event){
    let newBody = prompt("Password doesn't match")
    this.setState({
      body: newBody
    })
  }
  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <button onClick={(event) => this.handleClick(event)}>Submit</button>
      </div>
    );
  }
}

export default Validator;
