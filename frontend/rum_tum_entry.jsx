import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", ()=>{

  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;


  window.$.ajax = $.ajax
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome To Rum Tum Tugger</h1>, root);
})
