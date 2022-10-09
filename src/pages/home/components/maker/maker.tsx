import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const Maker = ({ children }: Props) => {
  return <ul>{children}</ul>;
};

export default Maker;
