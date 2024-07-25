import React, { useState } from "react";
const intialstate = {
  fname: "Gagan",
  lName: "kumar",
};
const ObjectUsestate = () => {
  const [person, setPerson] = useState(intialstate);
  const changename = () => {
    person.fname = "Manoj" 
    person.lName = "kumar";
    setPerson(person);
  };
  return (
    <div>
      <button onClick={changename}>
        {person.fname}
        {person.lName}
      </button>
    </div>
  );
};

export default ObjectUsestate;
