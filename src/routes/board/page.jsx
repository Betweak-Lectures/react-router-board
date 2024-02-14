import React, { useEffect, useState } from "react";
import { Badge, Container, ListGroup } from "react-bootstrap";

import { fetchBoardList } from "~/lib/apis/board";
import { Link } from "react-router-dom";

const brand = "My-React-Board";
export default function BoardListPage() {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    fetchBoardList().then((data) => {
      setBoardList(data);
      // console.log(data);
    });
  }, []);

  return (
    <Container className="min-vh-100">
      <h3>My Board</h3>
      <ListGroup as="ul">
        {boardList.map((item) => (
          <Link
            key={item._id}
            to={`/board/${item._id}`}
            className="text-decoration-none"
          >
            <ListGroup.Item
              key={item._id}
              as="li"
              action
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto text-truncate">
                <div className="fw-bold">{item.title}</div>
                <div>{item.content}</div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-end">
                <Badge bg="primary" pill>
                  {/* 14 */}
                  {item.commentCount}
                </Badge>
                <div>{item.author.nickname}</div>
                {/* {item.createdAt} */}
              </div>
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
}
