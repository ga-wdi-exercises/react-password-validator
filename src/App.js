import React, { Component } from 'react';


class Validator extends Component {


  constructor(props){
    super()
  }
  handleClick(e){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmation = document.getElementById("confirmation").value

    if (password === confirmation){
      return alert("Log in created!")
    }
    else{
      return alert("Password does not match.")
    }
  }
  render() {
    return (
        <div>
          <form>
          <h3>Email</h3>
            <input id="email" type="text" placeholder="Email" />
            <h3>Password</h3>
            <input id="password" type="text" placeholder="Password" />
            <h3>Confirm Password</h3>
            <input id="confirmation" type="text" placeholder="Password Confirmation" />
            <button onClick={(e) => this.handleClick(e)}>Confirm</button>
          </form>
        </div>
    );
  }
}

export default Validator;
//forms dont need to change, just need to check the previous value with the new value.
