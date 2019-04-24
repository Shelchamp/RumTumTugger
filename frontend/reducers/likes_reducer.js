import { RECEIVE_LIKE, RECEIVE_ALL_LIKES } from "../actions/like_actions";

import merge from "lodash/merge";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LIKES:
      return action.likes;

    case RECEIVE_LIKE:
      return merge({}, state, action.like);

    default:
      return state;
  }
};

export default likesReducer;
