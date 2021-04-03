import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_BROWSE,
} from './constants/routes';
import { Browse, Home, SignIn } from './pages';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_HOME} component={Home} exact />
        <Route path={ROUTE_LOGIN} component={SignIn} />
        <Route path={ROUTE_SIGNUP} component={SignUp} />
        <Route path={ROUTE_BROWSE} component={Browse} />
      </Switch>
    </Router>
  );
}

export default App;
