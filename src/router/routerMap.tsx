import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import App from '../page/app/App';
import Home from '../page/home/Index';
import Login from '../page/login/Index';
import Study from '../page/study/Index';

export default () => {
  return (
    <Switch>
      <Route exact path='/app' component={ App }/>
      <Route exact path='/login' component={ Login }/>
      <Route exact path='/home' component={ Home }/>
      <Route path='/study' component={ Study } />
      <Redirect to="/login" />
    </Switch>
  )
}

