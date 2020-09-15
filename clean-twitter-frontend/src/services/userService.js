import http from "./httpService";

export async function searchUser(user_handler) {
  const { data: users } = await http.get(
    `http://localhost:3900/users/search/${user_handler}`
  );
  return users;
}
