this.setState({email: e.target.email})
  handleClick(e) {
    console.log(e.target.value)
    if (e.target.password !== e.target.passconf){
      getElementById('message').append("Passwords don't match son!")
    }
  }
  render() {
    <div>
    <input type="text" value={this.state.email} onChange={(e) => this.handleChange(e)} />
    <button onClick={(e) => this.handleClick(e)}>Validate</button>
    </div>
  );
}
}

export default Validator;
