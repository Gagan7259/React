import { Field } from "formik";
import React from "react";

function CheckBoxFormic(props) {
  const { name, label, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {(field) => {
          return options.map((option) => {
            const isChecked = Array.isArray(field.value)
              ? field.value.includes(option.value)
              : false;

            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={isChecked}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default CheckBoxFormic;
