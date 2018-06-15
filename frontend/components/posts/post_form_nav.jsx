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
                <img src="https://i.imgur.com/jbKwECr.png"/>
              </i>
              <span
                className='new-post-label-text'>
                Text
              </span>
            </Link>
            <Link to='/feed/imageform' className='new-post-label' id='new-post-label-photo'>
              <i className='icon-post-photo'>
                <img src="https://i.imgur.com/B1h1t9v.png"/>
              </i>
              <span
                className='new-post-label-photo'>
                Photo
              </span>
            </Link>
            <Link to='/feed/quoteform' className='new-post-label' id='new-post-label-quote'>
              <i className='icon-post-quote cold'>
                <img src="https://i.imgur.com/69rvy98.png"/>
              </i>
              <span
                className='new-post-label-quote'>
                Quote
              </span>
            </Link>
            <Link to='/feed/linkform' className='new-post-label' id='new-post-label-link'>
              <i className='icon-post-link cold'>
                <img src="https://i.imgur.com/V2UN4f9.png"/>
              </i>
              <span
                className='new-post-label-link'>
                Link
              </span>
            </Link>
            <Link to='/feed/chatform' className='new-post-label' id='new-post-label-chat'>
              <i className='icon-post-chat cold'>
                <img src="https://i.imgur.com/MWPKr7s.png"/>
              </i>
              <span
                className='new-post-label-chat'>
                Chat
              </span>
            </Link>
            <Link to='/feed/audioform' className='new-post-label' id='new-post-label-audio'>
              <i className='icon-post-audio cold'>
                <img src="https://i.imgur.com/kaNlsxF.png" />
              </i>
              <span
                className='new-post-label-audio'>
                Audio
              </span>
            </Link>
            <Link to='/feed/videoform' className='new-post-label' id='new-post-label-video'>
              <i className='icon-post-video'>
                <img src="https://i.imgur.com/pMVNlLX.png" />
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
