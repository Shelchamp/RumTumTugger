import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.state = props.form;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    debugger
    this.props.removeErrors();
  }

  update(field){
    return (e) =>{
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state)
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

        <div className='signup'>
          <form  onSubmit={this.handleSubmit} >
            <div>
              <input
                className='input-signup-email'
                type='text'
                placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                />
            </div>
            <div>
              <input
                className='input-signup-password'
                type='text'
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </div>
            <div>
              <input
                className='input-signup-username'
                type='text'
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                />
            </div>
            {/* ERRORS */}
              {this.renderErrors()}
            {/* ERRORS */}
            <div>
              <button
                className='signup-button'
                type='submit'
                >Sign up</button>
            </div>
          </form>
        </div>
        <div className='bg-signup'>
        </div>
      </div>
    )
  }
}

export default withRouter(SignupForm);
