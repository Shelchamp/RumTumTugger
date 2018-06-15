import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props){
    super(props)
    // debugger
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin(e){
    e.preventDefault();
    this.props.login({email: 'Josuke@jojo.com', password: 'CrazyDiamond'})
      .then(this.props.history.push("/feed"))
  }

  // handleLogout(e){
  //   e.preventDefault();
  //   this.props.logout()
  //     .then(this.props.history.push("/login"))
  // }



  render () {
    const loggedIn = () => (
      <div >
        <h3 className="welcome">Welcome to Rum Tum Tugger</h3>

        {/*<div className='button-div'>
          <button
            className='demo-login'
            onClick={this.handleLogout}
            >LOGOUT</button>
        </div>
        <div className='bg-dash'>
        </div>*/}
      </div>
    );

    const loggedOut = () => (
      <div>
        {/*<h2 className="welcome">You're not logged in</h2>
        <div className='session-link'>
          <Link to='/login' className='lank'>Login</Link>
          <Link to='/signup'className='lank'>Sign Up</Link>
        </div>
      */}
        <div className='button-div'>
          <button
            className='demo-login'
            onClick={this.handleLogin}
            >Demo Login</button>
        </div>
      </div>
    );
    return (
      <div className="fade-in">

        {this.props.currentUser ? loggedIn() : loggedOut()}
      </div>

    )
  }

}


export default Greeting;
