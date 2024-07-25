import React, { useEffect, useRef } from "react";

function Focus() {
  const inputref = useRef(1);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputref} />
    </div>
  );
}

export default Focus;
