import React, { Component } from 'react';


class Validator extends Component {
  constructor(props){
    super()
    this.state = {
    }
  }
  checkPassword (e) {

    this.setState({

    })
  }

  render() {
    return (
        <div>
          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Password Confirmation" />
          </form>
        </div>
    );
  }
}

export default Validator;
//forms dont need to change, just need to check the previous value with the new value.
