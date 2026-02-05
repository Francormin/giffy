import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";
import LoginForm from "components/LoginForm";
import PageContainer from "components/Layout/PageContainer";

const Login = () => {
  const [, navigate] = useLocation();
  const { isLogged, login, loginIsLoading, loginHasError, clearLoginError } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <Helmet>
        <title>Login | Giffy</title>
        <meta name="description" content="Login to your Giffy account" />
      </Helmet>

      <PageContainer>
        <LoginForm
          login={login}
          loading={loginIsLoading}
          error={loginHasError}
          clearError={clearLoginError}
        />
      </PageContainer>
    </>
  );
};

export default Login;
