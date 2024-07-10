import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={props.grret}>Parent</button>
      <button
        onClick={() => {
          props.grret("child");
        }}
      >
        Parent
      </button>
    </div>
  );
}

export default Child;
