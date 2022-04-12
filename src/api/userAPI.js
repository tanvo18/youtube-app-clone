import { create } from 'apisauce';

// Base URL
const api = create({
  baseURL: 'https://www.googleapis.com/oauth2/v1'
});

/**
 * Function  get user information
 * @param {string} accessToken accessToken of current user
 */
export const getUserInfo = (accessToken, userAPI = api) => {
  const url = '/userinfo';
  
  return userAPI.get(url, {
    access_token: accessToken
  });
};