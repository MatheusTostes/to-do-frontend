import React, { useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { scrollbarStyle } from "../../helpers/scrollbarStyle";
import TaskCard from "../TaskCard";
import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";

const TasksContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 3px;

  ${scrollbarStyle}
`;

const TasksContainer = ({ stageId }) => {
  const tasks = useSelector((state) => state.tasksState);
  const dispatch = useDispatch();

  console.log({ tasks });

  useEffect(() => {
    try {
      (async () => {
        const { data } = await api.get(`/tasks`, {
          params: {
            stageId,
          },
        });

        dispatch({
          type: "SET_TASKS",
          payload: {
            tasks: data,
          },
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }, [stageId, dispatch]);

  return (
    <TasksContainerStyled>
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </TasksContainerStyled>
  );
};

TasksContainer.propTypes = {
  stageId: PropTypes.number.isRequired,
};

export default TasksContainer;
