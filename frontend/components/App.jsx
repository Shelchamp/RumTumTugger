import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PostIndexContainer from './posts/post_index_container';
import NavBarContainer from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import CreatePostContainer from './posts/create_post_container';
import PostFormNav from './posts/post_form_nav';
const App = () => (
  <div className="fullscreen">

    <Route path="/" component={NavBarContainer}/>
    <Route path="/" component={GreetingContainer}/>
    <Route path="/feed" component={PostFormNav}/>
    <Route path="/feed/textform" component={CreatePostContainer}/>
    <Switch>
      <AuthRoute path='/signup' component={SignupFormContainer}/>
      <AuthRoute path='/login' component={LoginFormContainer}/>
      <ProtectedRoute path="/feed" component={PostIndexContainer}/>
      <Redirect exact to='/login' />
    </Switch>

  </div>
);

export default App;
