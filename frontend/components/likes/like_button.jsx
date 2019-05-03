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
    // These variables will hold the conditionally rendering text
    let likedStyle = "";
    let you = this.props.isLiked ? "You" : "";
    let other = "";
    let person = "person";
    let and = "";
    // Check if the current user has liked this post
    // If the current user liked this post, alter display text
    if (this.props.isLiked) {
      // If the current user liked this post, add styling
      likedStyle = "liked-post";
      // you = "You";
      and = numLikes > 1 ? "and" : "";
      other = numLikes > 1 ? "other" : "";
      if (numLikes === 1) {
        person = "";
      } 
      numLikes--;
      numLikes = numLikes === 0 ? "" : numLikes;
    } 
    if (numLikes > 1) {
      person = "people";
    }

    const text = this.props.numLikes === 0 ? "" : `${you} ${and} ${numLikes} ${other} ${person} liked this`;

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
