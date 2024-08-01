import {
  ErrorMessage,
  FastField,
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TextError from "../TextError/TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
    comments: "",
  },
  phonenumbers: ["", ""],
  phNumbers: [""],
};
const savedValues = {
  name: "Gagan",
  email: "gagan@gmail.com",
  channel: "Naruto",
  comments: "ghcfgvjhk",
  address: "",
  social: {
    facebook: "",
    twitter: "",
    comments: "",
  },
  phonenumbers: ["", ""],
  phNumbers: [""],
};
const onSubmit = (values, onSubmitProps) => {
  // console.log("Form Data", values);
  console.log("Form Data", onSubmitProps);
  onSubmitProps.setSubmittimg(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});
const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};
function YoutubeSecond() {
  const [FormValues, setFormValues] = useState(null);
  // console.log("visited Feilds");
  return (
    <Formik
      initialValues={FormValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        console.log("Formik props ", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" />
            </div>
            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {(props) => {
                  console.log("feild render");
                  const { field, form, meta } = props;
                   console.log(form)
                  // console.log("Render Props ", props);
                  return (
                    <div>
                      <input type="text" name="address" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
              <ErrorMessage name="address" />
            </div>
            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebbok" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>
            <div className="form-control">
              <label htmlFor="PrimaryPh">Primary Ph</label>
              <Field type="text" id="PrimaryPh" name="phonenumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">secondary Ph</label>
              <Field type="text" id="secondaryPh" name="phonenumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  console.log(form.errors);
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="button"
              onClick={() => {
                formik.setFieldTouched("comments");
              }}
            >
              visited comments
            </button>
            <button
              type="button"
              onClick={() => {
                formik.validateForm();
              }}
            >
              validate All
            </button>
            <button
              type="button"
              onClick={() => {
                formik.setTouched();
              }}
            >
              visit feilds
            </button> */}

            {/* <button type="submit" disabled={!(formik.dirty && formik.isValid)}>
              submit
            </button> */}
            <button type="submit" disabled={formik.isSubmitting}>
              submit
            </button>
            <button
              type="submit"
              onClick={() => {
                setFormValues(savedValues);
              }}
            >
              saved Data
            </button>
            <button type="reset">Reset</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeSecond;
