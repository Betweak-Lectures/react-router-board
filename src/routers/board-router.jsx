import BoardDetailPage from "~/routes/board/detail/page";
import BoardLayout from "~/routes/board/layout";
import BoardListPage from "~/routes/board/page";
import BoardWritePage from "~/routes/board/write/page";

export default {
  element: <BoardLayout />,
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
};
