import { useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import LoginForm from "components/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  const [, navigate] = useLocation();
  const { isLogged, login, loginIsLoading, loginHasError } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <Helmet>
        <title>Login | Giffy</title>
        <meta name="description" content="Login to your Giffy account" />
      </Helmet>
      <LoginForm
        login={login}
        loading={loginIsLoading}
        error={loginHasError}
      />
    </>
  );
};

export default Login;
