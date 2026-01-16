import { useState } from "react";
import { useLocation } from "wouter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import register from "services/register";
import "./styles.css";

const initialValues = {
  username: "",
  password: ""
};

const validateFields = values => {
  const errors = {};
  if (!values.username) errors.username = "Username is required";
  if (!values.password) errors.password = "Password is required";
  return errors;
};

const RegisterForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [, navigate] = useLocation();

  if (isRegistered) {
    return (
      <div className="login-container">
        <h3>Congratulations! You&apos;ve been successfully registered!</h3>
        <h4>You&apos;ll be redirected to Login Page in a few seconds...</h4>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1>Register</h1>

      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setSubmitting }) => {
          register(values)
            .then(() => {
              setIsRegistered(true);
              setTimeout(() => {
                navigate("/login");
              }, 6500);
            })
            .catch(error => console.error("error:", error.message))
            .finally(() => {
              setTimeout(() => {
                setSubmitting(false);
              }, 800);
            });
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="login-form">
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className={errors.username ? "input-error" : ""}
            />
            <ErrorMessage name="username" component="small" className="register-error" />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={errors.password ? "input-error" : ""}
            />
            <ErrorMessage name="password" component="small" className="register-error" />

            <button
              type="submit"
              disabled={errors.username || errors.password || isSubmitting}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
