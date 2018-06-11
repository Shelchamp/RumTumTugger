import React from 'react';

const PostIndexItem = props => (
  <li className="post-index-item">
    <div className="post post-full">
      <div className="post-avatar">
        <div className="post-avatarwrapper"></div>
      </div>
      <div className="post-wrapper">
        <div className="post-header">
          <div className="post-info">TEST USERNAME</div>
        </div>
        <div className="post-content">
          <div className="post-container">
            <div className="post-title">{props.post.title}</div>
            <div className="post-body">{props.post.body}</div>
          </div>
        </div>
        <div className="post-tags">
          <div className="post-tags-inner">
            TAGS
          </div>
        </div>
        <div className="post-footer">
          <div className="post-notes">
            <div className="post-notes-inner">NOTES</div>
          </div>
          <div className="post-controls">
            <div className="post-controls-inner">
              <div className="post-control post-controller-icon">ICON</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

export default PostIndexItem;
