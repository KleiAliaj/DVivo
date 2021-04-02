import React, { useState, useCallback } from 'react';
import { navigate } from 'gatsby';
import { handleLogin, isLoggedIn } from '../services/auth';

export default function Login() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleUpdate = useCallback((event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }, [state, setState]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    handleLogin(state);
    navigate('/app/profile');
  }, [state]);

  if (isLoggedIn()) {
    navigate('/app/profile');
    return null;
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={handleSubmit}
      >
        <label htmlFor="login-username">
          <input
            id="login-username"
            type="text"
            name="username"
            onChange={handleUpdate}
          />
          Username
        </label>
        <label htmlFor="login-password">
          <input
            id="login-password"
            type="password"
            name="password"
            onChange={handleUpdate}
          />
          Password
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  );
}
