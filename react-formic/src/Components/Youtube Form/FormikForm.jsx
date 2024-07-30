import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Reuired"),
  email: Yup.string().email("invalid Email Format").required("Reuired"),
  channel: Yup.string().required("Reuired"),
});
const onSubmit = (values) => {
  console.log("onsubmit Values", values);
};

function FormikForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onsubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <ErrorMessage name="name" />
        </div>
      </Form>
    </Formik>
  );
}

export default FormikForm;
