import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Sample from "~/components/Sample";
import { fetchBoardList } from "~/store/reducers/board";
import { useSelector, useDispatch } from "react-redux";

export default function MainPage() {
  const dispatch = useDispatch();
  const boardObj = useSelector((state) => state.board);
  const { loading, boards } = boardObj;

  useEffect(() => {
    const action = fetchBoardList();
    dispatch(action);
  }, [dispatch]);

  return (
    <Container className="min-vh-100">
      <h1>MainPage</h1>
      <p>This is my mainpage.</p>
      <Sample />
    </Container>
  );
}
