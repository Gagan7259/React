import React from "react";
import PERSON from "./PERSON";

function NameList() {
  //   const names = ["Gagan", "Manoj", "Sai"];

  //   const namelist = names.map((name) => {
  //     return <h2>{name}</h2>;
  //   });

  // object
  const persons = [
    {
      id: 1,
      name: "Gagan",
      age: 23,
      skill: "React",
    },
    {
      id: 2,
      name: "Manoj",
      age: 23,
      skill: "java",
    },
  ];
  //   const PersonList = persons.map((person) => {
  //     return (
  //       <h2>
  //         I am {person.name}. I am {person.age} Year Old. I Know {person.skill}
  //       </h2>
  //     );
  //   });
  //   return <div>{{ PersonList }}</div>;

  const PersonList = persons.map((person) => <PERSON key={person.id}  person={person} />);
  return <div>{PersonList}</div>;
}

export default NameList;
