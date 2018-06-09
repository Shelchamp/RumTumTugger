import * as PostApiUtil from '../util/post_api_util';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const fetchPosts = () => dispatch =>(
  PostApiUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)))
)

const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
})
