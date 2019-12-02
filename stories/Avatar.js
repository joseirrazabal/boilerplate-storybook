import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs/react";

import { Avatar } from "../src";

const stories = storiesOf("Avatar", module);

stories.add("Avatar", () => {
  return (
    <Avatar
      image={text(
        "Imagen",
        "https://lh3.googleusercontent.com/-P9AP4vdTugM/AAAAAAAAAAI/AAAAAAAAAAA/AGi4gfxUquwVBMfRqw56TqgcO0XYriu86Q/s64-c-mo/photo.jpg"
      )}
      circle={number("Radius", 0)}
      size={number("FontSize", 15)}
      elevation={number("Elevation", 0)}
      maxHeight={number("Height", 40)}
      alt={text("Alt", "Avatar Profile")}
      title={text("Title", "Titulo")}
      name={text("Name", "")}
      notifications={number("Notifications", 2)}
    />
  );
});
