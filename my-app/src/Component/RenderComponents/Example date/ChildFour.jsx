import React from "react";

export const ChildFour = ({ name }) => {
  const date = new Date();
  return (
    <div>
      Hello i'm {name}. its currently {date.getHours()}hr:{date.getMinutes()}
      min:{date.getSeconds()}sec <br />
      {date.getFullYear()}
    </div>
  );
};

export const Memochild = React.memo(ChildFour);
