import axios from "axios";
import instance from "./base";

export async function fetchBoardList() {
  const response = await instance.get("/board");
  return response.data;
}

export async function fetchBoardDetail(boardId) {
  const response = await instance.get(`/board/${boardId}`);
  return response.data;
}

export async function postBoard({ title, content }) {
  const response = await instance.post("/board", {
    title: title,
    content: content,
  });
  return response.data;
}

export async function editBoard({ boardId, title, content }) {
  const response = await instance.put(`/board/${boardId}`, {
    title: title,
    content: content,
  });
  return response.data;
}

export async function deleteBoard({ boardId }) {
  const response = await instance.delete(`/board/${boardId}`);
  return response.data;
}

export default {
  fetchBoardList,
  fetchBoardDetail,
  postBoard,
  editBoard,
  deleteBoard,
};
