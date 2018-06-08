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
      .then(this.props.history.push("/"))
  }

  render () {
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Email'
            value={this.state.username}
            onChange={this.update('email')}
            />
          <input
            type='text'
            placeholder='Password'
            value={this.state.password}
            onChange={this.update('password')}
            />
          <button type='submit'>Next</button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm);
