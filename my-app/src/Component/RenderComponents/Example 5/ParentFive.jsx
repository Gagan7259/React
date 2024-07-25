import React, { useCallback, useMemo, useState } from "react";
import { Memochild } from "./Childfive";
const ParentFive = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Javascript");
  console.log("object");
  const person = {
    fname: "Gagan",
    lname: "Kumar",
  };
  const memorizedperson = useMemo(() => person, []);

  const handleclick = () => {};
  const memorizedclick = useCallback(handleclick, []);
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
      {/* <Memochild name={name} person={memorizedperson} /> */}
      <Memochild name={name} handleclickk={memorizedclick} />
    </div>
  );
};

export default ParentFive;
