import React, { useCallback, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

export default function SignInPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onInputChange = useCallback((inputText, setFn) => {
    setFn(inputText);
  }, []);

  return (
    <Container className="min-vh-100  d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: "100%", maxWidth: 640 }}>
        <h3 style={{ alignSelf: "start" }}> Login</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserEmail);
            }}
            value={userEmail}
            type="email"
            placeholder="name@example.com"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserPassword);
            }}
            value={userPassword}
            type="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>

        <Button className="w-100">로그인</Button>
      </div>
    </Container>
  );
}
