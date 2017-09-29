import React, {Component} from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: ''
    }

    this.handlePasswordMatch = this.handlePasswordMatch.bind(this)
    this.validateField = this.validateField.bind(this)

  }

  handlePasswordMatch(e) {
    e.preventDefault()
    console.log("handlePasswordMatch");
    console.log(e.target);

    const name = e.target.name;
    this.setState({
      [name]: e.target.value
      // password: e.target.value,
      // passwordConfirm: e.target.value
    }, () => {
      console.log(this.state);
      this.validateField()
    })
  }

  // checking match
  validateField() {
    this.setState({
      valid: this.state.password === this.state.passwordConfirm
    })
  }


  render() {

    const toRender = this.state.valid
      ? "Password Match"
      : "Wrong Password"

    return (
      <div className="form">
        <h1>Sign Up</h1>

          <input type="text" placeholder="email"/>
          <input name="password" type="password" placeholder="password"
          onChange={this.handlePasswordMatch}/>
          <input name="passwordConfirm"  type="password" placeholder="passwordConfirm"
          onChange={this.handlePasswordMatch}/>
          <input type="submit" value="Submit"/>

        {toRender}
      </div>
    );
  }
}

export default Validator;
