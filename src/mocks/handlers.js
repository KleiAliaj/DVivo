// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),
  // Handles a GET /user request
  rest.get('/user', null),
];
export default handlers;
