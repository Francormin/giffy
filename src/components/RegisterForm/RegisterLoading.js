import { useFormikContext } from "formik";

const RegisterLoading = () => {
  const { isSubmitting } = useFormikContext();

  if (!isSubmitting) return null;
  return <p className="auth-loading">Registering user...</p>;
};

export default RegisterLoading;
