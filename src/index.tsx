import React from "react";

type Props = {
  world: string;
};

const hello: React.FC<Props> = ({ world }) => (
  <div>
    hello
    {world}
  </div>
);

export default hello;
