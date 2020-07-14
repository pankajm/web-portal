import httpService from "./httpService";

const loginApiEndPoint = "https://reqres.in/api/login";
const signUpApiEndPoint = "https://reqres.in/api/register"
const tokenKey = "token";

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
  try {
    const token = localStorage.getItem(tokenKey);
    return token;
  } catch (ex) {
    return null;
  }
}

export function signUp(user) {
  return httpService.post(signUpApiEndPoint, {
    email: user.username,
    password: user.password
  });
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  getJwt,
  signUp,
  saveToken
};
