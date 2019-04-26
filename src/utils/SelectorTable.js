import React from "react";
import getSelectors from "./getSelectors";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(${p => p.children.length}, max-content);
  grid-gap: 8px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => p.children.length}, max-content);
  grid-gap: 8px;
`;
export default ({ component, css }) => {
  let selectorArr = getSelectors(component);
  return (
    <Grid>
      {selectorArr.map((obj, index) => {
        return (
          <Row>
            <div>{obj.id}</div>-<div>{css[obj.id].description}</div>
          </Row>
        );
      })}
    </Grid>
  );
};
