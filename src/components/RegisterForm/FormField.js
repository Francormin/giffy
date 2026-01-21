import { ErrorMessage, Field, useFormikContext } from "formik";

const FormField = ({ label, name, type }) => {
  const { errors } = useFormikContext();

  return (
    <>
      <label htmlFor={name}>{label}</label>

      <Field
        id={name}
        type={type}
        name={name}
        placeholder={label}
        className={`auth-input ${errors[name] ? "error" : ""}`}
      />

      <ErrorMessage name={name} component="small" className="validation-error" />
    </>
  );
};

export default FormField;
