import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import DashboardAdm from '../pages/DashboardAdm';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboardadmin" component={DashboardAdm} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}