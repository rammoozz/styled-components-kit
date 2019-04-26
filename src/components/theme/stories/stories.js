import React from "react";
import ThemeMd from "../Theme.md";
import { withDocs } from "storybook-readme";
import { storiesOf } from "@storybook/react";

storiesOf("Theme", module).add(
  "Get Started",
  withDocs(ThemeMd, () => <div />));
