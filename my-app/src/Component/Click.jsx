import React from "react";

function Click() {
  function clickHandler() {
    console.log("Button Clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Func Click</button>
    </div>
  );
}

export default Click;
