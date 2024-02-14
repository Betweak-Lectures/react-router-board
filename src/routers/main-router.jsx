import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "~/routes/page";

import boardRouter from "./board-router";

import BoardListPage from "~/routes/board/page";
import BoardWritePage from "~/routes/board/write/page";
import BoardDetailPage from "~/routes/board/detail/page";
import Layout from "~/routes/layout";

export const mainRouter = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
      {
        path: "/board",
        children: [
          {
            path: "",
            element: <BoardListPage />,
            index: true,
          },
          {
            path: "write",
            element: <BoardWritePage />,
            index: true,
          },
          {
            path: ":boardId",
            element: <BoardDetailPage />,
            index: true,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRouter);

export default router;
