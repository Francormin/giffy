import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import register from "services/register";
import RegisterFormik from "./RegisterFormik";
import "../../styles/auth.css";
import "./styles.css";

const RegisterForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [, navigate] = useLocation();

  const handleSubmit = (values, { setSubmitting }) => {
    setError(null);

    register(values)
      .then(() => setIsRegistered(true))
      .catch(error => setError(error.message))
      .finally(() => {
        setSubmitting(false);
      });
  };

  useEffect(() => {
    if (!isRegistered) return;

    const timeout = setTimeout(() => {
      navigate("/login");
    }, 6000);

    return () => clearTimeout(timeout);
  }, [isRegistered, navigate]);

  return (
    <div className="auth-container">
      {isRegistered ? (
        <>
          <h3>Congratulations! You&apos;ve been successfully registered!</h3>
          <h4>You&apos;ll be redirected to Login Page in a few seconds...</h4>
        </>
      ) : (
        <>
          <h1>Register</h1>

          <RegisterFormik handleSubmit={handleSubmit} />

          {error && <p className="auth-error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default RegisterForm;
