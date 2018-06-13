import React from 'react';
import {Link} from 'react-router-dom';
class PostFormNav extends React.Component {

  render(){
    return (
      <li className='post-container new-post-buttons-container'>
        <div className='new-post-buttons post post-full is-mine with-avatar new-post'>
          <nav className='post-buttons clearfix'>
            <Link to='/' className='new-post-label'>Text</Link>
            <Link to='/' className='new-post-label'>Photo</Link>
            <Link to='/' className='new-post-label'>Quote</Link>
            <Link to='/' className='new-post-label'>Link</Link>
            <Link to='/' className='new-post-label'>Chat</Link>
            <Link to='/' className='new-post-label'>Audio</Link>
            <Link to='/' className='new-post-label'>Video</Link>
          </nav>
          <div class='post-avatar tumblelog-avatar'></div>
        </div>
      </li>
    )
  }
}

export default PostFormNav;
