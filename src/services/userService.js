import httpService from "./httpService";

const apiEndPoint = "https://reqres.in/api/users";

function singleUserUrl(id) {
  return `${apiEndPoint}/${id}`;
}

export function getUsers(page) {
  return httpService.get(apiEndPoint + `?page=${page}`);
}

export function getUser(userId) {
  return httpService.get(singleUserUrl(userId));
}

export function deleteUser(userId) {
  return httpService.delete(singleUserUrl(userId));
}

export function addUser(user) {
  return httpService.post(apiEndPoint, user);
}

export function updateUser(userId, user) {
  return httpService.put(singleUserUrl(userId), user);
}
