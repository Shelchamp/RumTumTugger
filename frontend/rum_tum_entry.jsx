import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions'
import { fetchPosts } from './actions/post_actions';
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
  window.store = store
  window.fetchPosts = fetchPosts
  window.fetchUsers = fetchUsers
  //TESTING

  ReactDOM.render(<Root store={store}/>, root);
});
