import { ErrorMessage, Field } from "formik";

const FormField = ({ label, name, type, error }) => (
  <>
    <label htmlFor={name}>
      {label}
    </label>

    <Field
      id={name}
      type={type}
      name={name}
      placeholder={label}
      className={`auth-input ${error ? "error" : ""}`}
    />

    <ErrorMessage
      name={name}
      component="small"
      className="validation-error"
    />
  </>
);

export default FormField;
