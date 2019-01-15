import { RECEIVE_LIKE } from "../actions/like_actions";

import merge from "lodash/merge";

const likesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKE:
      return merge({}, state, action.like);

    default:
      return state;
  }
};

export default likesReducer;
