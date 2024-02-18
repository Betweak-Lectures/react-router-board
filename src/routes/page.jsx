import React from "react";
import { Container, Form, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import {
  setColor,
  increaseCounter,
  decreaseCounter,
} from "~/store/reducers/counter";

export default function MainPage() {
  const counterState = useSelector((state) => state.counter);
  console.log(counterState);

  const { counter, color } = counterState;

  const dispatch = useDispatch();
  return (
    <Container className="min-vh-100">
      <h1>MainPage</h1>
      <Button
        onClick={(e) => {
          dispatch(increaseCounter());
        }}
      >
        증가
      </Button>
      <Button
        variant="danger"
        onClick={(e) => {
          dispatch(decreaseCounter());
        }}
      >
        감소
      </Button>
      <div>
        <Form.Label htmlFor="exampleColorInput">색상선택</Form.Label>
        <Form.Control
          type="color"
          defaultValue="#000000"
          title="Choose your color"
          onChange={(e) => {
            const color = e.target.value;
            const action = setColor(color);
            console.log(action);
            dispatch(action);
          }}
        />
      </div>
      <div style={{ color: color, fontSize: 40 }}>{counter}</div>
    </Container>
  );
}
