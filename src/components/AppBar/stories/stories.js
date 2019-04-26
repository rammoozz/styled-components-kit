import React from "react";
import AppBarMd from "../AppBar.md";
import PropsMd from "../Props.md";
import SelectorsMd from "../Selectors.md";
import { withDocs } from "storybook-readme";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { storiesOf } from "@storybook/react";
import AppBar from "../AppBar";
import PropsTable from "../../../utils/PropsTable";
import * as Module from "../AppBar";
import SelectorTable from "../../../utils/SelectorTable";
import css from "../css";
storiesOf("Components.AppBar", module)
  .add(
    "Props",
    withDocs(PropsMd, () => (
      <div>
        <PropsTable propDefinitions={Module.default["__docgenInfo"].props} />
      </div>
    )),
    {
      props: { propTables: [AppBar] }
    }
  )
  .add(
    "Selectors",
    withDocs(SelectorsMd, Selectors => (
      <div>
        <SelectorTable css={css} component={Module} />
      </div>
    )),
    {
      props: { propTables: [AppBar] }
    }
  );

storiesOf("Components.AppBar.Examples", module)
  .add(
    "Vertical",
    withDocs(AppBarMd, () => (
      <div style={{ height: 500 }}>
        <AppBar variant={{ direction: "vertical" }}>
          <AccessAlarm />
          <ThreeDRotation />
        </AppBar>
      </div>
    )),
    {
      props: { propTables: [AppBar] }
    }
  )
  .add(
    "Horizontal",
    withDocs(AppBarMd, () => (
      <AppBar variant={{ direction: "horizontal" }}>
        <AccessAlarm />
        <ThreeDRotation />
      </AppBar>
    )),
    {
      props: { propTables: [AppBar] }
    }
  );
