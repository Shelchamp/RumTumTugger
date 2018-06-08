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
      .then(this.props.history.push("/signup"))
  }

  render () {
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Email'
            value={this.state.password}
            onChange={this.update('email')}
            />
          <input
            type='text'
            placeholder='Password'
            value={this.state.username}
            onChange={this.update('username')}
            />
          <input
            type='text'
            placeholder='Username'
            value={this.state.password}
            onChange={this.update('password')}
            ></input>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignupForm);
