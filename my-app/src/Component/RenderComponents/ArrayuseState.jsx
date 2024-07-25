import React, { useState } from "react";
const initstate = ["Gagan", "Kumar"];

const ArrayuseState = () => {
  const [persons, setperson] = useState(initstate);

  const clickhandler = () => {
    // persons.push("Sai");
    // persons.push("chaitanya");
    // setperson(persons);

    const newPerson = [...persons];
    newPerson.push("Sai");
    newPerson.push("chaitanya");
    setperson(newPerson);
  };
  console.log("array state Render");
  return (
    <div>
      <button onClick={clickhandler}>click</button>
      {persons.map((person) => {
        <div key={person}>{person}</div>;
      })}
    </div>
  );
};

export default ArrayuseState;
