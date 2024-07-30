import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function FormComponent() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onsubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
}

export default FormComponent;
