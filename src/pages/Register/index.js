import { Helmet } from "react-helmet-async";
import RegisterForm from "components/RegisterForm";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register | Giffy</title>
        <meta name="description" content="Create your Giffy account" />
      </Helmet>

      <RegisterForm />
    </>
  );
};

export default Register;
