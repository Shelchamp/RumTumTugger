import React from 'react';
import {Link} from 'react-router-dom';
class PostFormNav extends React.Component {

  render(){
    return (
      <li className='new-post-buttons-container'>
        <div className='new-post-buttons post post-full is-mine with-avatar new-post'>
          <nav className='post-buttons clearfix'>
            <Link to='/feed/textform' className='new-post-label'>
              <i
                className='icon-post-text'
                >A</i>
              <span
                className='new-post-label-text'>
                Text
              </span>
            </Link>
            <Link to='/' className='new-post-label'>Photo</Link>
            <Link to='/' className='new-post-label'>Quote</Link>
            <Link to='/' className='new-post-label'>Link</Link>
            <Link to='/' className='new-post-label'>Chat</Link>
            <Link to='/' className='new-post-label'>Audio</Link>
            <Link to='/' className='new-post-label'>Video</Link>
          </nav>
          <div className='post-avatar tumblelog-avatar'></div>
        </div>
      </li>
    )
  }
}

export default PostFormNav;
