import React, { useState } from "react";
const initt = ["gagan", "kumar"];
const ArrSatet = () => {
  const [persons, setperson] = useState(initt);
  const clickHandler = () => {
    const newperson = [...persons];
    newperson.push("sai");
    newperson.push("chaitanya");
    setperson(newperson);
  };
  return (
    <div>
      <button>click</button>
      {persons.map((person) => {
        return <div key={person}>{person}</div>;
      })}
    </div>
  );
};

export default ArrSatet;
