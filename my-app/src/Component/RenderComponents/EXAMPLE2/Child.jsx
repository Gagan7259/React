import React from "react";

export const Child = () => {
    
  console.log("Child Render");
  return (
    <div>
      <h1>child Component</h1>
    </div>
  );
};

export const MomoChild = React.memo(Child);
