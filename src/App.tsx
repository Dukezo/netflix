import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_BROWSE,
} from './constants/routes';
import { useAuth } from './contexts/auth';
import { Browse, Home, SignIn } from './pages';
import SignUp from './pages/SignUp/SignUp';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Switch>
        <Route path={ROUTE_LOGIN}>
          {!user ? <SignIn /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
        <Route path={ROUTE_SIGNUP}>
          {!user ? <SignUp /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
        <Route path={`${ROUTE_BROWSE}/:filter?`}>
          {user ? <Browse /> : <Redirect to={ROUTE_HOME} />}
        </Route>
        <Route path={ROUTE_HOME}>
          {!user ? <Home /> : <Redirect to={ROUTE_BROWSE} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
