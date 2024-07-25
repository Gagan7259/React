import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
const Intialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return Intialstate;
    default:
      return state;
  }
};
export const CountContext = React.createContext();
function Maincomp() {
  const [count, dispatch] = useReducer(reducer, Intialstate);
  return (
    <CountContext.Provider
      value={{ Countstatee: count, countDispacth: dispatch }}
    >
      <div>
        count- {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default Maincomp;
