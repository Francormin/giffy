import { useState } from "react";
import "./styles.css";

const LoginForm = ({ login, loading, error }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      {loading && <p className="login-loading">Checking credentials...</p>}

      {!loading && (
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button type="submit" disabled={!username || !password}>
            Login
          </button>
        </form>
      )}

      {error && <p className="login-error">Credentials are invalid!</p>}
    </div>
  );
};

export default LoginForm;
