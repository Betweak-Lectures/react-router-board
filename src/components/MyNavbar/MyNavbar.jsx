/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useMemo } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import useAuth from "~/lib/hooks/useAuth";
import { logout } from "~/lib/apis/auth";
import { useSelector } from "react-redux";

const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle = undefined }) {
  const { user, clientLogout } = useAuth();
  const todoList = useSelector((state) => state.todo.todoList);

  const todoNum = useMemo(() => {
    return todoList.length;
  }, [todoList]);

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              {offCanvasTitle || brandTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
            >
              {!user ? (
                <>
                  <Link
                    to="/signin"
                    className="text-decoration-none flex-grow-1 text-center border border-dark border-end-0"
                  >
                    <Nav.Link as="div" className="">
                      로그인
                    </Nav.Link>
                  </Link>
                  <Link
                    to="/signup"
                    className="text-decoration-none flex-grow-1 text-center border border-dark"
                  >
                    <Nav.Link as="div" className="">
                      회원가입
                    </Nav.Link>
                  </Link>
                </>
              ) : (
                // <Link
                //   to="/logout"
                //   className="text-decoration-none flex-grow-1 text-center border border-dark border-end-0"
                // >
                <Nav.Link
                  as="div"
                  className=""
                  onClick={() => {
                    clientLogout();
                    logout().then((resp) => {});
                  }}
                >
                  로그아웃
                </Nav.Link>
                // </Link>
              )}
            </Nav>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Link to="/" className="text-decoration-none">
                <Nav.Link as="div">Home</Nav.Link>
              </Link>
              <Link to="/board" className="text-decoration-none">
                <Nav.Link as="div">게시판</Nav.Link>
              </Link>
              <Link to="/todo" className="text-decoration-none">
                <Nav.Link as="div">TODO({todoNum})</Nav.Link>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
