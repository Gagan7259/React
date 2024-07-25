import React from "react";
import useInput from "./useInput";

function Form() {
  //   const [firstName, setfirstName] = useState("");
  //   const [lastName, setlastName] = useState("");
  const [firstName, bindFirstname, resetfirstname] = useInput("");
  const [lastName, bindlastNamee, resetlastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName}  ${lastName} `);
    resetfirstname();
    resetlastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...bindFirstname} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...bindlastNamee} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Form;
