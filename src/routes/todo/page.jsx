import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

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

export default function TodoPage() {
  const [input, setInput] = useState();
  const handleAdd = () => {};
  const [activeColor, setActiveColor] = useState("blue");

  const renderColor = () => {
    return COLOR_PICK.map((elem) => {
      return (
        <Button
          className="flex-grow-1"
          key={elem.color}
          onClick={() => {
            setActiveColor(elem.color);
          }}
          style={{
            borderWidth: activeColor?.color === elem.color ? 3 : 0,
            borderStyle: "solid",
            borderColor: "black",

            backgroundColor: elem.color,
          }}
        ></Button>
      );
    });
  };
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
          <div className="d-flex flex-row ">{renderColor()}</div>
          <ListGroup>
            <ListGroup.Item
              //   key={todo.id}
              className="d-flex justify-content-between align-items-center"
            >
              <div className="position-relative">
                <div
                  className="h-100 position-absolute"
                  style={{
                    // backgroundColor: todo.color,
                    width: 10,
                  }}
                ></div>
                <div style={{ paddingLeft: 15 }}>{/* {todo.content} */}</div>
              </div>
              <Button variant="outline-danger" size="sm">
                삭제
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
