import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", ()=>{

  const root = document.getElementById('root');
  window.$.ajax = $.ajax

  ReactDOM.render(<h1>Welcome To Rum Tum Tugger</h1>, root);
})
