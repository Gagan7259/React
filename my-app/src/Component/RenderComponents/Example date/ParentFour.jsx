import React, { useState } from "react";
import { Memochild } from "./ChildFour";
const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Javascript");
  console.log("object");
  return (
    <div>
      <button>
        count-{count} , Name- {name}
      </button>
      <br />
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        icrement
      </button>
      <button onClick={() => setName("React-Js")}>change Name-{name}</button>
      <Memochild name={name} />
    </div>
  );
};

export default ParentFour;
