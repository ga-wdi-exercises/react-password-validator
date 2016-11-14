import React, { Component } from 'react';



class Cred extends Component {
  constructor(props) {
    super()

    }

  handleClick(props) {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmation = document.getElementById("confirmation").value

    if (password != confirmation) {
      return alert("Password does not match confirmation")
    } else if (this.props.email != email) {
      return alert("Email does not match. Please try again."
      )
    } else if (this.props.password != password) {
      return alert("Password does not match. Please try again.")
    } else alert("Congratulations, you remembered basic pieces of information about yourself. You should be proud."
    )
  }


  render() {
    return (
      <div>
        <div>
          <h1>Validate It!</h1>
          <h3>Email:</h3>
            <input id="email" type="text" placeholder="Email"/>
          <h3>Password:</h3>
            <input id="password" type="text" placeholder="Password"/>
          <h3>Confirm Password:</h3>
            <input id="confirmation" type="text" placeholder="Confirm password"/>
        </div>
        <button onClick={(e) => this.handleClick(e)}>Validate Credentials!</button>
      </div>
    )
  }
}

export default Cred;
