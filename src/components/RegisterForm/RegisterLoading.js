import { AuthLoading } from "styles/auth.styles";

const RegisterLoading = ({ isSubmitting }) => {
  if (!isSubmitting) return null;
  return <AuthLoading>Registering user...</AuthLoading>;
};

export default RegisterLoading;
