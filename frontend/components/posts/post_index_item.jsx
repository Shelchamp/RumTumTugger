import React from "react";
import LikeButton from "../likes/like_button";

class PostIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      numLikes : Object.keys(this.props.likes).length,
      isLiked : this.props.likes[this.props.userId]
    }
  }
  
    /*
    let user_id = this.props.post.user_id;
    let username = this.props.users.users[user_id].username;
    LOGIC TO CONDITIONALLY RENDER A PICTURE OR VIDEO
    */
  
  render(){
    
    const imagePost = () => <img src={this.props.post.image_url} />;
  
    const videoPost = () => (
      <iframe
        width="540"
        height="303.75"
        src={this.props.post.image_url}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen={true}
      />
    );
    let media;
    if (this.props.post.post_type === "image") {
      media = imagePost();
    } else if (this.props.post.post_type === "video") {
      media = videoPost();
    }
  
    {
      /*
      LOGIC TO CONDITIONALLY RENDER A PICTURE OR VIDEO END
      */
    }
    let author = this.props.author;
    if (!author) {
      author = { username: "", id: "" };
    }
  
    // ensure that there's a user, otherwise
    let userId = this.props.userId;
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
              {/* 
                EDIT BUTTON
                {editButton}
              */}
            </div>
            <div className="post-content">
              <div className="post-container">
                <div className="post-title">{this.props.post.title}</div>
                <div>
                  {/* PICTURE OR VIDEO */}
                  {media}
                </div>
                <div className="post-body">{this.props.post.body}</div>
              </div>
            </div>
            <div className="post-tags">
              <div className="post-tags-inner">tags</div>
            </div>
            <div className="post-footer">
              <div className="post-notes">
                {/* 
                  TURN NOTES INTO LIKES
                */}
                <div className="post-notes-inner">
                  {/* LIKE HEART*/}
                  <LikeButton 
                    post_id={this.props.post.id} 
                    createLike={this.props.createLike} 
                    deleteLike={this.props.deleteLike}
                    isLiked={this.state.isLiked} 
                    numLikes={this.state.numLikes}

                    />
                </div>
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
  }
}
export default PostIndexItem;
