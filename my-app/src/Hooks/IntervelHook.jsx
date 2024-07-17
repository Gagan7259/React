import React, { useEffect, useState } from "react";

function IntervelHook() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const inetervel = setInterval(tick, 1000);
    return () => {
      clearInterval(inetervel);
    };
  }, [count]);

  return <div>{count}</div>;
}

export default IntervelHook;
