import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from '../pages/Main/Main';
import Details from '../pages/Details/Details';

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/' exact component={ Main } />
            <Route path='/details/:id' exact component={ Details } />
        </Switch>
    </Router>
);

export default Routes;
