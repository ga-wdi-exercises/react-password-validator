import React, { Component } from 'react';



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        passwordConfirm: '',
        valid: true
      };
    }

    handleEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
    handlePassword(event) {
      this.setState({
        password: event.target.value
      });
    }
    handlePasswordConfirm(event) {
      this.setState({
        passwordConfirm: event.target.value
      });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.checkValidity()
    }

    checkValidity () {
      if (this.state.password === this.state.passwordConfirm) {
          this.setState({ valid: true })
          console.log("Heyy");
      } else {
        this.setState({ valid: false })
        console.log("Nooooo");
      }
    }

    render() {
      let validText = this.state.valid ? "Valid!" : "Passwords do not match"
      return (
      <div>
        <input onChange={(event) => this.handleEmail(event)} type="text" placeholder="email" />
        <input onChange={(event) => this.handlePassword(event)} type="password" placeholder="password" />
        <input onChange={(event) => this.handlePasswordConfirm(event)} type="password" placeholder="confirm password" />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} value="submit" />
        <p>{validText}</p>
      </div>
      );
    }
  }

export default App;
