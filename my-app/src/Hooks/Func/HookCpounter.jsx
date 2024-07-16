import React, { useState } from "react";

function HookCpounter() {
  const [name, Setname] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => Setname({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => Setname({ ...name, lastname: e.target.value })} //spread Opertaer
        />
        <h2>your Firstname is {name.firstname}</h2>
        <h2>your Lastname is {name.lastname}</h2>
        <pre>{JSON.stringify(name)}</pre>
      </form>
    </div>
  );
}

export default HookCpounter;
