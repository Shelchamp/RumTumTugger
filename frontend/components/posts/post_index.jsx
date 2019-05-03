import React from "react";
import PostIndexItem from "./post_index_item";
// import PostFormNav from "./post_form_nav";
// import CreatePostContainer from "./create_post_container";
// import { Route, Switch, Redirect } from "react-router-dom";

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
    this.props.fetchUsers();
    // debugger
  }

  render() {
    // debugger
    
    return (
      <div className="post-index-container fade-in">
        <ol>
          {/*
              */}
          {this.props.posts.map(post => {
            // format the likes
            const likes = {};
            post.likes.forEach(like => likes[like.user_id] = true);
            return <PostIndexItem
              post={post}
              key={post.id}
              author={this.props.users[post.user_id]}
              userId={this.props.currentUser}
              likes={likes}
              createLike={this.props.createLike}
            />
          })}
        </ol>
      </div>
    );
  }
}

export default PostIndex;
