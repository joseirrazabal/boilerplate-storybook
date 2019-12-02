import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs/react";
import { ExpanderCustomizable } from "../src";

const stories = storiesOf("ExpanderCustomizable", module);

stories.add("Expander Customizable", () => {
  return (
    <div>
      <ExpanderCustomizable 
      title={text("Title", 'Busquedas Anteriores')}
      content={text("Contenido", "Resultados de Busquedas")}
      />
    </div>
  );
});

