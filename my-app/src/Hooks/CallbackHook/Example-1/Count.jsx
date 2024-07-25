import React from "react";

function Count({ count, text }) {
  console.log("rendering Count")
  // console.log(count)
  return (
    <div>
      
      {text}-{count}
    </div>
  );
}

export default Count;
