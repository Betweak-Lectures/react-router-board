import React, { useCallback, useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// action creator
import { addTodo, removeTodo } from "~/store/reducers/todo";

const COLOR_PICK = [
  {
    name: "긴급",
    color: "red",
  },
  {
    name: "주의",
    color: "orange",
  },
  {
    name: "보통",
    color: "green",
  },
  {
    name: "매일",
    color: "blue",
  },
];

import { v4 as uuidv4 } from "uuid";

export default function TodoPage() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const [activeColor, setActiveColor] = useState("blue");
  const handleRemove = (todoId) => {
    const action = removeTodo(todoId);
    dispatch(action);
  };

  const handleAdd = useCallback(() => {
    const action = addTodo({
      id: uuidv4(),
      content: input,
      color: activeColor,
    });
    dispatch(action);
  }, [dispatch, activeColor, input]);

  const renderColor = useMemo(() => {
    return COLOR_PICK.map((elem) => {
      return (
        <Button
          className="flex-grow-1"
          key={elem.color}
          onClick={() => {
            setActiveColor(elem.color);
          }}
          style={{
            borderWidth: activeColor === elem.color ? 3 : 0,
            borderStyle: "solid",
            borderColor: "black",
            backgroundColor: elem.color,
          }}
        ></Button>
      );
    });
  }, [activeColor]);
  return (
    <Container className="min-vh-100">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="할 일을 입력하세요"
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAdd();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={handleAdd}>
              추가
            </Button>
          </InputGroup>
          <div className="d-flex flex-row ">{renderColor}</div>
          <ListGroup>
            {todoList.map((todo) => (
              <ListGroup.Item
                key={todo.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="position-relative">
                  <div
                    className="h-100 position-absolute"
                    style={{
                      backgroundColor: todo.color,
                      width: 10,
                    }}
                  ></div>
                  <div style={{ paddingLeft: 15 }}>{todo.content}</div>
                </div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => {
                    handleRemove(todo.id);
                  }}
                >
                  삭제
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
