import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
  e.preventDefault();
  console.log("The link was clicked.");
  console.log("here are the likes", this.props.numLikes);
  
  }

  
  render() {
    // Count the number of likes
    let numLikes = this.props.numLikes;
    let likedStyle = "";
    let likedText = "";
    let other = "";
    // Check if the current user has liked this post
    if (this.props.isLiked) {
      // If the current user liked this post, alter display text
      numLikes--;
      likedText = "You and ";
      other = " other "
      // If the current user liked this post, add styling
      likedStyle = "liked-post";
    } 

    const text = numLikes === 0 ? "" : `${likedText}${numLikes}${other} people liked this`;

    return (
      <ul>
        {/* LIKE HEART*/}
        <li className="likes-list">
          <span className={`${likedStyle} like-heart`} onClick={this.handleClick}>&lt;3</span> {text}
        </li>
      </ul>
    )
  }
}

export default LikeButton;
