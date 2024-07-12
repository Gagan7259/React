import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.a}>Parent</button>
      <button
        onClick={() => {
          props.grret("child");
        }}>
        Parent
      </button>
    </div>
  );
}

export default Child;
