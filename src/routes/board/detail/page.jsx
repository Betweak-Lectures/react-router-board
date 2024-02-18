import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BoardApi from "~/lib/apis/board";

export default function BoardDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [board, setBoard] = useState({
    title: "",
    content: "",
    createdAt: "",
    author: {
      email: "",
      nickname: "",
    },
    comments: [],
  });

  useEffect(() => {
    BoardApi.fetchBoardDetail(params.boardId).then((data) => {
      setBoard(data);
    });
  }, [params.boardId]);

  return (
    <Container className="min-vh-100">
      <Button
        onClick={(e) => {
          navigate(-1);
        }}
      >
        {"<"} 뒤로가기
      </Button>

      <Row className="mt-5 mb-2">
        <Col className="d-flex flex-row justify-content-between">
          <h3>
            {board.title}{" "}
            <span style={{ fontSize: "0.75em" }}>{board.author.nickname}</span>
          </h3>
          <div>
            <Button
              variant="success"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/board/${params.boardId}/edit`);
              }}
            >
              수정하기
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              minHeight: 400,
              border: "1px solid #e9e9e9",
              padding: 10,
            }}
          >
            {board.content}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {board.comments.map((comment) => {
            return (
              <div style={{ border: "1px solid #e9e9e9" }} key={comment._id}>
                <div>{comment.content}</div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
