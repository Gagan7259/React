import React from "react";
import InputFormikcontrol from "./InputFormikcontrol";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputFormikcontrol {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }

  
  return;
}

export default FormikControl;
