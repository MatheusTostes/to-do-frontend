import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";

const StageColumnStyled = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
  user-select: none;
  overflow: hidden;
  min-width: 400px;
  width: 450px;
  max-height: 100%;
`;

const StageColumn = ({ children }) => {
  return <StageColumnStyled>{children}</StageColumnStyled>;
};

StageColumn.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StageColumn;
