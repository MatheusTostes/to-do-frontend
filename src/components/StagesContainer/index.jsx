import React, { useEffect, useState } from "react";
import { scrollbarStyle } from "../../helpers/scrollbarStyle";
import styled from "styled-components";
import StageHeader from "../StageHeader";
import TasksContainer from "../TasksContainer";
import StageColumn from "../StageColumn";
import api from "../../services/api";

const StagesContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: hidden;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;

  ${scrollbarStyle}
`;

const StagesContainer = () => {
  const [stages, setStages] = useState([]);

  useEffect(() => {
    let isMounted = true;

    try {
      (async () => {
        const { data } = await api.get(`/stages`, {
          params: {},
        });

        if (isMounted) setStages(data);
      })();
    } catch (error) {
      console.log(error);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <StagesContainerStyled>
      {stages.map((stage) => (
        <StageColumn key={stage.name}>
          <StageHeader stage={stage} />

          <TasksContainer stageId={stage.id} />
        </StageColumn>
      ))}
    </StagesContainerStyled>
  );
};

export default StagesContainer;
