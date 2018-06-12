import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser))
    }, err => {
      return dispatch(receiveErrors(err.responseJSON))
    })
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(currentUser => {
    return dispatch(receiveCurrentUser(currentUser))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => {
    return dispatch(logoutCurrentUser())
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  })
);

export const removeErrors = () => dispatch => (
  dispatch(clearErrors())
)


const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const clearErrors = () => ({
  type: CLEAR_ERRORS
})
