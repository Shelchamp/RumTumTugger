import React from 'react';
import ReactDOM from 'react-dom';
// import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import { login, signup, logout } from './actions/session_actions'

document.addEventListener("DOMContentLoaded", ()=>{

  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.user = { username: 'user1',
                  email: '123',
                  password: '123456'
  }


  // window.$.ajax = $.ajax
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<Root store={store}/>, root);
});
