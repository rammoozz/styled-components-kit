import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import includes from "lodash/includes";
import styled, { css } from "styled-components";

export const Grid = styled.button`
  margin: ${p => p.theme.spacing.unit}px;
  min-width: ${p => p.theme.spacing.unit * 8}px;
  background: ${p => p.theme.palette.background.paper};
  cursor:pointer;
  color: ${p => p.theme.palette.text.primary};
  width: fit-content;
  padding: ${p => p.theme.spacing.unit}px ${p => p.theme.spacing.unit * 3}px;
  border:none;
  ${p =>
    ((p.variant.type &&
      Array.isArray(p.variant.type) &&
      includes(p.variant.type, "contained")) ||
      p.variant.type === "contained") &&
    css`
      box-shadow: ${p => p.theme.shadows[1]};
    `}

    ${p =>
      ((p.variant.type &&
        Array.isArray(p.variant.type) &&
        includes(p.variant.type, "outlined")) ||
        p.variant.type === "outlined") &&
      css`
        border: 2px solid ${p => p.theme.primary};
      `}

    ${p =>
      ((p.variant.type &&
        Array.isArray(p.variant.type) &&
        includes(p.variant.type, "fab")) ||
        p.variant.type === "fab") &&
      css`
        min-height: 50px;
        min-width: 50px;
        height: 50px;
        padding: 0;
        width: 50px;
        border-radius: 50%;
      `}
    
  ${p =>
    p.color &&
    css`
      color: ${p => get(p.theme.palette, `${p.color}.main`, p.color)};
    `}

    ${p =>
      p.background &&
      css`
        background: ${p =>
          get(p.theme.palette, `${p.background}.main`, p.background)};
      `}
  ${p => p.css};
`;
const Button = props => {
  return <Grid {...props} />;
};
Button.propTypes = {
  /** disables the button */
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  /** variants */
  variant: { type: { contained: "contained", fab: "fab", outline: "outline" } },
  isDisabled: false
};
export default Button;
