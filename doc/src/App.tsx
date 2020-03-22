import React, { ReactElement } from "react";
import { FoobarContainer, Foobar } from "../../src";

export default function App(): ReactElement {
  return (
    <div className="app">
      <FoobarContainer>
        <Foobar>This is my doc</Foobar>
      </FoobarContainer>
    </div>
  );
}
