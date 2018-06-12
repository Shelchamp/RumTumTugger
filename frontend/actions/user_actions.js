import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

export const fetchUsers = () => dispatch =>(
  UserApiUtil.fetchUsers()
    .then(users => dispatch(receiveAllUsers(users)))
)

const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
})
