import { jwtDecode } from "jwt-decode";

export const token = () => {
  const tokenJWT = localStorage.getItem("token");
  const id = jwtDecode(tokenJWT).id;

  return {
    id,
  };
};
