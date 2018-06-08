import React from 'react';
import {Link} from 'react-router-dom';

class Greeting extends React.Component {

  constructor(props){
    super(props)

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

  }

  handleLogin(e){
    e.preventDefault();
    this.props.login({email: 'Josuke@jojo.com', password: 'CrazyDiamond'})
      .then(this.props.history.push("/"))
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout()
      .then(this.props.history.push("/"))
  }



  render () {
    const loggedIn = () => (
      <div >
        <h2>Welcome, {this.props.currentUser.username}.</h2>
        <h3>Shine on, you Crazy Diamond.</h3>
        <div className='button-div'>
          <button
            className='demo-login'
            onClick={this.handleLogout}
            >LOGOUT</button>
        </div>
      </div>
    );

    const loggedOut = () => (
      <div>
        <h2>You're not logged in</h2>
        <div className='session-link'>
          <Link to='/login' className='lank'>Login</Link>
          <Link to='/signup'className='lank'>Sign Up</Link>
        </div>
        <div className='button-div'>
          <button
            className='demo-login'
            onClick={this.handleLogin}
            >Demo Login</button>
        </div>
      </div>
    );
    return ( this.props.currentUser ? loggedIn() : loggedOut()

    )
  }

}


export default Greeting;
