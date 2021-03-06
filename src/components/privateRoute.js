import React from 'react';
import { navigate } from 'gatsby';
import { isLoggedIn } from '../services/auth';

export default function PrivateRoute({ component: Component, location, ...rest }) {
  if (!isLoggedIn() && location.pathname !== '/app/login') {
    navigate('/app/login');
    return null;
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...rest} />
  );
}
