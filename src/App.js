import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Sign In </h1>
        <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text"/>
        Password:
        <input type="password"/>
        Confirm Password:
        <input type="password"/>
        <button onClick= {(e)=>{this.checkPassword(e)}}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
