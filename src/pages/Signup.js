import React, { Component } from "react";
import './signup.css'
import Auth from "../utils/Auth";
const auth = new Auth();

class signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        password: "",
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = e => {
    e.preventDefault();
    auth.signup(this.state.user)
      .then(() => {
        this.setState({ error: "" });
        this.props.history.push("/");
      })
      .catch(({ response }) => {
        this.setState({ error: response.data.message });
        console.log(this.state.error)
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
      <div className="signup">
        <div className="top-container"></div>
        <h1>Sign up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleFormChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleFormChange}
            />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default signup;
