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
  checkPassword(){
    console.log(this.state.password)
    if(this.state.password === this.state.validation){
      alert("You are signed in!")
    }else{
      alert("Try again!")
    }
  }
  render() {

    return (
      <div className="container">
        <h1>Sign In </h1>
        <form>
        Name:
        <input type="text" />
        Password:
        <input type="password" value={this.state.password} onChange={ e => this.password(e) }/>
        Confirm Password:
        <input type="password" value={this.state.validation} onChange={e => this.validation(e)}/>
        <button onClick={()=>{this.checkPassword()}}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
