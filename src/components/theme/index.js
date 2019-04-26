const defaultCommon = {
  common: {
    white: "#fff",
    black: "#fff"
  }
};
const defaultSpacing = {
  spacing: {
    unit: 8
  }
};
const defaultShadows = {
  shadows: {
    0: "none",
    1: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)"
  }
};
const theme = {
  default: {
    themeLess: {
      ...defaultSpacing,
      ...defaultCommon,
      ...defaultShadows,
      palette: {
        primary: {
          main: "tomato",
          contrastText: "#fff"
        },
        text: {
          primary: "#000"
        },
        background: {
          paper: "#fff"
        }
      }
    },
    dark: {
      ...defaultSpacing,
      ...defaultCommon,
      ...defaultShadows,
      palette: {
        primary: {
          main: "#4dabf5",
          contrastText: "#fff"
        },
        text: {
          primary: "#fff"
        },
        background: {
          paper: "#000"
        }
      }
    },
    light: {
      ...defaultSpacing,
      ...defaultCommon,
      ...defaultShadows,
      palette: {
        primary: {
          main: "#4dabf5",
          contrastText: "#fff"
        },
        text: {
          primary: "#000"
        },
        background: {
          paper: "#fff"
        }
      }
    }
  },
  material: {
    dark: {
      ...defaultSpacing,
      ...defaultCommon,
      ...defaultShadows,
      palette: {
        primary: {
          main: "#f50057",
          contrastText: "#fff"
        },
        text: {
          primary: "#fff"
        },
        background: {
          paper: "#000"
        }
      }
    },
    light: {
      ...defaultSpacing,
      ...defaultCommon,
      ...defaultShadows,
      palette: {
        primary: {
          main: "#f50057",
          contrastText: "#fff"
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)"
        },
        background: {
          paper: "#fff"
        }
      }
    }
  }
};

export default theme;
