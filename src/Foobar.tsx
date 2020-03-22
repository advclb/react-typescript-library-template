import React, { ReactElement, ReactNode } from "react";
import "./Foobar.css";

export type FoobarProps = {
  children: ReactNode;
};

export default function Foobar({ children }: FoobarProps): ReactElement {
  return <div>{children}</div>;
}
