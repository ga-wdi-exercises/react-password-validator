this.setState({email: e.target.email})
    // this.setState({
    // email: document.getElementById("email").value
    // password: document.getElementById("password").value
    // passconf: document.getElementById("passconf").value
    // })
    // if (this.state.password == this.state.passconf){
    //   document.getElementById('message').append("Message");
    // }
  }
  handleClick (e) {
    console.log(e.target.value)
    if (e.target.password !== e.target.passconf){
      getElementById('message').append("Passwords don't match!")
    }
  }
  render() {
    return (
      <div>
      <input type="text" value={this.state.email} onChange={(e) => this.handleChange(e)} />
      <button onClick={(e) => this.handleClick(e)}>Validate</button>
      <div id="message"></div>
      </div>
    );
  }
}

export default Validator;