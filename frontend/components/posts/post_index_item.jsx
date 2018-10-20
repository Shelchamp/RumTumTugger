import React from "react";

const PostIndexItem = props => {
  {
    /*
    let user_id = props.post.user_id;
    let username = props.users.users[user_id].username;
    LOGIC TO CONDITIONALLY RENDER A PICTURE OR VIDEO
    */
  }

  const imagePost = () => <img src={props.post.image_url} />;

  const videoPost = () => (
    <iframe
      width="540"
      height="303.75"
      src={props.post.image_url}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen={true}
    />
  );
  let media;
  if (props.post.post_type === "image") {
    media = imagePost();
  } else if (props.post.post_type === "video") {
    media = videoPost();
  }

  {
    /*
    LOGIC TO CONDITIONALLY RENDER A PICTURE OR VIDEO END
    */
  }
  let author = props.author;
  if (!author) {
    author = { username: "", id: "" };
  }

  // ensure that there's a user, otherwise
  let userId = props.userId;
  if (!userId) {
    userId = "";
  }

  // conditional edit button
  const edit = () => <button className="edit-button">Edit</button>;

  let editButton;
  // if (userId === author.id) {
  //   editButton = edit();
  // }
  editButton = userId === author.id ? edit() : <div />;

  return (
    <li className="post-index-item">
      <div className="post post-full">
        <div className="post-avatar">
          <div className="post-avatarwrapper" />
        </div>
        <div className="post-wrapper">
          <div className="post-header">
            <div className="post-author">
              {author.username}
              {/*
                NEED TO IMPLEMENTED 10 / 18
              */}
            </div>
            {editButton}
          </div>
          <div className="post-content">
            <div className="post-container">
              <div className="post-title">{props.post.title}</div>
              <div>
                {/* PICTURE OR VIDEO */}
                {media}
              </div>
              <div className="post-body">{props.post.body}</div>
            </div>
          </div>
          <div className="post-tags">
            <div className="post-tags-inner">tags</div>
          </div>
          <div className="post-footer">
            <div className="post-notes">
              <div className="post-notes-inner">notes</div>
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
};
export default PostIndexItem;
