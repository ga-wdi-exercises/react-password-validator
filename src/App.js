import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let options = {
      email: {
        label: "Email Address",
        placeholder: "Email"
      },
      password: {
        label: "Password",
        placeholder: "Password"
      },
      submitButton: {
        text: "Submit"
      }
    };
    options = Object.assign(options, this.props.options || {});
    return (
      <div>
      <form>
            <div>
              <label>{options.email.label}</label>
              <input type="email" onChange={this.onChange} placeholder={options.email.placeholder} />
            </div>
            <div>
              <label>{options.password.label}</label>
              <input type="password" onChange={this.onChange}  placeholder={options.password.placeholder}required={true} minLength={5} />

            </div>
            <button type="submit" onClick={this.onSubmit}>{options.submitButton.text}</button>
          </form>
        </div>
    );
  }
}

export default App;
