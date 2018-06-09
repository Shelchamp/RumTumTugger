import {
  RECEIVE_ALL_POSTS
} from '../actions/post_actions';

import merge from 'lodash/merge';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){

    case RECEIVE_ALL_POSTS:
      return action.posts

    default:
      return state;
  }
}

export default postsReducer;
