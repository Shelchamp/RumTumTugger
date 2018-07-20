import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    this.props
      .login({ email: "Josuke@jojo.com", password: "CrazyDiamond" })
      .then(() => this.props.history.push("/feed"));
    setTimeout();
  }

  // DEMON LOGIN BUTTON

  render() {
    const loggedIn = () => (
      <div>
        <h3 id="hideMe" className="welcome">
          Welcome to Rum Tum Tugger
        </h3>
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
