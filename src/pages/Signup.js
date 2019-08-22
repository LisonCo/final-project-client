import React, { Component } from "react";
import './signup.css'
import Auth from "../utils/Auth";
const auth = new Auth();

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        phone: "",
        emailAddress: "",
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
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={this.state.firstName}
              onChange={this.handleFormChange}
              required
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleFormChange}
              required
            />
          </div>

          <div>
            <label>Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="00 00 00 00 00"
              value={this.state.phoneNumber}
              onChange={this.handleFormChange}
              pattern='^\+?\d{10,13}'
              required
            />
          </div>

          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="emailAddress"
              placeholder="bonjour@la-cagette.fr"
              value={this.state.emailAddress}
              onChange={this.handleFormChange}
              required
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
              required
            />
          </div>

          <div className="input">
            <input type="submit" value="Submit" className='button' />
          </div>
          <img src='./images/bottles.png' alt="bottles"/>
        </form>
      </div>
    );
  }
}

export default Signup;
