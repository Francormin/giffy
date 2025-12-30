import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [, navigate] = useLocation();

  const { isLogged, login } = useUser();

  const handleSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
