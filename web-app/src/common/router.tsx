import React from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';

export default function Router() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={loadable(/* #LOADABLE */ () => import('./components/HomePage'))}
      />
    </Switch>
  );
}
