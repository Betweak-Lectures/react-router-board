import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Sample from "~/components/Sample";
import { ThemeContext } from "~/components/ThemeProvider";

export default function MainPage() {
  const location = useLocation();
  const context = useContext(ThemeContext);
  return (
    <Container className="min-vh-100">
      <h1>MainPage</h1>
      <p>This is my mainpage.</p>
      <Sample />
    </Container>
  );
}
