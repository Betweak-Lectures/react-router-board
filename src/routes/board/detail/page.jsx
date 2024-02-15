import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  return (
    <Container className="min-vh-100">
      <Button
        onClick={(e) => {
          navigate(-1);
        }}
      >
        {"<"} 뒤로가기
      </Button>
      <h3>게시글 상세</h3>
      <div
        onClick={(e) => {
          navigate("/");
        }}
      >
        메인페이지로 이동
      </div>
    </Container>
  );
}
