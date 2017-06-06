import React, { Component } from 'react';
import "./Validator.css";
import Input from "./input.js" //amlak

class Validator extends Component {
  render() {

    return (
      <div className="form">
        <h1>Sign Up Now</h1>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="confirm password" />
        <input type="submit" value="Submit" />

      </div>
    );
  }
}

export default Validator;
