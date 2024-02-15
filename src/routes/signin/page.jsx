import React, { useCallback, useContext, useState } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { redirect, useNavigate } from "react-router-dom";
import { login } from "~/lib/apis/auth";
// import { useAuth } from "~/lib/hooks/useAuth";
import { AuthContext } from "~/components/AuthProvider";
import useAuth from "~/lib/hooks/useAuth";

export default function SignInPage() {
  const { user, clientLogin } = useAuth();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const navigate = useNavigate();

  const onInputChange = useCallback((inputText, setFn) => {
    setFn(inputText);
  }, []);

  const onSubmitLogin = useCallback(
    (email, password) => {
      login({ email, password }).then((resp) => {
        const user = resp.data;
        if (user.token) {
          delete user.token;
          clientLogin(user);
          navigate("/");
        }
      });
    },
    [navigate, clientLogin]
  );

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

        <Button
          className="w-100"
          onClick={(e) => {
            e.preventDefault();
            onSubmitLogin(userEmail, userPassword);
          }}
        >
          로그인
        </Button>
      </div>
    </Container>
  );
}
