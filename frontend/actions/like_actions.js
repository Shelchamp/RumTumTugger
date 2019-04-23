import * as LikeApiUtil from "../util/like_api_util";
// import { RECEIVE_ALL_POSTS } from "./post_actions";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

export const createLike = post => dispatch => {
  LikeApiUtil.createLike(post).then(like => dispatch(receiveLike(like)));
};

export const fetchLikes = () => {
  dispatch(
    LikeApiUtil.fetchLikes().then(likes => dispatch(receiveAllLikes(likes)))
  );
};

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

export default receiveLike;
