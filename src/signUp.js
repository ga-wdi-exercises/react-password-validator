import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class SignUp extends Component {
  constructor (props){
    super(props)
    this.state={
      form:{
        email: "",
        password: "",
        confirmation: ""
        }
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(propertyName, event) {
    const form = this.state.form;
    form[propertyName] = event.target.value;
    this.setState({
      form: form
    })
  }

  handleSubmit(event) {
    if(this.state.form.password == this.state.form.confirmation){
      alert('The passwords match!')
    }

    else{
      alert('The passwords are incorrect')
    }

   event.preventDefault();
 }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Email: <input type="text" value={this.state.form.email} onChange={(e) => this.handleChange('email', e)}/></label><br/>
          <label>Password: <input type="text" value={this.state.form.password} onChange={(e) => this.handleChange('password', e)}/></label><br/>
          <label>Password Confirmation: <input type="text" value={this.state.form.confirmation} onChange={(e) => this.handleChange('confirmation', e)}/></label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
