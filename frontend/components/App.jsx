import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
// import Modal from './modal/modal';

const App = () => (
  <div>
    <header>
      <h1>Welcome To Rum Tum Tugger</h1>
      <GreetingContainer />
      <Switch>
        <Route exact path='/login' component={LoginFormContainer}/>
        <Route exact path='/signup' component={SignupFormContainer}/>
      </Switch>
    </header>
  </div>
);

export default App;
