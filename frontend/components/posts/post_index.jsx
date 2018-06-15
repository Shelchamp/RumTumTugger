import React from 'react';
import PostIndexItem from './post_index_item';
import PostFormNav from './post_form_nav';
import CreatePostContainer from './create_post_container';
import {Route, Switch, Redirect} from 'react-router-dom';
class PostIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
    // debugger
  }


  render(){
    // debugger
    return (
      <div className="post-index-container fade-in">
        <ol>
            {/*
              */}
          {
            this.props.posts.map( post => (
              <PostIndexItem
                post={post}
                key={post.id}
                author={this.props.users[post.user_id]}

              />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default PostIndex
