import React from "react";

function Destructring(props) {
  const { name, HeroName } = props;

  return (
    <div>
      <h1>
        Hello {name} also Know As {HeroName}
      </h1>
    </div>
  );
}

export default Destructring;
