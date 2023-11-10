import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const PageTitleStyled = styled.h1`
  margin: 0px;
  padding: 20px;
  font-weight: bold;
`;

const PageTitle = ({ title }) => {
  return <PageTitleStyled>{title}</PageTitleStyled>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
