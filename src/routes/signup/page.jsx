import React, { useCallback, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { login, signup } from "~/lib/apis/auth";

export default function SignUpPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickname, setUserNickname] = useState("");

  const onInputChange = useCallback((inputText, setFn) => {
    setFn(inputText);
  }, []);
  const onRegisterSubmit = useCallback((email, password, nickname) => {
    signup({ email, password, nickname }).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <Container className="min-vh-100  d-flex flex-column justify-content-center align-items-center">
      <div style={{ width: "100%", maxWidth: 640 }}>
        <h3 style={{ alignSelf: "start" }}> Register</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            onChange={(e) => {
              onInputChange(e.target.value, setUserEmail);
            }}
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
            type="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingNickname"
          label="nickname"
          className="mb-3"
        >
          <Form.Control
            type="text"
            onChange={(e) => {
              onInputChange(e.target.value, setUserNickname);
            }}
            placeholder="별명을 입력하여 주세요."
            required
          />
        </FloatingLabel>

        <Button
          className="w-100"
          onClick={(e) => {
            e.preventDefault();
            onRegisterSubmit(userEmail, userPassword, userNickname);
          }}
        >
          회원가입
        </Button>
      </div>
    </Container>
  );
}
