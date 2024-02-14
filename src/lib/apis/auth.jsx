// import instance from "./base";

// export async function fetchBoardList() {
//   // 데이터 조회하는 함수
//   instance.get();
// }

import axios from "axios";

export async function login() {
  const response = await axios.post("http://127.0.0.1:3000/api/board");
  console.log(response);
  return response;
}

export async function logout() {
  const response = await axios.post("http://127.0.0.1:3000/api/board");
}
