import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
  width: 100vw;

  background-image: url("/pxfuel.jpg");
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #fff1;
  padding: 60px 60px 30px 60px;
  border-radius: 10px;
  color: #ff005d;
  background-color: #fff1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px #0008;
`;

const PageTitle = styled(Typography)`
  font-weight: bold;
  font-size: 50px;
  color: #ff005d;
`;

const Slogan = styled(Typography)`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #ff005d;
  text-align: center;
  margin: 20px;
  padding: 0;
  text-shadow: 0 0 10px #0008;
`;

const Signature = styled(Typography)`
  font-size: 10px;
  color: #fff;
  text-align: right;
  margin: 0;
  padding: 0;
  font-style: italic;
  margin-right: 10px;
`;

const LoginButton = styled(Button)`
  background-color: #ff005d;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
  width: 100%;
  margin-top: 30px;

  &:hover {
    background-color: transparent;
    border: 1px solid #ff005d;
    transition: 0.5s;
  }
`;

const ErrorSnackbar = styled(Typography)`
  color: #ff005d;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;

  opacity: ${({ children }) => (children === "error" ? "0" : "1")};
`;

const Rights = styled(Typography)`
  color: #fff;
  margin-top: 30px;
  font-style: italic;
  opacity: 0.7;
  font-weight: 100;
  font-size: 10px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (loginState.loggedIn) {
      navigate("/todo");
    }
  }, [loginState, navigate]);

  const handleLogin = useCallback(() => {
    dispatch({
      type: "USER_LOGIN",
      payload: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
  }, [dispatch]);

  return (
    <MainContainer>
      <LoginForm
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin();
        }}
      >
        <PageTitle>Login</PageTitle>

        <Slogan>
          <Typography variant="caption">{`"The best way to get started is to quit talking and begin doing."`}</Typography>
          <Signature variant="caption">{` - Walt Disney`}</Signature>
        </Slogan>

        <TextField
          fullWidth
          id="email-input"
          label="e-mail"
          variant="outlined"
          inputRef={emailRef}
          size="small"
          autoComplete="off"
        />

        <TextField
          fullWidth
          id="password-input"
          label="password"
          variant="outlined"
          inputRef={passwordRef}
          size="small"
          autoComplete="off"
        />

        <LoginButton type="submit" onClick={handleLogin}>
          Login
        </LoginButton>

        <ErrorSnackbar>{loginState.error || "error"}</ErrorSnackbar>

        <Rights variant="caption">prototyped by Matheus Tostes</Rights>
      </LoginForm>
    </MainContainer>
  );
};

export default Login;
