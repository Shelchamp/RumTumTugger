import React from 'react';
import {withRouter} from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.post
    this.handleSubmit = this.handleSubmit.bind(this);
    // debugger
  }

  update(field){
    return (e) =>{
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
    .then(this.props.history.push("/"))
  }

  render (){
    return (
      <div className='fade-in'>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.title}
            onChange={this.update('title')}
            placeholder='Title'
            />
          <textarea
            value={this.state.body}
            onChange={this.update('body')}
            placeholder='Your text here'
            />
          <button type='submit'>POST</button>
        </form>
      </div>
    )
  }

}

export default withRouter(PostForm);
