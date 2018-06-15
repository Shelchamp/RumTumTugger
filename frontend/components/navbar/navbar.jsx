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
    } else {
      {/*if (this.props.location.pathname !='/')*/}
      button = logoutButton()
    }


    let homeButton;
    {/* CONDTTIONAL HOME STYLE */}
    const whiteHome = () =>(
      <div className="png-logo white-home">rtt</div>
    )

    const blackHome = () =>(
      <div className="png-logo black-home">rtt</div>
    )


    let navBar;
    {/* CONDTTIONAL NAV STYLE */}
    const outsideNav = () =>(
      <div className='top-nav'>
        <div className="navbar outside">
          <h1 className="logo">
            <Link to="/feed">{homeButton}</Link>
            <div className="logo-img"></div>
          </h1>

          <input
            className='search-field outside'
            type="text"
            placeholder="Search RumTumTugger"
            name="q"
            />

          {button}
        </div>
      </div>
    )

    const insideNav = () =>(
      <div className='top-nav'>
        <div className="navbar">
          <h1 className="logo">
            <Link to="/feed">{homeButton}</Link>
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
      </div>
    )


    if(this.props.location.pathname === '/login'){
      homeButton = blackHome()
      navBar = outsideNav()
      button = currentlyOnLogin()

    } else if (this.props.location.pathname === '/signup'){
      homeButton = blackHome()
      navBar = outsideNav()
      button = currentlyOnSignup()
    }else {
      homeButton = whiteHome()
      navBar = insideNav()
      button = logoutButton()
    }

    return (

        navBar

    )
  }

}

export default NavBar;
