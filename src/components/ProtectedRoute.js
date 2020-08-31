import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from 'src/hooks';

const ProtectedRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={props => (
        isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      )}
    />
  );
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;