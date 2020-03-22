import React, { Component, ReactNode, ReactElement } from "react";
import "./FoobarContainer.css";

export interface FoobarContainerProps {
  children: ReactNode;
}

interface FoobarContainerState {
  active?: boolean;
}

export default class FoobarContainer extends Component<
  FoobarContainerProps,
  FoobarContainerState
> {
  state: FoobarContainerState = { active: false };

  render(): ReactElement {
    const { children } = this.props;
    const { active } = this.state;
    return (
      <div className={active ? "foobar--active" : "foobar--inactive"}>
        {children}
      </div>
    );
  }
}
