// src/utils/auth.js

const TOKEN_KEY = 'authToken';

// Save token
export const saveAuthToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Get token
export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove token
export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
