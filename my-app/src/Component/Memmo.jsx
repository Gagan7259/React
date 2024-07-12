import React from "react";

function Memmo(props) {
  return <div>{props.name}</div>;
}

export default React.memo(Memmo);
