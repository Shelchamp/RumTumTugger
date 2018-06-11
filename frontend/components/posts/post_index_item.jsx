import React from 'react';

const PostIndexItem = props => (
  <div className='post-index-item'>
    <div claaName="post-avatar">
      <div className="post-avatarwrapper">
      </div>
    </div>
    <div className="post-wrapper">
      <h3>{props.post.title}</h3>
      <h1>{props.post.body}</h1>
    </div>
  </div>
);

export default PostIndexItem;
