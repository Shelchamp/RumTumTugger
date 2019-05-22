import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {
      sInput : ""
  }
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleInput(e) {
    this.setState({sInput : e.target.value})
  }

  // Autocomplete
  filterSearch(){
    let matches = this.props.users.filter(user =>{
      let input = this.state.sInput.toLocaleLowerCase();
      // console.log(user)
      if (input === user.slice(0, input.length).toLocaleLowerCase()) return user; 
    })
    return matches;
  }

  
  
  render() {
    // Search results
    const Results = props => {
      let dataItems = props.map((data, i) =>{
        return <li key={i}>{data}</li>
      })
      return <ul>{dataItems}</ul>
    } 
    const results = this.state.sInput === "" ? [] : Results(this.filterSearch());
    // Search bar
    const searchBar = <input
      className='search-field'
      type="text"
      value= {this.state.sInput}
      placeholder="Search RumTumTugger"
      name="q"
      onChange={this.handleInput.bind(this)}
    />

    //show signup
    const currentlyOnLogin = () => (
      <div className="nav-right">
        <Link className="nav-signup" to="/signup">
          Sign up
        </Link>
      </div>
    );
    // show login
    const currentlyOnSignup = () => (
      <div className="nav-right">
        <Link className="nav-login" to="/login">
          Log in
        </Link>
      </div>
    );

    const logoutButton = () => (
      <div className="nav-right">
        <button className="nav-logout" onClick={this.handleLogout}>
          LOGOUT
        </button>
      </div>
    );

    let button;
    if (this.props.location.pathname === "/login") {
      button = currentlyOnLogin();
    } else if (this.props.location.pathname === "/signup") {
      button = currentlyOnSignup();
    } else {
      {
        /*if (this.props.location.pathname !='/')*/
      }
      button = logoutButton();
    }

    let homeButton;
    {
      /* CONDTTIONAL HOME STYLE */
    }
    const whiteHome = () => <div className="png-logo white-home">rtt</div>;

    const blackHome = () => <div className="png-logo black-home">rtt</div>;

    let navBar;
    {
      /* CONDTTIONAL NAV STYLE */
    }
    const outsideNav = () => (
      <div className="top-nav">
        <div className="navbar outside">
          <h1 className="logo">
            <Link to="/feed">{homeButton}</Link>
            <div className="logo-img" />
          </h1>

          {/* SEARCH BAR
            <input
              className="search-field outside"
              type="text"
              placeholder="Search RumTumTugger"
              name="q"
            />
          */}
          
          {button}
        </div>
      </div>
    );

    const insideNav = () => (
      <div className="top-nav">
        <div className="navbar">
          <h1 className="logo">
            <Link to="/feed">{homeButton}</Link>
            <div className="logo-img" />
          </h1>

          {/* SEARCH BAR
            <input
              className='search-field'
              type="text"
              placeholder="Search RumTumTugger"
              name="q"
              />
          */}
          {searchBar}
          {button}
        </div>
      </div>
    );

    if (this.props.location.pathname === "/login") {
      homeButton = blackHome();
      navBar = outsideNav();
      button = currentlyOnLogin();
    } else if (this.props.location.pathname === "/signup") {
      homeButton = blackHome();
      navBar = outsideNav();
      button = currentlyOnSignup();
    } else {
      homeButton = whiteHome();
      navBar = insideNav();
      button = logoutButton();
    }

    return ( 
      <div>
        <div className="div-fix">{navBar}</div>
        <article>{results}</article>
      </div>
    )
      
  }
}

export default NavBar;
