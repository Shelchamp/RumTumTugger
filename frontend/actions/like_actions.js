import * as LikeApiUtil from "../util/like_api_util";
export const RECEIVE_LIKE = "RECEIVE_LIKE";

export const createLike = post => dispatch => {
  LikeApiUtil.createLike(post).then(like => dispatch(receiveLike(like)));
};

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});
