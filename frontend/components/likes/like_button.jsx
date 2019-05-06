import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked : this.props.isLiked,
      numLikes : this.props.numLikes
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
    const isLiked = this.state.isLiked;
    let numLikes =  this.state.numLikes;
    if (!isLiked) {
      // If it's currently not liked...
      numLikes++;
      this.props.createLike({ post_id: this.props.post_id }).then(
        setTimeout(() => {
          this.setState({ 
            isLiked: !this.state.isLiked, 
            numLikes: numLikes })
        }, 100)
      )
    } else {
      // If it's already liked...
      numLikes--;
      this.props.deleteLike({ post_id: this.props.post_id }).then(
        setTimeout(() => {
          this.setState({
            isLiked: !this.state.isLiked,
            numLikes: numLikes
          });
        }, 100)
      );
    }
  }
  
  render() {
    const isLiked = this.state.isLiked;
    
    // Conditionally render like button. Prevent from liking twice
    let handleClick = this.handleClick // Implement delete here
    
    
    // Count the number of likes
    let numLikes = this.state.numLikes;
    // These variables will hold the conditionally rendering text
    let likedStyle = "";
    let you = isLiked ? "You" : "";
    let other = "";
    let person = "person";
    let and = "";
    // Check if the current user has liked this post
    // If the current user liked this post, alter display text
    if (isLiked) {
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

    const text = this.state.numLikes === 0 ? "" : `${you} ${and} ${numLikes} ${other} ${person} liked this`;

    return (
      <ul>
        {/* LIKE HEART*/}
        <li className="likes-list">
          <span className={`${likedStyle} like-heart`} onClick={handleClick}>&lt;3</span> {text}
        </li>
      </ul>
    )
  }
}

export default LikeButton;
