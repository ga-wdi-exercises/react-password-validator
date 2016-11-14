import React, { Component } from 'react';

class PWValidator extends Component {
  constructor(props){
    super()
    this.state = {
      email: "",
      pass: "",
      confirmPass: ""
    }
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePass = this.handlePass.bind(this)
    this.handleConfirmPass = this.handleConfirmPass.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //sets the new email
  handleEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }
  //sets the new pass
  handlePass(e) {
    this.setState({
      pass: e.target.value,
    })
  }
  //confirms new pass
  handleConfirmPass(e) {
    this.setState({
      confirmPass: e.target.value,
    })
  }
  //confirms the submission
  handleSubmit(e) {
    console.log("consequences...")
    //confirms all fields are filled out
    if (this.state.pass || this.state.confirmPass || this.state.email){
    alert("fill out the form hoe")
  }else{
    //confirms both passwords are the same
    if (this.state.pass === this.state.confirmPass){
      alert("congrats hoe")
    } else{
      alert("try again hoe")
    }

  }

    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Password Validator</h1>
        <form onSubmit={this.handleSubmit}>
         <p>{this.state.email}</p>
          <p>Email
            <input type="text" value={this.state.email} onChange={this.handleEmail} /></p>
          <p>Password
            <input type="text" value={this.state.pass} onChange={this.handlePass} /></p>
          <p>Confirm Password
            <input type="text" value={this.state.confirmPass} onChange={this.handleConfirmPass} /></p>
          <p><input type="submit" value="Submit" /></p>
        </form>
      </div>
    );
  }
}

export default PWValidator;
