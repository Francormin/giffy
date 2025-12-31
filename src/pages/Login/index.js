import { useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import LoginForm from "components/LoginForm";

const Login = () => {
  const [, navigate] = useLocation();
  const { isLogged, login, loginIsLoading, loginHasError } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <LoginForm
      login={login}
      loading={loginIsLoading}
      error={loginHasError}
    />
  );
};

export default Login;
