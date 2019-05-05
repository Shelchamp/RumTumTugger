import * as LikeApiUtil from "../util/like_api_util";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const DELETE_LIKE = "DELETE_LIKE";

export const createLike = post => dispatch => (
  LikeApiUtil.createLike(post)
    .then(like => dispatch(receiveLike(like)))
);

export const fetchLikes = () => dispatch => (
  LikeApiUtil.getLikes()
    .then(likes => dispatch(receiveAllLikes(likes)))
);

export const deleteLike = post => dispatch => (
  LikeApiUtil.deleteLike(post)
    .then(like => dispatch(receiveDeleteLike(like)))
);

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const receiveAllLikes = likes => ({
  type: RECEIVE_ALL_LIKES,
  likes
});

const receiveDeleteLike = like => ({
  type: DELETE_LIKE,
  like
});

export default receiveLike;
