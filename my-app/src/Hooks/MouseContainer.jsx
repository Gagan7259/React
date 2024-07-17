import React, { useState } from "react";
import HookMouseOver from "./Func/HookMouseOver";

function MouseContainer() {
  const [Display, SetDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          SetDisplay(!Display);
        }}
      >
        Toggle Display
      </button>
      {Display && <HookMouseOver />}
    </div>
  );
}

export default MouseContainer;
