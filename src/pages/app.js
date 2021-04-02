import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Router } from '@reach/router';
import Layout from '../components/layout';
import PrivateRoute from '../components/privateRoute';
import Profile from '../components/profile';
import Login from '../components/login';

export default function App() {
  return (
    <Layout>
      <Router basepath="/app">
        <PrivateRoute path="/profile" component={Profile} />
        <Login path="/login" />
      </Router>
    </Layout>
  );
}
