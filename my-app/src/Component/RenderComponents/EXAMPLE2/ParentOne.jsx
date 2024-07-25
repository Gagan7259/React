import React, { useState } from "react";
import { MomoChild } from "./Child";

const ParentOne = () => {
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

      <MomoChild name={name} />
    </div>
  );
};

export default ParentOne;
