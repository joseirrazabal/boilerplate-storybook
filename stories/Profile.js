import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { Profile } from "../src";

const stories = storiesOf("Profile", module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
// stories.addDecorator(withKnobs);

// Knobs for React props
stories.add(
  "Profiles",
  withInfo({
    styles: {
      source: {
        overflow: "hidden",
        h1: {
          display: "none"
        }
      }
    },
    text: 'Import Profile from "Upt-Profile"'
  })(() => {

    return (
      <Profile />
    );
    
  })
);
