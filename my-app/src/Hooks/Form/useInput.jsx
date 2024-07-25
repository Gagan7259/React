import  { useState } from "react";

function useInput(intialvalue = 0) {
  const [value, setValue] = useState(intialvalue);
  const reset = () => {
    setValue(intialvalue);
  };

  const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  };
  return [value, bind, reset];
}

export default useInput;
