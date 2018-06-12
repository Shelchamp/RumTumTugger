import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout(e){
    e.preventDefault();
    this.props.logout()
      .then(this.props.history.push("/login"))
  }


  render() {
    //show signup
    const currentlyOnLogin = () => (
      <div
        className='nav-right'
        >
        <Link
          className='nav-signup'
          to='/signup'
          >
          Sign up
        </Link>
      </div>
    );
    // show login
    const currentlyOnSignup = () => (
      <div
        className='nav-right'
        >
        <Link
          className='nav-login'
          to='/login'
          >
          Log in
        </Link>
      </div>
    );

    const logoutButton = () =>(
      <div className='nav-right'>
        <button
          className='nav-logout'
          onClick={this.handleLogout}
          >LOGOUT</button>
      </div>
    )

    let button;
    if(this.props.location.pathname === '/login'){
      button = currentlyOnLogin()
    } else if (this.props.location.pathname ==='/signup'){
      button = currentlyOnSignup()
    } else if (this.props.location.pathname ==='/feed'){
      button = logoutButton()
    }

    return (
      <div className="navbar">
        <h1 className="logo">
          <Link to="/feed"><div className="png-logo">rtt</div></Link>
          <div className="logo-img"></div>
        </h1>

          <input
            className='search-field'
            type="text"
            placeholder="Search RumTumTugger"
            name="q"
            />

        {button}
      </div>
    )
  }

}

export default NavBar;
