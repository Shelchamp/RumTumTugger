import * as PostApiUtil from '../util/post_api_util';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const fetchPosts = () => dispatch =>(
  PostApiUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
)

export const createPost = (post) => dispatch =>(
  PostApiUtil.createPost(post)
    .then(post => dispatch(receivePost(post)))
)

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
})

const receiveAllPosts = (payload) => ({
  type: RECEIVE_ALL_POSTS,
  payload
})
