// import instance from "./base";

// export async function fetchBoardList() {
//   // 데이터 조회하는 함수
//   instance.get();
// }

import axios from "axios";

export async function fetchBoardList() {
  try {
    const response = await axios.get("/api/board");
    console.log(response);
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      // 에러처리 코드...
    }
  }
}

export async function postBoard() {
  try {
    const response = await axios.post("/api/board");
    return response.data;
  } catch (err) {
    if (err.response.status === 500) {
      // 에러처리 코드...
    }
  }
}
