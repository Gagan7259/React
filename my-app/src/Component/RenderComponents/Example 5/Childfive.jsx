import React from "react";

export const ChildFive = ({ name, person }) => {
  const date = new Date();
  return (
    <div>
      Hello {name}.i am {person.fname}-{person.lname}
    </div>
  );
};

export const Memochild = React.memo(ChildFive);
