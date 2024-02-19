import React, { useCallback, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BoardApi from "~/lib/apis/board";

export default function BoardWritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { boardId } = useParams();

  const onSubmit = useCallback(
    (title, content) => {
      if (boardId) {
        // boardEdit 일 경우
        BoardApi.editBoard({ boardId, title, content }).then((resp) => {
          navigate(`/board/${boardId}`);
        });
      } else {
        // board Write 일 경우
        BoardApi.postBoard({ title, content }).then((resp) => {
          navigate("/board");
        });
      }
    },
    [navigate, boardId]
  );

  useEffect(() => {
    if (boardId) {
      // boardEdit 일 경우 초기값 설정
      BoardApi.fetchBoardDetail(boardId).then((board) => {
        setTitle(board.title);
        setContent(board.content);
      });
    }
  }, [boardId]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>{boardId ? "글 수정" : "글 쓰기"}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>제목</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
                placeholder="제목을 입력하여주세요."
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                value={content}
                as="textarea"
                rows={10}
              />
            </Form.Group>
            <Button
              onClick={() => {
                onSubmit(title, content);
              }}
              style={{ float: "right" }}
              type="button"
            >
              작성
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
