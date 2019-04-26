import React from "react";
import PropTypes from "prop-types";
import * as Button from "../Button";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  padding: ${p => p.theme.spacing.unit}px ${p => p.theme.spacing.unit * 3}px;
  ${Button["Grid"]} {
    margin: 0;
  }
  ${p =>
    p.variant.direction === "vertical" &&
    css`
      display: grid;
      grid-template-rows: repeat(${p => p.children.length}, max-content);
      ${Button["Grid"]}:first-of-type {
        border-bottom: none;
      }
    `};
  ${p =>
    p.variant.direction === "horizontal" &&
    css`
      display: grid;
      grid-template-columns: repeat(${p => p.children.length}, max-content);
      ${Button["Grid"]}:first-of-type {
        border-right: none;
      }
    `};
  ${p => p.css};
`;
const ButtonGroup = ({ variant, children, ...rest }) => {
  return (
    <Grid variant={variant} {...rest}>
      {children}
    </Grid>
  );
};
ButtonGroup.propTypes = {
  /** horizontal | vertical */
  // variant: PropTypes.oneOf(["direction"])
};

ButtonGroup.defaultProps = {
  variant: { direction: { vertical: "vertical", horizontal: "horizontal" } }
};
export default ButtonGroup;
