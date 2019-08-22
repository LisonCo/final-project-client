import React, { Component } from "react";
import './login.css'
import {Link} from 'react-router-dom';
import Auth from "../utils/Auth";
const auth = new Auth();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        emailAddress: "",
        password: "",
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    auth.login(this.state.user.emailAddress, this.state.user.password)
      .then(() => {
        this.setState({ error: "" });
        this.props.history.push("/ma-cagette");
      })
      .catch(({ response }) => {
        this.setState({ error: response });
      });
  };

  handleFormChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({
      user: user
    });
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="bonjour@la-cagette.fr"
              value={this.state.emailAddress}
              onChange={this.handleFormChange}
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleFormChange}
            />
          </div>

          <div className="input">
            <input type="submit" value="Submit" className="button" />
          </div>
        </form>
        <div>
          Not a user yet? <Link to='/signup'>Sign up first!</Link>
        </div>
        <img src='./images/bottles.png' alt="bottles"/>
      </div>
    );
  }
}

export default Login;
