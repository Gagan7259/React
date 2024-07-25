import React, { useEffect, useRef, useState } from "react";

function ReactHookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((pretimer) => {
        return pretimer + 1; // Return the new value
      });
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Hook Timer - {timer}</h1>
      <button onClick={clearInterval(intervalRef.current)}>Clear Hook timer</button>
    </div>
  );
}

export default ReactHookTimer;
