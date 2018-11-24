import React from 'react';
import { Router, browserHistory, Route } from 'react-router';

import HomeContainer from './home';
import PupContainer from './pups';

// The parent route is at '/' and is linked to the parent App component
// The HomeContainer exists at the root, and all the other containers
// can be found at their assigned paths
export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={HomeContainer} />
      <Route path="pups" component={PupContainer} />
    </Router>
  );
}
