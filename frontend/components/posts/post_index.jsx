import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

  componentDidMount(){
    this.props.fetchPosts();
    this.props.fetchUsers();
  }

  render(){
    return (
      <div className="post-index-container fade-in">
        <ol>
          {
            this.props.posts.map( post => (
              <PostIndexItem
                post={post}
                key={post.id}

              />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default PostIndex
