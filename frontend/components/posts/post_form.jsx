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
      <li className='post-form post new-post-buttons-container post-forms-above-glass'>
        <div className='post-form post-form-text post post-full fade-in'>
          <div className='post-margin'>
            <div className='post-form-avatar'>
              <div className='channel-avatar avatar-container'>{/* AVATAR IMAGE*/}</div>
              <div className='primary-avatar avatar-container'>{/* AVATAR IMAGE*/}</div>
            </div>
          </div>
          <div className='post-container'>
            <div className='post-container-inner post'>
              <div className='post-form-header clearfix'>
                <div className='post-form-form post-content-text'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='title-field'>
                      <div className='editor-wrapper'>
                        <div className='editor-slot'>
                          <div className='editor editor-plaintext'>
                          </div>
                        </div>
                      </div>
                      <input
                        className='create-text-post-title'
                        type='text'
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder='Title'
                        />
                    </div>
                    <textarea
                      className='create-text-post-body'
                      value={this.state.body}
                      onChange={this.update('body')}
                      placeholder='Your text here'
                      />
                    <button type='submit'>POST</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
     </li>
    )
  }

}

export default withRouter(PostForm);
