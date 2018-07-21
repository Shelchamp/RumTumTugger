import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
    this.users = [
      { email: "Josuke@jojo.com", password: "CrazyDiamond" },
      { email: "Kira@jojo.com", password: "KillerQueen" }
    ];
  }

  handleLogin(e) {
    e.preventDefault();
    const user = this.users[Math.floor(Math.random() * 2)];
    this.props.login(user).then(() => this.props.history.push("/feed"));
    setTimeout();
  }

  // DEMO LOGIN BUTTON

  render() {
    const loggedIn = () => (
      <div>
        <h3 className="welcome">Welcome to RumTumTugger</h3>
      </div>
    );

    const loggedOut = () => (
      <div>
        <h1 className="welcome-message">rtt</h1>
        <div className="button-div demo-div">
          <button className="demo-login" onClick={this.handleLogin}>
            Demo Login
          </button>
        </div>
      </div>
    );
    // debugger
    return (
      <div className="fade-in">
        {this.props.currentUser ? loggedIn() : loggedOut()}
        {/*
          {this.props.currentUser === { id: null } ? loggedOut() : loggedIn() }
          */}
      </div>
    );
  }
}

export default Greeting;
