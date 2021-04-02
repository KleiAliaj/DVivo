import React from 'react';
import { render, screen } from '@testing-library/react';
import faker from 'faker';
import Profile from './profile';
import { getUser } from '../services/auth';

jest.mock('../services/auth');

describe('Profile', () => {
  test('Render the component', () => {
    const name = faker.name.firstName();
    const email = faker.internet.email();

    getUser.mockImplementation(() => ({
      name,
      email,
    }));

    render(
      <Profile />,
    );

    // screen.debug();

    expect(screen.getByTestId('profile-user-name')).toHaveTextContent(name);
    expect(screen.getByTestId('profile-user-email')).toHaveTextContent(email);
  });
});
