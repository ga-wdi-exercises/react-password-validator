import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  compare () {
    console.log("hello")
    var firstInput = document.getElementById("text1").value
    var secondInput = document.getElementById("text2").value

    if (firstInput === secondInput) {
      document.getElementById("form").style.backgroundColor = "green";
      document.getElementById("alert").innerHTML = "Passwords match"
    } else {
      document.getElementById("form").style.backgroundColor = "red";
      document.getElementById("alert").innerHTML = "Passwords do not match"
    }
  }
  render() {
    return (
      <div id= "form"className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="email" />
        <input id="text1" type="password" placeholder="password" />
        <input id= "text2" type="password" placeholder="confirm password" />
        <input onClick={() => this.compare()} type="submit" value="Submit" />
        <div id= "alert"></div>
      </div>


    );
  }
}


export default Validator;
