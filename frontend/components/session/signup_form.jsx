import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {
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
    this.props.signup(this.state)
      .then(this.props.history.push("/"))
  }

  render () {
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <div className='signup'>
          <form  onSubmit={this.handleSubmit} >
            <div>
              <input
                type='text'
                placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                />
            </div>
            <div>
              <input
                type='text'
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                />
            </div>
            <div>
              <input
                type='text'
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                />
            </div>
            <div>
              <button type='submit'>Sign up</button>
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
