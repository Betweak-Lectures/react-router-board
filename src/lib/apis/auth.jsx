// import instance from "./base";

// export async function fetchBoardList() {
//   // 데이터 조회하는 함수
//   instance.get();
// }

import { redirect } from "react-router-dom";
import instance from "./base";

export async function login({ email, password }) {
  const response = await instance.post("/login", {
    email,
    password,
  });
  return response;
}

export async function signup({ email, password, nickname }) {
  const response = await instance.post("/signup", {
    email,
    password,
    nickname,
  });
  console.log(response);
  return response;
}

// export async function logout() {
//   const response = await axios.post("http://127.0.0.1:3000/api/board");
// }
