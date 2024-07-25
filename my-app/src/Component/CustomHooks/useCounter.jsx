import { useState } from "react";

function useCounter(intialState = 0, value) {
  const [counter, setCounter] = useState(intialState);
  const incr = (prevCount) => {
    setCounter((prevCount) => prevCount + value);
  };
  const decr = (prevCount) => {
    setCounter((prevCount) => prevCount - value);
  };
  const reset = () => {
    setCounter(0);
  };
  return [counter, incr, decr, reset];
}

export default useCounter;
