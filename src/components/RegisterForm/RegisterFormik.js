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
    {({ isValid, isSubmitting }) => (
      <>
        <RegisterLoading isSubmitting={isSubmitting} />

        <Form className={`auth-form ${isSubmitting ? "disabled" : ""}`}>
          <FormField
            label="Username"
            name="username"
            type="text"
          />

          <FormField
            label="Password"
            name="password"
            type="password"
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
