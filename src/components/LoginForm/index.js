import { useState } from "react";
import Button from "components/Button";
import Text from "components/Text";
import { AuthContainer, AuthError, AuthForm, AuthLoading } from "styles/auth.styles";

const LoginForm = ({ login, loading, error, clearError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleUsernameChange = e => {
    setUsername(e.target.value);
    if (error) clearError();
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    if (error) clearError();
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({ username, password })
      .then(() => setErrorMessage(null))
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <AuthContainer>
      <Text as="h1" variant="heading" style={{ marginBottom: "1rem" }}>
        Login
      </Text>

      {loading && <AuthLoading>Checking credentials...</AuthLoading>}

      {!loading && (
        <AuthForm onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button type="submit" disabled={!username || !password}>
            Login
          </Button>
        </AuthForm>
      )}

      {error && <AuthError>{errorMessage}</AuthError>}
    </AuthContainer>
  );
};

export default LoginForm;
