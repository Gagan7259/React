import React, { useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

const Grandparent = () => {
  const [newCount, setnewCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setnewCount((nc) => nc + 1);
        }}
      >
        GrandParent-{newCount}
      </button>
      <Parent newcount={newCount}>
        <Child />
      </Parent>
    </div>
  );
};

export default Grandparent;
