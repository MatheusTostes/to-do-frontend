import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import StagesContainer from "../../components/StagesContainer";
import PageTitle from "../../components/PageTitle";
import { scrollbarStyle } from "../../helpers/scrollbarStyle";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${scrollbarStyle}
`;

const LogoutButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #ff005d;
  border: 1px solid #ff005d;
  border-radius: 3px;
  padding: 3px;
  background-color: #fff1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 0 10px #0008;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff005d;
    border: none;

    svg {
      color: #000;
    }
  }
`;

const ToDo = () => {
  const loginState = useSelector((state) => state.loginState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loginState.loggedIn) {
      navigate("/");
    }
  }, [loginState.loggedIn, navigate]);

  const handleLogout = useCallback(() => {
    dispatch({
      type: "USER_LOGOUT",
    });
  }, [dispatch]);

  return (
    <MainContainer>
      <LogoutButton onClick={handleLogout}>
        <ExitToApp />
      </LogoutButton>

      <PageTitle title={"To-Do"} />

      <StagesContainer />
    </MainContainer>
  );
};

export default ToDo;
