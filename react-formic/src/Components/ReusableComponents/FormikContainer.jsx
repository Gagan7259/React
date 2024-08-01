import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
function FormikContainer() {
  const intialvalues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      intialvalues={intialvalues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        <Form>
          <FormikControl control="input" type="email" label="Email" />
          <button type="submit">submit</button>
        </Form>;
      }}
    </Formik>
  );
}

export default FormikContainer;
