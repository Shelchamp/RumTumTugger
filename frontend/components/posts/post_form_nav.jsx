import React from 'react';
import {Link} from 'react-router-dom';
class PostFormNav extends React.Component {

  render(){
    return (
      <li className='new-post-buttons-container'>
        <div className='new-post-buttons post post-full is-mine with-avatar new-post'>
          <nav className='post-buttons clearfix'>
            <Link to='/feed/textform' className='new-post-label' id='new-post-label-text'>
              <i className='icon-post-text'>

              </i>
              <span
                className='new-post-label-text'>
                Text
              </span>
            </Link>
            <Link to='/feed/imageform' className='new-post-label' id='new-post-label-photo'>
              <i className='icon-post-photo'>

              </i>
              <span
                className='new-post-label-photo'>
                Photo
              </span>
            </Link>
            <Link to='/' className='new-post-label' id='new-post-label-quote'>
              <i className='icon-post-quote'>

              </i>
              <span
                className='new-post-label-quote'>
                Quote
              </span>
            </Link>
            <Link to='/' className='new-post-label' id='new-post-label-link'>
              <i className='icon-post-link'>

              </i>
              <span
                className='new-post-label-link'>
                Link
              </span>
            </Link>
            <Link to='/' className='new-post-label' id='new-post-label-chat'>
              <i className='icon-post-chat'>

              </i>
              <span
                className='new-post-label-chat'>
                Chat
              </span>
            </Link>
            <Link to='/' className='new-post-label' id='new-post-label-audio'>
              <i className='icon-post-audio'>

              </i>
              <span
                className='new-post-label-audio'>
                Audio
              </span>
            </Link>
            <Link to='/' className='new-post-label' id='new-post-label-video'>
              <i className='icon-post-video'>

              </i>
              <span
                className='new-post-label-video'>
                Video
              </span>
            </Link>
          </nav>
          <div className='post-avatar tumblelog-avatar'></div>
        </div>
      </li>
    )
  }
}

export default PostFormNav;
