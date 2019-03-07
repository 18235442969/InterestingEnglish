import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import App from '../page/app/App';
import Study from '../page/study/Index';
import Login from '../page/login/Index';

export default () => {
  return (
    <Switch>
      <Route exact path='/app' component={ App }/>
      <Route exact path='/study' component={ Study }/>
      <Route exact path='/login' component={ Login }/>
      <Redirect to="/login" />
    </Switch>
  )
}

