import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", ()=>{

  const root = document.getElementById('root');
  window.$.ajax = $.ajax
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  ReactDOM.render(<h1>Welcome To Rum Tum Tugger</h1>, root);
})
