import { isStyledComponent } from "styled-components";
export default comp => {
  const selectorArr = [];
  Object.keys(comp).map((id, index) => {
    if (isStyledComponent(comp[id])) {
      selectorArr.push({ id, comp: comp[id] });
    }
  });
  return selectorArr
};
