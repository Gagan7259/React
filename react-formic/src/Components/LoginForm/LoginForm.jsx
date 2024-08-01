import React from "react";
import FormikControll from "../ReusbleFormik/FormikControll";
import * as Yup from "yup";
import { Form, Formik } from "formik";
function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email format").required("required"),
    password: Yup.string().required("required"),
  });
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControll
              control="chakrainput"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControll
              control="chakrainput"
              type="password"
              label="Password"
              name="password"
            />
            <button type="sumit" disabled={formik.isValid}>
              submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
