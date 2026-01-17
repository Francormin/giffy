import { Formik, Form } from "formik";
import { initialValues, validateFields } from "./register.schema";
import RegisterLoading from "./RegisterLoading";
import FormField from "./FormField";

const RegisterFormik = ({ handleSubmit }) => (
  <Formik
    initialValues={initialValues}
    validate={validateFields}
    onSubmit={handleSubmit}
  >
    {({ errors, isValid, isSubmitting }) => (
      <>
        <RegisterLoading />

        <Form className={`auth-form ${isSubmitting ? "disabled" : ""}`}>
          <FormField
            label="Username"
            name="username"
            type="text"
            error={errors.username}
          />

          <FormField
            label="Password"
            name="password"
            type="password"
            error={errors.password}
          />

          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </Form>
      </>
    )}
  </Formik>
);

export default RegisterFormik;
