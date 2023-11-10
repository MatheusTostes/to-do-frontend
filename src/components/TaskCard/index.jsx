import { Box, Checkbox, Paper, Typography } from "@material-ui/core";
import React, { memo, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Delete, ExpandLess, ExpandMore } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import EditableTypography from "../EditableTypography";

const TaskCardStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  background-color: #707070;
  padding: 0px 20px;
  width: 100 %;
  font-weight: bold;
  text-align: justify;
  cursor: pointer;
  transition: background-color 0.2s;
  gap: 10px;

  &:hover {
    background-color: #848484;
    transition: background-color 0.2s;
  }
`;

const TaskCardHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  text-wrap: nowrap;
`;

const MoveButtons = styled(Box)`
  display: flex;
  align-self: center;
  transition: color 0.3s;
  cursor: grab;
  opacity: 0.2;

  ${TaskCardStyled}:hover & {
    opacity: 1;
    transition: color 0.3s;
  }
`;

const ExpandLessStyled = styled(ExpandLess)`
  color: #fff;
  transition: color 0.3s;
  cursor: pointer;
  padding: 0px;

  &:hover {
    color: #ff005d;
    transition: color 0.3s;
  }
`;

const ExpandMoreStyled = styled(ExpandMore)`
  color: #fff;
  transition: color 0.3s;
  cursor: pointer;
  padding: 0px;

  &:hover {
    color: #ff005d;
    transition: color 0.3s;
  }
`;

const CheckboxStyled = styled(Checkbox)`
  align-self: center;
  color: #fff;
  transition: color 0.3s;
  cursor: pointer;
  padding: 0px;

  &:hover {
    color: #ff005d;
    transition: color 0.3s;
  }
`;

const DescriptionBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-top: -10px;
  padding-bottom: 10px;
`;

const DeleteButton = styled(Delete)`
  background-color: #848484;
  color: #fff;
  border-radius: 50%;
  padding: 5px;
  transition: color 0.3s;
  align-self: center;
  margin-left: auto;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.2;

  &:hover {
    color: #ff005d;
    background-color: #707070;
    transition: color 0.3s;
  }

  ${TaskCardStyled}:hover & {
    opacity: 1;
    transition: color 0.3s;
  }
`;

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const removeTask = useCallback(() => {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        taskId: task.id,
      },
    });
  }, [dispatch, task.id]);

  const completeTask = useCallback(() => {
    dispatch({
      type: "COMPLETE_TASK",
      payload: {
        taskId: task.id,
      },
    });
  }, [dispatch, task.id]);

  const reorderTasks = useCallback(
    (direction) => {
      dispatch({
        type: "REORDER_TASKS",
        payload: {
          taskId: task.id,
          direction,
        },
      });
    },
    [dispatch, task.id]
  );

  return (
    <TaskCardStyled key={`${task.id} - ${task.name}`} data-key={`${task.id}`}>
      <TaskCardHeader>
        <MoveButtons display="flex" flexDirection="column">
          <ExpandLessStyled
            onClick={() => {
              reorderTasks("up");
            }}
          />
          <ExpandMoreStyled
            onClick={() => {
              reorderTasks("down");
            }}
          />
        </MoveButtons>

        <CheckboxStyled
          checked={task.completed}
          defaultChecked={task.completed}
          onChange={completeTask}
        />

        <Typography
          style={{ fontStyle: "italic" }}
          variant="body2"
        >{`#${task.id} - `}</Typography>
        <EditableTypography attr="name" text={task.name} taskId={task.id} />

        <DeleteButton onClick={removeTask} />
      </TaskCardHeader>

      <DescriptionBox>
        <EditableTypography
          attr="description"
          text={task.description}
          taskId={task.id}
        />
      </DescriptionBox>
    </TaskCardStyled>
  );
};

TaskCard.displayName = "TaskCard";

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
};

export default memo(TaskCard);
