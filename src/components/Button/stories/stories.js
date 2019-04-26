import React, { Fragment } from "react";
import ButtonMd from "../Button.md";
import PropsMd from "../Props.md";
import SelectorsMd from "../Selectors.md";
import { withDocs } from "storybook-readme";
import { storiesOf } from "@storybook/react";
import Button from "../Button";
import PropsTable from "../../../utils/PropsTable";
import * as Module from "../Button";
import SelectorTable from "../../../utils/SelectorTable";
import css from "../css";
storiesOf("Components.Button", module)
  .add(
    "Variants",
    withDocs(ButtonMd, () => (
      <Fragment>
        <Button>text</Button>
        <Button variant={{ type: "contained" }}>contained</Button>
        <Button variant={{ type: "outlined" }}>outlined</Button>
        <Button   variant={{ type: ["outlined", "fab", "contained"] }}>
          multiple
        </Button>
        <Button background={"primary"} variant={{ type: "fab" }}>
          fab
        </Button>
      </Fragment>
    )),
    {
      props: { propTables: [Button] }
    }
  )
  .add(
    "Colors",
    withDocs(ButtonMd, () => (
      <Fragment>
        <Button>default</Button>
        <Button background={"primary"} color={"green"}>
          primary
        </Button>
        <Button background={"green"} color={"primary"}>
          primary
        </Button>
        <Button background={"yellow"} color={"red"}>
          primary
        </Button>
        
      </Fragment>
    )),
    {
      props: { propTables: [Button] }
    }
  )
  .add(
    "Props",
    withDocs(PropsMd, () => (
      <div>
        <PropsTable propDefinitions={Module.default["__docgenInfo"].props} />
      </div>
    )),
    {
      props: { propTables: [Button] }
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
      props: { propTables: [Button] }
    }
  );
