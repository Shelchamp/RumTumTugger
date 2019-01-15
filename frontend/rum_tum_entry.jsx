import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

// TESTING
import receiveLike from "./actions/like_actions";
// TESTING

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
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
  const newLike = {
    id: 1,
    user_id: 48,
    post_id: 165
  };
  window.newLike = newLike;
  window.store = store;
  window.receiveLike = receiveLike;
  //TESTING

  ReactDOM.render(<Root store={store} />, root);
});
