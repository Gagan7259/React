import React, { useContext } from "react";
import { CountContext } from "./Maincomp";
function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component - {countContext.Countstatee}
      <button
        onClick={() => {
          countContext.countDispacth("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countContext.countDispacth("decrement");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          countContext.countDispacth("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
