import React from 'react';
import {withRouter} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) =>{
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state)
      .then(this.props.history.push("/feed"))
  }

  renderErrors(){
    return(
      <ul className="signup-errors">
        {
          this.props.errors.map((error, i) =>(
            <li
              key={`error-${i}`}
              className="errors"
              >
              {error}
            </li>
          ))
        }
      </ul>
    )
  }

  render () {
    return (
      <div>
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                className='input-login-email'
                type='text'
                placeholder='Email'
                value={this.state.username}
                onChange={this.update('email')}
                />
            </div>
            <div>
              <input
                className='input-login-password'
                type='text'
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </div>
            {/* ERRORS */}
              {this.renderErrors()}
            {/* ERRORS */}
            <div>
              <button
                className='next'
                type='submit'
                >Next
              </button>
            </div>
          </form>
        </div>
        <div className='bg-login'></div>
      </div>


    )
  }
}

export default withRouter(LoginForm);
