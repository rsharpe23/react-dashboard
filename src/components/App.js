import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// eslint-disable-next-line import/order
import ProtectedRoute from './ProtectedRoute';

import Dashboard from '@Dashboard';
import Login from '@Login';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <h1>Home</h1>
        </Route> */}

        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;