import { jwtDecode } from "jwt-decode";

export const token = () => {
  const tokenJWT = localStorage.getItem("token");
  const data = jwtDecode(tokenJWT);
  return data;
};
