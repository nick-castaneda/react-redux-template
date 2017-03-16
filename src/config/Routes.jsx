import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import { HomeContainer } from '../components/home';
import { LandoContainer } from '../components/lando';

// The parent route is at '/' and is linked to the parent App component
// The HomeContainer exists at the root, and all the other containers
// can be found at their assigned paths
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
    <Route path="lando" component={LandoContainer} />
  </Route>
);
