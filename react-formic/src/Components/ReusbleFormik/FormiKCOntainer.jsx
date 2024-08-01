import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import FormikControll from "./FormikControll";
function FormiKCOntainer() {
  const dropdownoptions = [
    { key: "select an option", value: "" },
    { key: "option 1", value: "option1" },
    { key: "option 2", value: "option2" },
    { key: "option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "option 1", value: "Roption1" },
    { key: "option 2", value: "Roption2" },
    { key: "option 3", value: "Roption3" },
  ];
  // const checkBoxOptions = [
  //   { key: "option 1", value: "Coption1" },
  //   { key: "option 2", value: "Coption2" },
  //   { key: "option 3", value: "Coption3" },
  // ];
  const initialValues = {
    email: "",
    description: "",
    selectOptions: "",
    radioOption: "",
    ckeckboxoption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOptions: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    ckeckboxoption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form Values", values);
    console.log("saved Data", JSON.parse(JSON.stringify(values)));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControll
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControll
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControll
            control="select"
            label="Select a Topic"
            name="selectOptions"
            options={dropdownoptions}
          />
          <FormikControll
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControll
            control="checkbox"
            label="check box topic"
            name="ckeckboxoption"
            options={checkBoxOptions}
          />

          <FormikControll control="date" label="Pick A Date" name="birthDate" />
          <button type="submit">submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormiKCOntainer;
