import React from "react";
import MyNavbar from "./MyNavbar/MyNavbar";
import { Container } from "react-bootstrap";
import MyFooter from "./MyFooter/MyFooter";

const brand = "My-Board";

export default function BoardLayout({ children }) {
  return (
    <>
      <MyNavbar brandTitle={brand} />
      <Container className="min-vh-100">{children}</Container>
      <MyFooter brandTitle={brand} />
    </>
  );
}
