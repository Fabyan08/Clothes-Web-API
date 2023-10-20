import jwtDecode from "jwt-decode";
// Untuk post data ke AP FakeStore
import axios from "axios";

export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      // Handle Token
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};
// Passing data token ke product gunakan library jwt decode
export const getUsername = (token) => {
  const decoded = jwtDecode(token);
//   console.log(decoded);  
  //   Return data
  return decoded.user;
};
