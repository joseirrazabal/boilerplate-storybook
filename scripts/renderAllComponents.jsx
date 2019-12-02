import React from "react";
import ReactDOM from "react-dom";

import * as Todo from "../src/index";

function App() {
  const options = Object.keys(Todo);
  return (
    <div>
      {options.map(c => {
        let Component = Todo[c];
        return <Component />;
      })}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
