import React from "react";

function Button({ handleclick, children }) {
  console.log("Rendering Button", children);
  return (
    <div>
      <button onClick={handleclick}>{children}</button>
    </div>
  );
}

export default Button;
