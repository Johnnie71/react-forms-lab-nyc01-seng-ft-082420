import React from "react";

class LoginForm extends React.Component {
  constructor() { 
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  submitHandler = (e) =>{
    e.preventDefault()
    if(this.state.username.length > 1 && this.state.password.length > 1){
      this.props.handleLogin({username: this.state.username, password: this.state.password})
    }
  }

  handleChange =(e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.username, this.state.password )
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.handleChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
