import React from "react";
import PaperMd from "../Paper.md";
import PropsMd from "../Props.md";
import SelectorsMd from "../Selectors.md";
import { withDocs } from "storybook-readme";
import { storiesOf } from "@storybook/react";
import Paper from "../Paper";
import PropsTable from "../../../utils/PropsTable";
import * as Module from "../Paper";
import SelectorTable from "../../../utils/SelectorTable";
import css from "../css";
storiesOf("Components.Paper", module)
  .add("Examples", withDocs(PaperMd, () => <Paper>Hello</Paper>), {
    props: { propTables: [Paper] }
  })
  .add(
    "Props",
    withDocs(PropsMd, () => (
      <div>
        <PropsTable propDefinitions={Module.default["__docgenInfo"].props} />
      </div>
    )),
    {
      props: { propTables: [Paper] }
    }
  )
  .add(
    "Selectors",
    withDocs(SelectorsMd, () => (
      <div>
        <SelectorTable css={css} component={Module} />
      </div>
    )),
    {
      props: { propTables: [Paper] }
    }
  );
