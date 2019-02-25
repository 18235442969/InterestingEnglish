import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import App from '../page/app/App';

export default () => {
  return (
    <Switch>
      <Route exact path='/app' component={ App }/>
      <Redirect to="/app" />
    </Switch>
  )
}

