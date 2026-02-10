import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import register from "services/register";
import RegisterHookForm from "./RegisterHookForm";
import Text from "components/Text";
import { AuthContainer, AuthError } from "styles/auth.styles";

const RegisterForm = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(null);
  const [, navigate] = useLocation();

  const clearError = () => setError(null);

  const handleSubmit = values => {
    setError(null);

    return register(values)
      .then(() => setIsRegistered(true))
      .catch(error => setError(error.message));
  };

  useEffect(() => {
    if (!isRegistered) return;

    const timeout = setTimeout(() => {
      navigate("/login");
    }, 6000);

    return () => clearTimeout(timeout);
  }, [isRegistered, navigate]);

  return (
    <AuthContainer>
      {isRegistered ? (
        <>
          <Text as="h3" variant="heading">
            Congratulations! You&apos;ve been successfully registered!
          </Text>
          <Text>You&apos;ll be redirected to Login Page in a few seconds...</Text>
        </>
      ) : (
        <>
          <Text as="h1" variant="heading" style={{ marginBottom: "1rem" }}>
            Register
          </Text>

          <RegisterHookForm onSubmit={handleSubmit} onChange={clearError} />

          {error && <AuthError>{error}</AuthError>}
        </>
      )}
    </AuthContainer>
  );
};

export default RegisterForm;
