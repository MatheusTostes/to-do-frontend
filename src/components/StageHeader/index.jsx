import { IconButton, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Add } from "@material-ui/icons";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const StageHeaderStyled = styled(Paper)`
  background-color: #515151;
  padding: 0px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function StageHeader({ stage }) {
  const dispatch = useDispatch();

  const createTask = () => {
    dispatch({
      type: "CREATE_TASK",
      payload: {
        name: "New Task",
        stageId: stage.id,
        description: "New Task Description",
      },
    });
  };

  return (
    <StageHeaderStyled>
      <h2>{stage.name}</h2>
      <IconButton onClick={createTask}>
        <Add />
      </IconButton>
    </StageHeaderStyled>
  );
}

StageHeader.propTypes = {
  stage: PropTypes.object.isRequired,
};

export default StageHeader;
