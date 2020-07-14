import httpService from "./httpService";

const apiEndPoint = "https://reqres.in/api/users";

const createSingleUserUrl = (id) => {
  return `${apiEndPoint}/${id}`;
}

export function getUsers(page) {
  return httpService.get(apiEndPoint + `?page=${page}`);
}

export function getUser(userId) {
  return httpService.get(createSingleUserUrl(userId));
}

export function deleteUser(userId) {
  return httpService.delete(createSingleUserUrl(userId));
}

export function addUser(user) {
  return httpService.post(apiEndPoint, user);
}

export function updateUser(userId, user) {
  return httpService.put(createSingleUserUrl(userId), user);
}

export default {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  getUser
}