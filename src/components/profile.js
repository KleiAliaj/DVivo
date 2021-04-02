import React from 'react';
import { getUser } from '../services/auth';

export default function Profile() {
  return (
    <>
      <h1>Your profile</h1>
      <ul>
        <li>
          Name:
          <span data-testid="profile-user-name">{getUser().name}</span>
        </li>
        <li>
          E-mail:
          <span data-testid="profile-user-email">{getUser().email}</span>
        </li>
      </ul>
    </>
  );
}
