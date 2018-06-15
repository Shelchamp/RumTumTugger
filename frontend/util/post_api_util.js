export const fetchPosts = () =>{
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}

export const createPost = (post) =>{
  return $.ajax({
    method: 'POST',
    url: `/api/users/${post.user_id}/posts`,
    data: {post},
    // contentType: false,
    // processData: false
  })
}
