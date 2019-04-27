import React from "react";
import { addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import createTheme from "../src/components/theme/createTheme";
import { ThemeProvider } from "styled-components";
// OPTIONS

addParameters({
  options: {
    url: "https://github.com/rkhayat/styled-components-kit",
    name: "components",
    sortStoriesByKind: true,
    addonPanelInRight: true,
    rootSeparator: /\|/,
    hierarchySeparator: /\./
  }
});

// END OPTIONS

// THEME
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .storybook-readme-story{
    height:100%;overflow:scroll;
  }
  textarea, input,button{
    font-family: 'Lato', sans-serif;

  }
  .storybook-readme-story{
    padding:16px;
  }
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #root{
    width: 100%;
    height:100%;
      
  }

  html{
      height:100%;
      width:100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body{
      height:100%;
      width:100%;
      margin:0;
      font-family: 'Lato', sans-serif;
      overflow:hidden;

  }
  

    
`;
const ThemeDecorator = storyFn => {
  const content = storyFn();
  const defaultTheme =  createTheme()
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <GlobalStyles />
        {content}
      </React.Fragment>
    </ThemeProvider>
  );
};

addDecorator(ThemeDecorator);

// END THEME

import { configure } from "@storybook/react";

const req = require.context("../src", true, /[^/]+\/*.stories.js$/);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}
configure(loadStories, module);
