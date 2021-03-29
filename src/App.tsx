import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_SIGNUP } from './constants/routes';
import { Home, SignIn } from './pages';
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE_HOME} component={Home} exact />
        <Route path={ROUTE_LOGIN} component={SignIn} />
        <Route path={ROUTE_SIGNUP} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
