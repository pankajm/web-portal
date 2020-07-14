/** 
 * Authentication service module (Login/SignUp and getting currently signedin user)
 */


import httpService from "./httpService";

const loginApiEndPoint = "https://reqres.in/api/login";
const signUpApiEndPoint = "https://reqres.in/api/register"
const tokenKey = "userToken";
// In case in future if takon needs to be changed then this is the only place
// where we have to make changes

export async function login(username, password) {
  const response = await httpService.post(loginApiEndPoint, {
    email: username,
    password,
  });
  localStorage.setItem(tokenKey, response.data.token);
}

export function saveToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  const token = localStorage.getItem(tokenKey);
  return token;
}

export function signUp(user) {
  return httpService.post(signUpApiEndPoint, {
    email: user.username,
    password: user.password
  });
}

export default {
  login,
  logout,
  getCurrentUser,
  signUp,
  saveToken
};
