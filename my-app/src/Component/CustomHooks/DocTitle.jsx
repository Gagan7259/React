import React from "react";
// import useDocumentTitle from "./useDocumentTitle";
import useCounter from "./useCounter";

function DocTitle() {
  // const [count, setCount] = useState(0);
  // const [counter, setCounter] = useState(0);
  // useDocumentTitle(count);

  const [counter, incr, decr, reset] = useCounter(10,10);
  useCounter();
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Title</button> */}

      <h2>Counter One-{counter}</h2>
      <button onClick={incr}>Incr</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decr}>Decr</button>
    </div>
  );
}

export default DocTitle;
