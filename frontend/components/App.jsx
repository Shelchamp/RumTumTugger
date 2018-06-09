import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
// import Modal from './modal/modal';

const App = () => (
  <div>
    <Route path="/" component={GreetingContainer}/>
    <Switch>
      <Route exact path="/feed" component={PostIndexContainer}/>
      <Route path='/login' component={LoginFormContainer}/>
      <Route path='/signup' component={SignupFormContainer}/>
    </Switch>
  </div>
);

export default App;
