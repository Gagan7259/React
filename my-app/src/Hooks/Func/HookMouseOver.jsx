import React, { useEffect, useState } from "react";

function HookMouseOver() {
  const [x, SetX] = useState(0);
  const [y, SetY] = useState(0);

  const logmousePosition = (e) => {
    console.log("mouse event");
    SetX(e.clientX);
    SetY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logmousePosition);
    return () => {
      window.removeEventListener("mouseover", logmousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X-{x} Y-{y}
    </div>
  );
}

export default HookMouseOver;
