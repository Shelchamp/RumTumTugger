import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import NavBar from './navbar/navbar';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="fullscreen fade-in">

    <Route path="/" component={NavBar}/>
    <Route path="/" component={GreetingContainer}/>
    <Switch>
      <ProtectedRoute exact path="/feed" component={PostIndexContainer}/>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <Redirect to='/login' />
    </Switch>

  </div>
);

export default App;
