import React, { Fragment, Component } from "react";
import { ThemeProvider } from "styled-components";
import {
  Button,
  _Button,
  AppBar,
  ButtonGroup,
  createTheme
} from "styled-components-kit";

const compactTheme = createTheme({ spacing: { unit: 4 } });
const darkTheme = createTheme({ type: "dark" });
// const lightTheme = createTheme({ type:'light' })
const materialDarkTheme = createTheme({ variant: "material", type: "dark" });
const materialLightTheme = createTheme({ variant: "material", type: "light" });
const themeLess = createTheme();
export default class App extends Component {
  render() {
    const content = (
      <Fragment>
        <AppBar
          css={`
            display: grid;
            grid-template-columns: auto auto;
          `}
          variant={{ direction: "horizontal" }}
        >
          <ButtonGroup
            css={`
              ${_Button["Grid"]}:first-of-type {
                background: tomato !important;
                font-size: 99px;
              }
            `}
            variant={{ direction: "horizontal" }}
          >
            <Button variant={{ type: ["outlined"] }}>Hello</Button>
            <Button variant={{ type: ["outlined"] }}>Hello</Button>
          </ButtonGroup>
          <ButtonGroup variant={{ direction: "vertical" }}>
            <Button variant={{ type: ["outlined"] }}>Hello</Button>
            <Button variant={{ type: ["outlined"] }}>Hello</Button>
          </ButtonGroup>
          <Button color={"primary"}>Hello</Button>
        </AppBar>
      </Fragment>
    );
    return (
      <Fragment>
        <ThemeProvider theme={themeLess}>
          <Fragment>
            <div>Default (themeless):</div>
            {content}
          </Fragment>
        </ThemeProvider>
        <ThemeProvider theme={compactTheme}>
          <Fragment>
            <div>Compact:</div>
            {content}
          </Fragment>
        </ThemeProvider>
        {/* <ThemeProvider theme={lightTheme}>
          <Fragment>
            <div>Light:</div>
            {content}
          </Fragment>
        </ThemeProvider> */}
        <ThemeProvider theme={darkTheme}>
          <Fragment>
            <div>Dark:</div>
            {content}
          </Fragment>
        </ThemeProvider>
        <ThemeProvider theme={materialDarkTheme}>
          <Fragment>
            <div>Material Dark:</div>
            {content}
          </Fragment>
        </ThemeProvider>
        <ThemeProvider theme={materialLightTheme}>
          <Fragment>
            <div>Material Light:</div>
            {content}
          </Fragment>
        </ThemeProvider>
      </Fragment>
    );
  }
}
