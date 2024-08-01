import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import SelectFormik from "./SelectFormik";
import RadioButtons from "./RadioButtons";
import CheckBoxFormic from "./CheckBoxFormic";
import DatePIcker from "./DatePIcker";
import ChakraInput from "../Chakraui";

function FormikControll(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <SelectFormik {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBoxFormic {...rest} />;
    case "chakrainput":
      return <ChakraInput {...rest} />;
    case "date":
      return <DatePIcker {...rest} />;
    default:
      return null;
  }
}

export default FormikControll;
