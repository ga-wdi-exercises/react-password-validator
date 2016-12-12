import React, { Component } from 'react';
import './App.css';

class User extends Component {

  constructor(props){
    super()
    this.state = {
      email: "",
      password: "",
      confirmation: ""
    }
  }

////

  validate(e) {
    e.preventDefault()

    this.setState({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmation: document.getElementById("confirmation").value
    },
    function validation() {

      if ((this.state.email && this.state.password && this.state.confirmation) !== "") {
          console.log(this.state.email);
          console.log(this.state.password);
          console.log(this.state.confirmation);

        if (this.state.password === this.state.confirmation) {
          alert("You have successfully signed up!")
        } else {
          alert("Please reconfirm your passwords. The values are not the same for the last two fields")
        }
      }

      else {
        alert("Please filled all required fields.")
      }
    }
  )

  }

//////
  render() {
    return (
      <div className="App">

        <h1>User Sign Up</h1>

        <form onSubmit={(e) => this.validate(e)}>
        <p>Email: <input id="email" type="text" /></p>
        <p>Password: <input id="password" type="text" /></p>
        <p>Confirm Password: <input id="confirmation" type="text" /></p>
        <p><input type="submit" /></p>
        </form>

      </div>
    );
  }
}

export default User;
