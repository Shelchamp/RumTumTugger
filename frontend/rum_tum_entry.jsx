import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions'
import { fetchPosts, createPost } from './actions/post_actions';
import { fetchUsers } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", ()=>{



  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING
  window.user = {'username': 'hi', 'password': 'there'}
  window.post = {
    'post_type': 'text',
    'title': 'TEST TITLE',
    'body': 'TEST BODY',
    'image_url': '',
    'user_id': 34
  }
  window.login = login
  window.signup = signup
  window.logout = logout
  window.store = store
  window.fetchUsers = fetchUsers
  window.fetchPosts = fetchPosts
  window.createPost = createPost
  //TESTING

  ReactDOM.render(<Root store={store}/>, root);
});
