import React, { useContext } from "react";
import { ContectCount } from "./ParentSix";

export const ChildSix = ({ count }) => {
  const countt = useContext(ContectCount);

  return <div>Hello {countt}.</div>;
};

export const Memochild = React.memo(ChildSix);
