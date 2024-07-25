import React, { useMemo, useState } from "react";

function Counter() {
  const [countOne, SetcounterOne] = useState(0);
  const [countTwo, SetcounterTwo] = useState(0);
  const incrOne = () => {
    SetcounterOne(countOne + 1);
  };
  const incrTwo = () => {
    SetcounterTwo(countTwo + 1);
  };
  const isEven = useMemo(() => {
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={incrOne}> Counter - {countOne}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incrTwo}> Counter - {countTwo}</button>
      </div>
    </div>
  );
}

export default Counter;
