import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      validation: ''
    }
  }
password(e){
  this.setState({password: e.target.value})
}
validation(e){
  this.setState({validation: e.target.value})
}
  validatePassword(){
    console.log(this.state.password)
    if (this.state.password === this.state.validation){
      alert("holy balls you did it")
    }else {
      alert("nope youre a failure")
    }
  }
  render() {
    return (
      <div className="container">
        <div className="App-header">
          <h2>Welcome to Password Validator 9000</h2>
        </div>
        <form>
          <ul>
          <li>
          <label>
            Name:
            <input type="text"/>
          </label>
          </li>
          <li>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={ e => this.password(e) }/>
          </label>
          </li>
          <li>
          <label>
            Confirm Password:
            <input type="password" value={this.state.validation} onChange={ e => this.validation(e) }/>
          </label>
          </li>
          <button value="Submit" onClick={() => {this.validatePassword()}}>SUMBIT DIS JUNX</button>
        </ul>
          </form>
      </div>
    );
  }
}

export default App;
