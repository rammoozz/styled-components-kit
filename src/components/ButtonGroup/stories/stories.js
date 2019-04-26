import React from "react";
import ButtonGroupMd from "../ButtonGroup.md";
import PropsMd from "../Props.md";
import SelectorsMd from "../Selectors.md";
import { withDocs } from "storybook-readme";
import { storiesOf } from "@storybook/react";
import ButtonGroup from "../ButtonGroup";
import Button from "../../Button";
import PropsTable from "../../../utils/PropsTable";
import * as Module from "../ButtonGroup";
import SelectorTable from "../../../utils/SelectorTable";
import css from "../css";
storiesOf("Components.ButtonGroup", module)
  .add(
    "Props",
    withDocs(PropsMd, () => (
      <div>
        <PropsTable propDefinitions={Module.default["__docgenInfo"].props} />
      </div>
    )),
    {
      props: { propTables: [ButtonGroup] }
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
      props: { propTables: [ButtonGroup] }
    }
  );
storiesOf("Components.ButtonGroup.Examples", module)
  .add(
    "Horizontal",
    withDocs(ButtonGroupMd, () => (
      <ButtonGroup variant={{direction:"horizontal"}}>
        <Button>d</Button>
        <Button>d</Button>
      </ButtonGroup>
    )),
    {
      props: { propTables: [ButtonGroup] }
    }
  )
  .add(
    "Vertical",
    withDocs(ButtonGroupMd, () => (
      <ButtonGroup variant={{direction:"vertical"}}>
        <Button>d</Button>
        <Button>d</Button>
      </ButtonGroup>
    )),
    {
      props: { propTables: [ButtonGroup] }
    }
  );
