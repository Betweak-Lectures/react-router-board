import React, { useContext, useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import Sample from "~/components/Sample";
import { fetchBoardList } from "~/store/reducers/board";
import { useSelector, useDispatch } from "react-redux";

export default function MainPage() {
  const dispatch = useDispatch();
  const boardObj = useSelector((state) => state.board);
  const { loading, boards } = boardObj;

  useEffect(() => {
    const action = fetchBoardList({ id: 10 });
    dispatch(action);
  }, [dispatch]);

  return (
    <Container className="min-vh-100">
      {loading === "pending" ? (
        <Spinner />
      ) : loading === "rejected" ? (
        <Alert>오류발생</Alert>
      ) : (
        <ul>
          {boards.map((board) => {
            return <li key={board._id}>{board.title}</li>;
          })}
        </ul>
      )}
      {/* <h1>MainPage</h1>
      <p>This is my mainpage.</p> */}
      {/* <Sample /> */}
    </Container>
  );
}
