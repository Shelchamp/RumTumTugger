import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    //show signup
    const currentlyOnLogin = () => (
      <div>
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
        >
        <Link
          className='nav-login'
          to='/login'
          >
          Log in
        </Link>
      </div>
    );
    
    let button;
    if(this.props.location.pathname === '/login'){
      button = currentlyOnLogin()
    } else if (this.props.location.pathname ==='/signup'){
      button = currentlyOnSignup()
    }

    return (
      <div className="navbar">
            {button}
      </div>
    )
  }

}

export default NavBar;
