import React from "react";
// import useDocumentTitle from "./useDocumentTitle";
import useCounter from "./useCounter";

function DocTitleTwo() {
  // const [count, setCount] = useState(0);
  // const [counter, setCounter] = useState(0);

  // useDocumentTitle(count);

  const [counter, incr, decr, reset] = useCounter(6, 3);

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Title</button> */}
      <h2>Counter Two -{counter}</h2>
      <button onClick={incr}>Incr</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decr}>Decr</button>
    </div>
  );
}

export default DocTitleTwo;
