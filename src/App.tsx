import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ScrollToTop } from './components';
import {
  ROUTE_HOME,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_BROWSE,
} from './constants/routes';
import { useAuth } from './contexts/auth';
import { Browse, Home, SignIn, SignUp } from './pages';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <ScrollToTop />
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
