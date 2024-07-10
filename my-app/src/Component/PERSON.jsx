import React from "react";

function PERSON({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age}. I Know {person.skill}
      </h2>
    </div>
  );
}

export default PERSON;
