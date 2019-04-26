import get from "lodash/get";
import theme from "../theme";
export default themeObj => {
  let toReturn = {};

  const variant = get(themeObj, "variant");
  const type = get(themeObj, "type");

  if (themeObj && type && variant) {
    toReturn = { ...theme[variant][type], ...themeObj };
  } else if (themeObj && type && !variant) {
    toReturn = { ...theme.default[type], ...themeObj };
  } else if (themeObj && !type && variant) {
    toReturn = { ...theme[variant].light, ...themeObj };
  } else if (!type && !variant) {
    toReturn = { ...theme.default.themeLess, ...themeObj };
  }

  return toReturn;
};
