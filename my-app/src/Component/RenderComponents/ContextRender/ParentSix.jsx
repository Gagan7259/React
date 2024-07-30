import React, { useCallback, useMemo, useState } from "react";
import { ChildSix, Memochild } from "./Childsix";

export const ContectCount = React.createContext();
const CountProvider = ContectCount.Provider;
const CountConsumer = ContectCount.Consumer;

const ParentSix = () => {
  const [count, setCount] = useState(0);
  console.log("object");

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Count {count}
      </button>
      <CountProvider value={count}>
        <ChildSix />
      </CountProvider>
    </div>
  );
};

export default ParentSix;
