import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Paper from "../Paper";
export const Grid = styled(Paper)`
  ${p =>
    p.variant.direction === "vertical" &&
    css`
      display: grid;
      justify-content: center;
      height: 100%;
      grid-gap: ${p => p.theme.spacing.unit * 2}px;
      width: ${p => p.theme.spacing.unit * 8}px;
      grid-template-rows: repeat(${p => p.children.length}, max-content);
    `};
  ${p =>
    p.variant.direction === "horizontal" &&
    css`
      display: grid;
      align-items: center;
      grid-gap: ${p => p.theme.spacing.unit * 2}px;
      min-height: ${p => p.theme.spacing.unit * 8}px;

      grid-template-columns: repeat(${p => p.children.length}, max-content);
    `};
    ${p => p.css};
`;

const AppBar = ({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>;
};

AppBar.propTypes = {
  /** horizontal | vertical */
  variant: PropTypes.oneOf(["vertical", "horizontal"])
};

AppBar.defaultProps = {
  variant: { direction: { vertical: "vertical", horizontal: "horizontal" } }
};
export default AppBar;
