import React from "react";
import ReactDOM from "react-dom";
import Hello from "../../src/index";

const root = document.createElement("div");
document.body.append(root);
ReactDOM.render(<Hello world="world" />, root);
