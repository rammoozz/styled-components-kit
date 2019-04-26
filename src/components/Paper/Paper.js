import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Grid = styled.div`
  background-color: #fff;
  border-radius: 4px;
  background:${p => p.theme.palette.background.paper};
  color:${p => p.theme.palette.text.primary};
  box-shadow: ${p => p.theme.shadows[1]};
  padding: ${p => p.theme.spacing.unit * 2}px;
  ${p => p.css};
`;

const Paper = ({ children, ...rest }) => {
  return <Grid {...rest}>{children}</Grid>;
};

Paper.propTypes = {
  
};

Paper.defaultProps = {

};
export default Paper;
