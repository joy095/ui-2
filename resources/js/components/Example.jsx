import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./tamplates/App";

function Example() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Example;

if (document.getElementById("example")) {
  ReactDOM.render(
    <BrowserRouter>
      <Example />
    </BrowserRouter>,
    document.getElementById("example")
  );
}
