import React from 'react';

const PostIndexItem = props => (
  <div className='post-index-item'>
    <h2>{props.post.title}</h2>
    <h3>{props.post.body}</h3>
  </div>
);

export default PostIndexItem;
