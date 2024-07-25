import React, { useReducer } from "react";
const intialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "icrement":
      return state + 1;
    case "derement":
      return state - 1;
    case "reset":
      return intialstate;
    default:
      return state;
  }
};
const UseReducerhh = () => {
    console.log("UseReducer")
  const [count, dispatch] = useReducer(reducer, intialstate);
  return (
    <div>
      <button onClick={() => dispatch("icrement")}>incr {count}</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("derement")}>decr</button>
    </div>
  );
};

export default UseReducerhh;
