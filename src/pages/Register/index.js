import { useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet-async";
import useUser from "hooks/useUser";
import RegisterForm from "components/RegisterForm";
import PageContainer from "components/Layout/PageContainer";

const Register = () => {
  const [, navigate] = useLocation();
  const { isLogged } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <Helmet>
        <title>Register | Giffy</title>
        <meta name="description" content="Create your Giffy account" />
      </Helmet>

      <PageContainer>
        <RegisterForm />
      </PageContainer>
    </>
  );
};

export default Register;
