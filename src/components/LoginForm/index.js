import { useState } from "react";
import Button from "components/Button";
import Text from "components/Text";
import "../../styles/auth.css";
import "./styles.css";

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
    <div className="auth-container">
      <Text as="h1" variant="heading" style={{ marginBottom: "1rem" }}>
        Login
      </Text>

      {loading && <Text className="auth-loading">Checking credentials...</Text>}

      {!loading && (
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />

          <Button type="submit" disabled={!username || !password}>
            Login
          </Button>
        </form>
      )}

      {error && <Text className="auth-error">{errorMessage}</Text>}
    </div>
  );
};

export default LoginForm;
