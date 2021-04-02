export const isBrowser = jest.fn();
export const getUser = jest.fn();
export const setUser = jest.fn();
export const handleLogin = jest.fn();
export const isLoggedIn = jest.fn();
export const logout = jest.fn((cbk) => { cbk(); });
